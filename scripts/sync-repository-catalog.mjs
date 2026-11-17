/**
 * Fetches GitHub org/user repos and GitLab user repos, writes src/lib/repository-catalog.ts
 * Run: node scripts/sync-repository-catalog.mjs
 */
import { execSync } from "node:child_process";
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const outPath = join(root, "src/lib/repository-catalog.ts");
const websitesPath = join(root, "src/lib/org-websites.json");
const websitesOnly = process.argv.includes("--websites-only");

const GITHUB_ORGS = [
  "AMDphreak",
  "dev-centr",
  "FoodTruckNerdz",
  "HCI-Nerdz",
  "antora-supplemental",
  "dlang-supplemental",
  "formatte",
  "openshellorg",
  "LinxPhotos",
  "memphis-cs-projects",
  "Cook-Systems-Team-Blue-Feb-2021-Ryan",
];

/**
 * GitLab project name -> group identity, when that repo belongs with an org
 * even though the GitLab owner is the personal account.
 */
const GITLAB_PROJECT_ASSIGNMENTS = {
  antora: "antora-supplemental",
  "antora-ui-default": "antora-supplemental",
};

/**
 * `${provider}:${ownerOnThatHost}` -> stable group identity.
 * Identity is the org or the person, never host+slug. Add a line here when a
 * GitLab or Codeberg owner should join an existing group.
 */
const OWNER_IDENTITY = {
  "github:dev-centr": "dev-centr",
  "github:FoodTruckNerdz": "FoodTruckNerdz",
  "github:HCI-Nerdz": "HCI-Nerdz",
  "github:antora-supplemental": "antora-supplemental",
  "github:dlang-supplemental": "dlang-supplemental",
  "github:AMDphreak": "personal",
  "github:formatte": "formatte",
  "github:openshellorg": "openshellorg",
  "github:LinxPhotos": "LinxPhotos",
  "github:memphis-cs-projects": "memphis-cs-projects",
  "github:Cook-Systems-Team-Blue-Feb-2021-Ryan": "cook-systems",
  "gitlab:AMDphreak": "personal",
};

const GROUP_META = {
  "dev-centr": {
    id: "dev-centr",
    title: "Dev-Centr",
    tagline: "Developer environment configuration, tooling, and documentation.",
  },
  FoodTruckNerdz: {
    id: "FoodTruckNerdz",
    title: "Food Truck Nerdz",
    tagline: "Food truck discovery platform — web, mobile, and API.",
  },
  "HCI-Nerdz": {
    id: "HCI-Nerdz",
    title: "HCI Nerdz",
    tagline: "HCI and UI/UX innovation — honest surfaces, lower cognitive tax.",
  },
  "antora-supplemental": {
    id: "antora-supplemental",
    title: "Antora Supplemental",
    tagline: "Themes, workflows, and extensions for Antora documentation sites.",
  },
  "dlang-supplemental": {
    id: "dlang-supplemental",
    title: "Dlang Supplemental",
    tagline: "D language libraries, GUI tooling, and documentation.",
  },
  personal: {
    id: "AMDphreak",
    title: "Personal Projects",
    tagline: "Personal repositories on any git host.",
  },
  formatte: { id: "formatte", title: "formatte", tagline: "Formatting tooling organization." },
  openshellorg: { id: "openshellorg", title: "Open Shell Org", tagline: "Open Shell community." },
  LinxPhotos: { id: "LinxPhotos", title: "LinxPhotos", tagline: "Photo service and documentation." },
  "memphis-cs-projects": {
    id: "memphis-cs-projects",
    title: "Memphis CS Projects",
    tagline: "University coursework and team projects.",
  },
  "cook-systems": {
    id: "Cook-Systems-Team-Blue-Feb-2021-Ryan",
    title: "Cook Systems (Team Blue)",
    tagline: "Cook Systems training cohort repositories.",
  },
};

const GROUP_ORDER = [
  "dev-centr",
  "FoodTruckNerdz",
  "HCI-Nerdz",
  "antora-supplemental",
  "dlang-supplemental",
  "personal",
  "formatte",
  "openshellorg",
  "LinxPhotos",
  "memphis-cs-projects",
  "cook-systems",
];

function ghJson(args) {
  const out = execSync(`gh ${args}`, { encoding: "utf8", maxBuffer: 20 * 1024 * 1024 });
  return JSON.parse(out);
}

function glabJson() {
  try {
    const out = execSync("glab repo list --per-page 100 --output json", {
      encoding: "utf8",
      maxBuffer: 20 * 1024 * 1024,
    });
    const start = out.indexOf("[");
    if (start < 0) return [];
    return JSON.parse(out.slice(start));
  } catch (err) {
    console.warn("skip gitlab (glab unavailable):", err?.message || err);
    return [];
  }
}

function normalizeGh(repo, owner) {
  return {
    name: repo.name,
    description: (repo.description || "").trim() || undefined,
    url: repo.url,
    provider: "github",
    owner,
    isPrivate: repo.isPrivate,
    isFork: repo.isFork,
    pushedAt: repo.pushedAt || undefined,
  };
}

function gitlabOwner(project) {
  const full = project.path_with_namespace || project.namespace?.full_path || "";
  const owner = String(full).split("/")[0];
  return owner || "AMDphreak";
}

function normalizeGl(project) {
  return {
    name: project.path,
    description: (project.description || "").trim() || undefined,
    url: project.web_url,
    provider: "gitlab",
    owner: gitlabOwner(project),
    isPrivate: project.visibility === "private",
    isFork: Boolean(project.forked_from_project),
    pushedAt: project.last_activity_at || undefined,
  };
}

function pushedTime(repo) {
  const time = repo.pushedAt ? Date.parse(repo.pushedAt) : Number.NaN;
  return Number.isNaN(time) ? null : time;
}

function sortRepos(a, b) {
  const ta = pushedTime(a);
  const tb = pushedTime(b);
  if (ta === null && tb === null) return a.name.localeCompare(b.name, undefined, { sensitivity: "base" });
  if (ta === null) return 1;
  if (tb === null) return -1;
  if (tb !== ta) return tb - ta;
  return a.name.localeCompare(b.name, undefined, { sensitivity: "base" });
}

if (!websitesOnly) {
const groups = new Map();
for (const identity of GROUP_ORDER) {
  const meta = GROUP_META[identity];
  groups.set(identity, { identity, ...meta, repositories: [] });
}

for (const org of GITHUB_ORGS) {
  const identity = OWNER_IDENTITY[`github:${org}`];
  const group = identity && groups.get(identity);
  if (!group) {
    console.warn(`skip github ${org} (no group identity)`);
    continue;
  }
  let repos = [];
  try {
    repos = ghJson(
      `repo list ${org} --limit 300 --json name,description,url,isPrivate,isFork,pushedAt`,
    );
  } catch {
    console.warn(`skip github ${org}`);
    continue;
  }
  for (const r of repos) {
    group.repositories.push(normalizeGh(r, org));
  }
}

for (const p of glabJson()) {
  const entry = normalizeGl(p);
  const assigned = GITLAB_PROJECT_ASSIGNMENTS[entry.name];
  const identity =
    (assigned && groups.has(assigned) && assigned) || OWNER_IDENTITY[`gitlab:${entry.owner}`];
  const group = identity && groups.get(identity);
  if (!group) {
    console.warn(`skip gitlab ${entry.owner}/${entry.name} (no group identity)`);
    continue;
  }
  group.repositories.push(entry);
}

for (const g of groups.values()) {
  g.repositories.sort(sortRepos);
}

const catalog = GROUP_ORDER.map((id) => groups.get(id)).filter((g) => g.repositories.length > 0);

const generated = `/* eslint-disable */
/** Auto-generated by scripts/sync-repository-catalog.mjs — do not edit by hand. */
export type RepositoryProvider = "github" | "gitlab" | "codeberg";

export type CatalogRepository = {
  name: string;
  description?: string;
  url: string;
  provider: RepositoryProvider;
  owner: string;
  isPrivate: boolean;
  isFork: boolean;
  /** Last push (GitHub pushedAt) or GitLab list last_activity_at. Omitted when the host did not send one. */
  pushedAt?: string;
};

export type CatalogProjectGroup = {
  id: string;
  /** Org or person. Repos from any git host with this identity share the group. */
  identity: string;
  title: string;
  tagline?: string;
  repositories: CatalogRepository[];
};

export const repositoryCatalog: CatalogProjectGroup[] = ${JSON.stringify(catalog, null, 2)};

export const catalogGeneratedAt = ${JSON.stringify(new Date().toISOString().slice(0, 10))};

export function catalogRepoCount(): number {
  return repositoryCatalog.reduce((n, g) => n + g.repositories.length, 0);
}
`;

writeFileSync(outPath, generated, "utf8");
const total = catalog.reduce((n, g) => n + g.repositories.length, 0);
console.log(`Wrote ${outPath} (${catalog.length} groups, ${total} repos)`);
}

await updateOrgWebsites();

/**
 * Refresh GitHub org/user `blog` into src/lib/org-websites.json.
 * No token. On rate limit, network failure, or a non-OK response, keep the last blog.
 */
async function updateOrgWebsites() {
  let data = { generatedAt: null, profiles: {} };
  try {
    data = JSON.parse(readFileSync(websitesPath, "utf8"));
  } catch {
    console.warn("no org-websites.json yet; starting empty");
  }
  const profiles = data.profiles ?? {};
  for (const [login, profile] of Object.entries(profiles)) {
    if (profile.kind !== "org" && profile.kind !== "user") continue;
    const endpoint =
      profile.kind === "user"
        ? `https://api.github.com/users/${encodeURIComponent(login)}`
        : `https://api.github.com/orgs/${encodeURIComponent(login)}`;
    try {
      const res = await fetch(endpoint, {
        headers: {
          Accept: "application/vnd.github+json",
          "User-Agent": "amdphreak-github-io-catalog",
        },
      });
      if (!res.ok) {
        console.warn(`keep last website for ${login} (HTTP ${res.status})`);
        continue;
      }
      const body = await res.json();
      profile.blog = normalizeBlog(body.blog);
      console.log(`${login} website: ${profile.blog ?? "(none)"}`);
    } catch (err) {
      console.warn(`keep last website for ${login}: ${err?.message || err}`);
    }
  }
  data.generatedAt = new Date().toISOString().slice(0, 10);
  data.profiles = profiles;
  writeFileSync(websitesPath, `${JSON.stringify(data, null, 2)}\n`, "utf8");
  console.log(`Wrote ${websitesPath}`);
}

function normalizeBlog(blog) {
  if (typeof blog !== "string") return null;
  const trimmed = blog.trim();
  if (!trimmed) return null;
  const withScheme = /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
  let url;
  try {
    url = new URL(withScheme);
  } catch {
    console.warn(`ignore unusable website ${trimmed}`);
    return null;
  }
  if (url.protocol !== "http:" && url.protocol !== "https:") return null;
  if ((url.pathname === "/" || url.pathname === "") && !url.search && !url.hash) {
    return `${url.protocol}//${url.host}`;
  }
  return url.href;
}

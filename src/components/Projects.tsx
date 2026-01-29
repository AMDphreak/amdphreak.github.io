// Static project data
const publicProjects = [
  {
    name: "Transcoder Suite",
    description:
      "Modular, playbook-driven video transcoding system for PowerShell 7. Optimized for high-quality archival and batch processing.",
    html_url: "https://github.com/AMDphreak/transcoder-suite",
    platform: "github",
  },
  {
    name: "antora-dark-theme",
    description:
      "Dark mode supplemental UI theme for Antora documentation sites",
    html_url: "https://github.com/the-dev-center/antora-dark-theme",
    platform: "github",
  },
  {
    name: "antora-themes-site",
    description: "Official site for Antora themes",
    html_url: "https://github.com/the-dev-center/antora-themes-site",
    platform: "github",
  },
  {
    name: "Windows Theme Autochanger",
    description: "Automatic Windows theme switcher based on time of day",
    html_url: "https://github.com/AMDphreak/Windows-Theme-Autochanger",
    platform: "github",
  },
  {
    name: "dsam-resources",
    description: "DSAM's resources directory for families with special needs",
    html_url: "https://github.com/AMDphreak/dsam-resources",
    platform: "github",
  },
  {
    name: "cyberpanel-uninstaller",
    description: "Uninstaller script for CyberPanel",
    html_url: "https://github.com/AMDphreak/cyberpanel-uninstaller",
    platform: "github",
  },
  {
    name: "BlackJackGame",
    description: "A simple Blackjack game implementation",
    html_url: "https://github.com/AMDphreak/BlackJackGame",
    platform: "github",
  },
  {
    name: "packet-x-ing",
    description: "Network packet analysis tool",
    html_url: "https://gitlab.com/AMDphreak/packet-x-ing",
    platform: "gitlab",
  },
];

// Additional project data for projects that need extra links
const projectExtraData = {
  "https://github.com/AMDphreak/transcoder-suite": {
    docsUrl: "https://amdphreak.github.io/transcoder-suite/",
  },
  "https://github.com/AMDphreak/BlackJackGame": {
    demoUrl: "https://www.onlinegdb.com/edit/yV6LLFNPs",
  },
};

// Private projects data (manually defined since they're not public)
const privateProjects = [
  {
    name: "FTN App",
    description: "Food Truck Nerdz Next.js Web App",
    technologies: ["Next.js", "Vercel", "Convex DB"],
    repoUrl: "https://github.com/FoodTruckNerds/ftn-site-vercel",
    websiteUrl: "https://www.foodtrucknerdz.com",
    type: "private",
  },
  {
    name: "Food Truck API",
    description: "Food Truck Zuplo API Gateway",
    technologies: ["Zuplo", "API Gateway", "Node.js"],
    repoUrl: "https://github.com/FoodTruckNerds/food-truck-api",
    type: "private",
  },
  {
    name: "FTN Onboarding",
    description:
      "Onboarding documentation and Setup GUI to bootstrap dev environment",
    technologies: ["PowerShell", "Documentation"],
    repoUrl: "https://github.com/FoodTruckNerds/onboarding",
    type: "private",
  },
  {
    name: "Dev Center App",
    description:
      "A developer center app for configuring dev machines and managing software projects",
    technologies: ["React", "Tauri", "TypeScript"],
    repoUrl: "https://github.com/the-dev-center/dev-center",
    type: "private",
  },
  {
    name: "Dev Center Templates",
    description: "Template settings files for dev tools",
    technologies: ["VS Code", "Settings", "Configuration"],
    repoUrl: "https://github.com/the-dev-center/templates",
    type: "private",
  },
  {
    name: "DSAM Christmas 2025",
    description: "DSAM 2025 Christmas party capture one preview",
    technologies: ["GitLab", "Photography", "Preview"],
    repoUrl: "https://gitlab.com/AMDphreak/dsam-christmas-2025-preview",
    type: "private",
  },
];

// Work in progress projects
const workInProgressProjects = [
  {
    name: "Desktop Assistant AI",
    description:
      "AI-powered desktop assistant for productivity and automation.",
    technologies: ["AI", "Desktop Application"],
    repoUrl: "https://github.com/AMDphreak/Desktop-Assistant-AI",
    type: "work-in-progress",
  },
];

// Function to get organization logo from Git URL
const getOrgLogo = (repoUrl: string): string | null => {
  if (!repoUrl) return null;

  try {
    const url = new URL(repoUrl);
    const hostname = url.hostname;
    const pathParts = url.pathname.split("/").filter((p) => p);

    if (pathParts.length < 1) return null;
    const org = pathParts[0];

    // Use CORS-safe avatar URLs that don't require preflight requests
    if (hostname.includes("github.com")) {
      return `https://avatars.githubusercontent.com/${org}`;
    } else if (hostname.includes("gitlab.com")) {
      // Only return explicit avatar for AMDphreak; otherwise default to none
      if (org.toLowerCase() === "amdphreak") {
        return "https://gitlab.com/uploads/-/system/user/avatar/620900/avatar.png";
      }
      return null;
    } else if (hostname.includes("bitbucket.org")) {
      // Default to no avatar for Bitbucket unless explicitly mapped
      return null;
    }
  } catch (e) {
    console.warn("Failed to parse repo URL for logo:", repoUrl, e);
  }

  return null;
};

// Function to get appropriate icon for code repositories
const getCodeIcon = (platform: string, url: string): string => {
  if (platform === "gitlab") {
    return "fab fa-gitlab";
  } else if (platform === "github") {
    return "fab fa-github";
  } else if (url.includes("github.com")) {
    return "fab fa-github";
  } else if (url.includes("gitlab.com")) {
    return "fab fa-gitlab";
  } else if (url.includes("bitbucket.org")) {
    return "fab fa-bitbucket";
  } else if (url.includes(".git") || url.includes("git")) {
    return "fab fa-git-alt";
  } else {
    return "fas fa-code";
  }
};

// All projects combined
const allProjects = [
  ...privateProjects,
  ...workInProgressProjects,
  ...publicProjects,
];

const ProjectCard = (props: { repo: any }) => {
  const orgLogo = getOrgLogo(props.repo.html_url);

  const getTypeBadge = (type: string) => {
    if (type === "private") {
      return (
        <span class="inline-flex items-center px-2 py-1 text-xs font-medium text-stone-600 bg-stone-50 dark:text-stone-400 dark:bg-stone-800/30 rounded-full border border-stone-200 dark:border-stone-700">
          <i class="fas fa-lock mr-1"></i>
          Private
        </span>
      );
    } else if (type === "work-in-progress") {
      return (
        <span class="inline-flex items-center px-2 py-1 text-xs font-medium text-slate-600 bg-slate-50 dark:text-slate-400 dark:bg-slate-800/30 rounded-full border border-slate-200 dark:border-slate-700">
          <i class="fas fa-hammer mr-1"></i>
          Work in Progress
        </span>
      );
    }
    return null;
  };

  return (
    <div class="card-sm">
      <div class="flex items-start justify-between mb-4">
        <div class="flex-1 mr-3">
          <div class="flex items-center gap-2 mb-2">
            <h3 class="section-heading-sm">{props.repo.name}</h3>
            {getTypeBadge(props.repo.type)}
          </div>
        </div>
        {orgLogo && (
          <img
            src={orgLogo}
            alt="Organization/User avatar"
            class="w-8 h-8 rounded-full flex-shrink-0"
          />
        )}
      </div>
      <p class="text-muted text-sm mb-4 line-clamp-2">
        {props.repo.description}
      </p>
      <div class="flex gap-2">
        <a
          href={props.repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          class="btn-primary btn-sm"
        >
          <i
            class={`${getCodeIcon(props.repo.platform, props.repo.html_url)} mr-2`}
          ></i>
          Code
        </a>
        {projectExtraData[props.repo.html_url]?.demoUrl && (
          <a
            href={projectExtraData[props.repo.html_url].demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            class="btn-secondary btn-sm"
          >
            <i class="fas fa-external-link-alt mr-2"></i>
            Demo
          </a>
        )}
        {projectExtraData[props.repo.html_url]?.docsUrl && (
          <a
            href={projectExtraData[props.repo.html_url].docsUrl}
            target="_blank"
            rel="noopener noreferrer"
            class="btn-secondary btn-sm"
          >
            <i class="fas fa-book mr-2"></i>
            Docs
          </a>
        )}
      </div>
    </div>
  );
};

const PrivateProjectCard = (props: { project: any }) => {
  const orgLogo = props.project.repoUrl
    ? getOrgLogo(props.project.repoUrl)
    : null;

  const getTypeBadge = (type: string) => {
    if (type === "private") {
      return (
        <span class="inline-flex items-center px-2 py-1 text-xs font-medium text-stone-600 bg-stone-50 dark:text-stone-400 dark:bg-stone-800/30 rounded-full border border-stone-200 dark:border-stone-700">
          <i class="fas fa-lock mr-1"></i>
          Private
        </span>
      );
    } else if (type === "work-in-progress") {
      return (
        <span class="inline-flex items-center px-2 py-1 text-xs font-medium text-slate-600 bg-slate-50 dark:text-slate-400 dark:bg-slate-800/30 rounded-full border border-slate-200 dark:border-slate-700">
          <i class="fas fa-hammer mr-1"></i>
          Work in Progress
        </span>
      );
    }
    return null;
  };

  return (
    <div class="card-sm">
      <div class="flex items-start justify-between mb-4">
        <div class="flex-1 mr-3">
          <div class="flex items-center gap-2 mb-2">
            <h3 class="section-heading-sm">{props.project.name}</h3>
            {getTypeBadge(props.project.type)}
          </div>
        </div>
        {orgLogo && (
          <img
            src={orgLogo}
            alt="Organization logo"
            class="w-8 h-8 rounded-full flex-shrink-0"
          />
        )}
      </div>
      <p class="text-muted text-sm mb-2 line-clamp-2">
        {props.project.description}
      </p>
      {props.project.technologies && (
        <div class="mb-3">
          <div class="text-subtle text-xs">
            {props.project.technologies.join(" • ")}
          </div>
        </div>
      )}
      <div class="flex gap-2">
        {props.project.repoUrl && (
          <a
            href={props.project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            class="btn-primary btn-sm"
          >
            <i class={`${getCodeIcon("", props.project.repoUrl)} mr-2`}></i>
            Code
          </a>
        )}
        {props.project.websiteUrl && (
          <a
            href={props.project.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            class="btn-secondary btn-sm"
          >
            <i class="fas fa-external-link-alt mr-2"></i>
            Website
          </a>
        )}
        {!props.project.repoUrl && !props.project.websiteUrl && (
          <div class="inline-flex items-center px-3 py-2 text-sm font-medium text-subtle">
            <i class="fas fa-lock mr-2"></i>
            Private Project
          </div>
        )}
      </div>
    </div>
  );
};

export const Projects = () => {
  return (
    <div class="card">
      <h2 class="section-heading">Projects</h2>

      <div class="grid-projects">
        {allProjects.map((project) => {
          // Use PrivateProjectCard for projects with type attribute, ProjectCard for others
          if ("type" in project) {
            return <PrivateProjectCard project={project} />;
          } else {
            return <ProjectCard repo={project} />;
          }
        })}
      </div>
    </div>
  );
};

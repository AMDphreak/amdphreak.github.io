// Dynamic projects population from GitHub repositories
const githubRepos = [
  "https://github.com/AMDphreak/Windows-Theme-Autochanger",
  "https://gitlab.com/AMDphreak/packet-x-ing",
];

// Function to attempt to get organization logo from Git URL
const getOrgLogo = async (repoUrl: string): Promise<string | null> => {
  if (!repoUrl) return null;

  try {
    const url = new URL(repoUrl);
    const hostname = url.hostname;
    const pathParts = url.pathname.split("/").filter((p) => p);

    if (pathParts.length < 1) return null;
    const org = pathParts[0];

    // Try different logo URL patterns based on Git hosting service
    const logoUrls = [];

    if (hostname.includes("github.com")) {
      // Try common GitHub avatar patterns (organizations often use the same system as users)
      logoUrls.push(`https://avatars.githubusercontent.com/${org}`);
      logoUrls.push(`https://github.com/${org}.png`);
    } else if (hostname.includes("gitlab.com")) {
      // GitLab avatar patterns - try multiple approaches
      // Primary: Try the API endpoints which redirect to actual avatars
      logoUrls.push(`https://gitlab.com/api/v4/users/${org}/avatar`);
      logoUrls.push(`https://gitlab.com/api/v4/groups/${org}/avatar`);
      // Secondary: Try direct upload paths
      logoUrls.push(
        `https://gitlab.com/uploads/-/system/user/avatar/${org}/avatar.png`
      );
      logoUrls.push(
        `https://gitlab.com/uploads/-/system/group/avatar/${org}/avatar.png`
      );
      // Tertiary: Alternative patterns
      logoUrls.push(`https://gitlab.com/${org}.png`);
      logoUrls.push(`https://avatars.githubusercontent.com/${org}`); // fallback to GitHub style
    } else if (hostname.includes("bitbucket.org")) {
      logoUrls.push(`https://bitbucket.org/${org}/avatar/32/`);
    }

    // Try to fetch each logo URL
    for (const logoUrl of logoUrls) {
      try {
        const response = await fetch(logoUrl, { method: "HEAD" });
        if (response.ok) {
          return logoUrl;
        }
      } catch (e) {
        // Continue to next URL
      }
    }

    // If no logo found, try a generic approach for custom domains
    if (
      !hostname.includes("github.com") &&
      !hostname.includes("gitlab.com") &&
      !hostname.includes("bitbucket.org")
    ) {
      // Try favicon as fallback
      return `https://${hostname}/favicon.ico`;
    }
  } catch (e) {
    console.warn("Failed to parse repo URL for logo:", repoUrl, e);
  }

  return null;
};

// Private projects data (manually defined since they're not public)
const privateProjects = [
  {
    name: "Food Truck Nerdz",
    description:
      "A comprehensive dashboard for internal company metrics and analytics with real-time data visualization.",
    technologies: ["Vercel", "Next.js & React", "Convex DB", "Square API"],
    repoUrl: "https://github.com/FoodTruckNerds",
    websiteUrl: "https://www.foodtrucknerdz.com",
  },
];

const fetchGitHubRepo = async (url: string) => {
  try {
    // Extract owner and repo from URL
    const urlParts = url.replace(/\/$/, "").split("/");
    const owner = urlParts[urlParts.length - 2];
    const repo = urlParts[urlParts.length - 1];
    const isGitLab = url.includes("gitlab.com");

    if (isGitLab) {
      // Fetch from GitLab API
      const projectPath = `${owner}%2F${repo}`;
      const gitlabResponse = await fetch(
        `https://gitlab.com/api/v4/projects/${projectPath}`
      );
      if (!gitlabResponse.ok)
        throw new Error(`Failed to fetch GitLab project ${url}`);
      const gitlabData = await gitlabResponse.json();

      return {
        name: repo
          .replace(/-/g, " ")
          .replace(/\b\w/g, (l: string) => l.toUpperCase()),
        description: gitlabData.description || "No description available",
        html_url: url,
        platform: "gitlab",
      };
    }

    // Fetch from GitHub API
    const response = await fetch(
      `https://api.github.com/repos/${owner}/${repo}`
    );
    if (!response.ok) throw new Error(`Failed to fetch ${url}`);
    const data = await response.json();

    return {
      name: data.name
        .replace(/-/g, " ")
        .replace(/\b\w/g, (l: string) => l.toUpperCase()),
      description: data.description || "No description available",
      html_url: data.html_url,
      platform: "github",
    };
  } catch (error) {
    console.error(`Error fetching repo ${url}:`, error);
    return null;
  }
};

const createProjectCard = async (repo: any) => {
  if (!repo) return "";

  const iconClass =
    repo.platform === "gitlab" ? "fab fa-gitlab" : "fab fa-github";
  const labelText = `View on ${
    repo.platform === "gitlab" ? "GitLab" : "GitHub"
  }`;

  // Try to get organization/user avatar
  const orgLogo = await getOrgLogo(repo.html_url);

  const logoHtml = orgLogo
    ? `<img src="${orgLogo}" alt="Organization/User avatar" class="project-org-logo" onerror="this.style.display='none'">`
    : "";

  return `
      <a href="${repo.html_url}" target="_blank" class="project-card-link">
        <div class="project-card public-project-card">
          ${logoHtml}
          <h2>${repo.name}</h2>
          <p>${repo.description}</p>
          <div class="project-link-container">
            <span class="project-label">${labelText}</span>
            <i class="${iconClass} project-icon"></i>
          </div>
        </div>
      </a>
    `;
};

const createPrivateProjectCard = async (project: any) => {
  const technologiesHtml = project.technologies
    ? `<div class="project-technologies">${project.technologies.join(
        " • "
      )}</div>`
    : "";

  // Try to get organization logo
  const orgLogo = await getOrgLogo(project.repoUrl);

  const logoHtml = orgLogo
    ? `<img src="${orgLogo}" alt="Organization logo" class="project-org-logo" onerror="this.style.display='none'">`
    : "";

  // Generate link containers for repo and website URLs
  let linksHtml = "";

  if (project.repoUrl || project.websiteUrl) {
    const repoLink = project.repoUrl
      ? `<a href="${project.repoUrl}" target="_blank" class="project-link">
          <span class="project-label">Code</span>
          <i class="fab fa-git-alt project-icon"></i>
        </a>`
      : "";

    const websiteLink = project.websiteUrl
      ? `<a href="${project.websiteUrl}" target="_blank" class="project-link">
          <span class="project-label">Website</span>
          <i class="fas fa-external-link-alt project-icon"></i>
        </a>`
      : "";

    linksHtml = `<div class="project-links-container">
      ${repoLink}
      ${websiteLink}
    </div>`;
  } else {
    linksHtml = `<div class="project-link-container">
      <span class="project-label">Private Project</span>
      <i class="fas fa-lock project-icon"></i>
    </div>`;
  }

  // Use primary URL for the main card link (for hover effects)
  const primaryUrl = project.websiteUrl || project.repoUrl;

  if (primaryUrl) {
    return `
        <div class="project-card private-project-card">
          ${logoHtml}
          <h2>${project.name}</h2>
          <p>${project.description}</p>
          ${technologiesHtml}
          ${linksHtml}
        </div>
      `;
  } else {
    return `
        <div class="project-card private-project-card">
          ${logoHtml}
          <h2>${project.name}</h2>
          <p>${project.description}</p>
          ${technologiesHtml}
          ${linksHtml}
        </div>
      `;
  }
};

const populateProjects = async () => {
  const projectsGrid = document.getElementById("projects-list");
  if (!projectsGrid) return;

  const projectCards = await Promise.all(
    githubRepos.map((url) => fetchGitHubRepo(url))
  );

  const validCards = projectCards.filter((card) => card !== null);
  const cardHtmls = await Promise.all(validCards.map(createProjectCard));
  projectsGrid.innerHTML = cardHtmls.join("");
};

const populatePrivateProjects = async () => {
  const privateProjectsGrid = document.getElementById("private-projects-list");
  if (!privateProjectsGrid) return;

  const projectCards = await Promise.all(
    privateProjects.map((project) => createPrivateProjectCard(project))
  );

  privateProjectsGrid.innerHTML = projectCards.join("");
};

// Populate projects when DOM is loaded
populateProjects();
populatePrivateProjects();

// About section toggle functionality
const aboutSection = document.querySelector(".about") as HTMLElement;
const aboutHello = document.getElementById("about-hello") as HTMLElement;
const aboutContent = document.getElementById("about-content") as HTMLElement;

if (aboutSection && aboutHello && aboutContent) {
  // Function to update about section height
  const updateAboutHeight = () => {
    const isExpanded = aboutSection.classList.contains("expanded");
    if (isExpanded) {
      aboutSection.style.height = aboutContent.offsetHeight + "px";
    } else {
      aboutSection.style.height = aboutHello.offsetHeight + "px";
    }
  };

  // Set initial height
  updateAboutHeight();

  // Add window resize listener to recalculate height
  window.addEventListener("resize", updateAboutHeight);

  aboutSection.addEventListener("click", () => {
    const isExpanded = aboutSection.classList.contains("expanded");

    if (isExpanded) {
      // Collapsing - measure hello height
      aboutSection.style.height = aboutHello.offsetHeight + "px";
    } else {
      // Expanding - measure content height
      aboutSection.style.height = aboutContent.offsetHeight + "px";
    }

    aboutSection.classList.toggle("expanded");
  });
}

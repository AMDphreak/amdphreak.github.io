export const Links = () => {
  const links = [
    {
      name: "Blog",
      url: "https://www.ryanjohnson.website/posts",
      icon: "fa-brands fa-wordpress",
      colorClass: "link-card-blue"
    },
    {
      name: "GitHub",
      url: "https://github.com/AMDphreak",
      icon: "fa-brands fa-github",
      colorClass: "link-card-gray"
    },
    {
      name: "GitLab",
      url: "https://gitlab.com/AMDphreak",
      icon: "fa-brands fa-gitlab",
      colorClass: "link-card-orange"
    },
    {
      name: "CodersRank",
      url: "https://profile.codersrank.io/user/amdphreak",
      icon: "fas fa-code",
      colorClass: "link-card-purple"
    }
  ];

  return (
    <div class="card">
      <h2 class="section-heading">Links</h2>
      
      <div class="grid-links">
        {links.map((link) => (
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            class={`link-card ${link.colorClass}`}
          >
            <div class="flex flex-col items-center text-center">
              <div class="icon-container">
                <i class={`${link.icon} text-2xl text-white`}></i>
              </div>
              <span class="font-medium">{link.name}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

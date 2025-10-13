export const Profile = () => {
  return (
    <div class="card">
      <div class="text-center">
        <div class="mb-6">
          <h1 class="profile-title">
            Ryan Johnson
          </h1>
          <h2 class="profile-subtitle">
            AMDphreak <span class="text-gray-400 dark:text-gray-500">•</span> Developer Profile
          </h2>
        </div>
        
        <div class="profile-badges">
          <a
            href="https://linkedin.com/in/AMDphreak"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-primary btn-linkedin"
          >
            <i class="fab fa-linkedin mr-2"></i>
            LinkedIn
          </a>
          <a
            href="https://github.com/AMDphreak"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-primary btn-github"
          >
            <i class="fab fa-github mr-2"></i>
            GitHub
          </a>
          <a
            href="https://gitlab.com/AMDphreak"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-primary btn-gitlab"
          >
            <i class="fab fa-gitlab mr-2"></i>
            GitLab
          </a>
          <a
            href="https://x.com/amdphreak"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-primary btn-twitter"
          >
            <i class="fab fa-x-twitter mr-2"></i>
            X
          </a>
          <a
            href="https://profile.codersrank.io/user/amdphreak"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-primary btn-codersrank"
          >
            <i class="fas fa-code mr-2"></i>
            CodersRank
          </a>
        </div>

        <div class="space-y-4">
          <div class="flex flex-wrap justify-center gap-2">
            <span class="badge badge-primary">
              <i class="fas fa-lightbulb mr-1"></i>
              Technology Enthusiast
            </span>
            <span class="badge badge-success">
              <i class="fas fa-cogs mr-1"></i>
              Software Engineer & Architect
            </span>
            <span class="badge badge-purple">
              <i class="fas fa-chart-line mr-1"></i>
              Former Reliability Analyst
            </span>
          </div>

          <div class="profile-info">
            <div class="profile-info-item">
              <span class="mr-2">📍</span>
              <span>Memphis, TN</span>
            </div>
            <div class="profile-info-item">
              <span class="mr-2">🎓</span>
              <span>University of Memphis (B.S. Computer Science)</span>
            </div>
            <div class="profile-info-item">
              <span class="mr-2">🎓</span>
              <span>Missouri University of Science & Technology (3 semesters Computer Engineering)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

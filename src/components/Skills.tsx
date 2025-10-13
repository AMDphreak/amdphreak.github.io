export const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "TI-BASIC", strong: true },
        { name: "Java", strong: true },
        { name: "C++", strong: true },
        { name: "C", strong: false },
        { name: "Python", strong: true },
        { name: "Racket Lisp", strong: false },
        { name: "Go", strong: false },
        { name: "D", strong: false }
      ]
    },
    {
      title: "Web Development",
      skills: [
        { name: "HTML", strong: false },
        { name: "CSS", strong: true },
        { name: "JavaScript", strong: false },
        { name: "TypeScript", strong: false },
        { name: "Next.js", strong: false }
      ]
    },
    {
      title: "Mobile Development",
      skills: [
        { name: "Flutter", strong: false }
      ]
    },
    {
      title: "AI & Emerging Tech",
      skills: [
        { name: "AI", strong: false },
        { name: "Vibe-coding", strong: false }
      ]
    }
  ];

  return (
    <div class="card">
      <h2 class="section-heading">Skills</h2>
      
      <p class="text-muted mb-6">
        Skills that are stronger are highlighted with{" "}
        <span class="skill-tag">
          <span class="skill-tag-dot"></span>
          highlight
        </span>
      </p>

      <div class="space-y-6">
        {skillCategories.map((category) => (
          <div>
            <h3 class="section-heading-sm">
              {category.title}
            </h3>
            <div class="flex flex-wrap gap-2">
              {category.skills.map((skill, index) => {
                const badgeClasses = [
                  "badge-light badge-primary",
                  "badge-light badge-secondary", 
                  "badge-light badge-success",
                  "badge-light badge-purple",
                  "badge-light badge-orange",
                  "badge-light badge-indigo"
                ];
                const badgeClass = skill.strong ? "skill-tag" : badgeClasses[index % badgeClasses.length];
                
                return (
                  <span class={badgeClass}>
                    {skill.strong && <span class="skill-tag-dot"></span>}
                    {skill.name}
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

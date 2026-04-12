import { For } from "solid-js";

// Inline SVGs for Toolkit
const IconCpu = (p: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={p.size || 18} height={p.size || 18} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class={p.class}>
    <rect width="16" height="16" x="4" y="4" rx="2" />
    <rect width="6" height="6" x="9" y="9" rx="1" />
    <path d="M15 2v2" /><path d="M15 20v2" /><path d="M2 15h2" /><path d="M2 9h2" /><path d="M20 15h2" /><path d="M20 9h2" /><path d="M9 2v2" /><path d="M9 20v2" />
  </svg>
);

const IconBrowser = (p: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={p.size || 18} height={p.size || 18} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class={p.class}>
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="M10 4v4" /><path d="M2 8h20" /><path d="M6 4v4" />
  </svg>
);

const IconMobile = (p: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={p.size || 18} height={p.size || 18} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class={p.class}>
    <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
    <path d="M12 18h.01" />
  </svg>
);

const IconCode = (p: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={p.size || 18} height={p.size || 18} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class={p.class}>
    <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
  </svg>
);

export const Skills = () => {
  const categories = [
    {
      title: "Assembly & Logic",
      icon: <IconCpu />,
      skills: ["TI-BASIC", "Java", "C++", "C", "Python", "Racket Lisp", "Go", "D"]
    },
    {
      title: "Web",
      icon: <IconBrowser />,
      skills: ["HTML", "CSS", "JS / TS", "Next.js", "SolidJS", "Astro"]
    },
    {
      title: "Mobile Systems",
      icon: <IconMobile />,
      skills: ["Flutter", "Dart"]
    },
    {
      title: "Emerging",
      icon: <IconCode />,
      skills: ["AI Systems", "Vibe-coding"]
    }
  ];

  return (
    <section class="space-y-8">
      <div class="flex items-end gap-3 border-b border-stone-200 dark:border-stone-800 pb-4">
        <h2 class="text-xl font-heading font-medium tracking-tight">Toolkit</h2>
        <span class="font-mono text-[10px] uppercase tracking-widest text-stone-500 mb-0.5">
          Comp. 09
        </span>
      </div>

      <div class="space-y-6">
        <For each={categories}>{(cat) => (
          <div class="space-y-3">
            <div class="flex items-center gap-2">
              <span class="text-stone-400">{cat.icon}</span>
              <h3 class="font-mono text-[10px] uppercase tracking-[0.2em] text-stone-500 font-bold">
                {cat.title}
              </h3>
            </div>
            <div class="flex flex-wrap gap-2">
              <For each={cat.skills}>{(skill) => (
                <div class="group relative px-2 py-1 structural-border hover:border-stone-400 dark:hover:border-stone-600 transition-colors">
                  <span class="text-[11px] font-mono uppercase tracking-wider text-stone-600 dark:text-stone-400 group-hover:text-stone-900 dark:group-hover:text-stone-100 transition-colors">
                    {skill}
                  </span>
                  <div class="absolute -top-[1.5px] -left-[1.5px] w-[3px] h-[3px] bg-stone-200 dark:bg-stone-800 border-[0.5px] border-stone-300 dark:border-stone-700"></div>
                  <div class="absolute -bottom-[1.5px] -right-[1.5px] w-[3px] h-[3px] bg-stone-200 dark:bg-stone-800 border-[0.5px] border-stone-300 dark:border-stone-700"></div>
                </div>
              )}</For>
            </div>
          </div>
        )}</For>
      </div>

      <div class="pt-4 mt-8 border-t border-stone-200 dark:border-stone-800">
        <p class="font-mono text-[9px] uppercase tracking-widest text-stone-400 leading-relaxed text-center">
          Building high-integrity software with AI <br/> Memphis, TN / [35.1495° N, 90.0490° W]
        </p>
      </div>
    </section>
  );
};

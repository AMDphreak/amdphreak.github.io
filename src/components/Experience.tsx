import { For } from "solid-js";
import { CollapsibleSection } from "~/components/CollapsibleSection";

const IconCalendar = (p: { class?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class={p.class}>
    <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
    <line x1="16" x2="16" y1="2" y2="6" />
    <line x1="8" x2="8" y1="2" y2="6" />
    <line x1="3" x2="21" y1="10" y2="10" />
  </svg>
);

export const Experience = () => {
  const experiences = [
    {
      title: "Software Developer (Contractor)",
      company: "Food Truck Nerdz LLC",
      date: "Aug 2025 - Present",
      items: [
        "Co-founded the company in February 2025 focusing on logistical solutions for food truck owners.",
        "Developing a core platform for real-time truck tracking and inventory management.",
        "Architecting modular, scalable microservices using modern web technologies.",
      ],
    },
    {
      title: "Reliability Analyst",
      company: "ALSAC/St. Jude Children's Research Hospital",
      date: "Dec 2021 - Aug 2022",
      items: [
        "Established monitoring protocols for mission-critical hospital infrastructure.",
        "Optimized diagnostic dashboards for real-time system health visibility.",
        "Managed complex log aggregation and anomaly detection workflows.",
      ],
    },
    {
      title: "Web Designer & App Developer",
      company: "JORY Development",
      date: "Jan 2023 - Aug 2023",
      items: [
        "Engineered bespoke digital experiences for local enterprise clients.",
        "Developed cross-platform mobile applications using Flutter and Dart.",
        "Managed full-stack lifecycles from initial blueprinting to production deployment.",
      ],
    },
    {
      title: "Python Developer",
      company: "AAGoods LLC",
      date: "Aug 2018 - Oct 2018",
      items: [
        "Automated conveyor systems and inventory logic using Python.",
        "Designed real-time control software for hardware automation.",
        "Rapidly integrated new technical stacks into existing warehouse workflows.",
      ],
    },
  ];

  return (
    <CollapsibleSection
      id="experience-section"
      title="Experience"
      tagline="Professional Log / Ref. 8023"
      defaultOpen={false}
    >
      <div class="space-y-0">
        <For each={experiences}>
          {(exp) => (
            <div class="relative pl-8 pb-12 last:pb-0 border-l border-dashed border-stone-200 dark:border-stone-800">
              <div class="absolute -left-[4.5px] top-1.5 w-2 h-2 bg-background border border-stone-400 dark:border-stone-600 rounded-none rotate-45" />
              <div class="space-y-4">
                <div class="flex flex-col md:flex-row md:items-baseline justify-between gap-2">
                  <div>
                    <h3 class="text-xl font-heading font-medium tracking-tight text-foreground">
                      {exp.title}
                    </h3>
                    <p class="font-mono text-[10px] uppercase tracking-[0.2em] text-stone-500 mt-1">
                      {exp.company}
                    </p>
                  </div>
                  <div class="flex items-center gap-2 font-mono text-[10px] text-stone-400 uppercase tracking-widest whitespace-nowrap">
                    <IconCalendar />
                    {exp.date}
                  </div>
                </div>
                <ul class="space-y-3">
                  <For each={exp.items}>
                    {(item) => (
                      <li class="flex items-start gap-3">
                        <span class="mt-2 w-1 h-px bg-stone-300 dark:bg-stone-700 shrink-0" />
                        <span class="text-sm text-stone-600 dark:text-stone-400 leading-relaxed font-sans">
                          {item}
                        </span>
                      </li>
                    )}
                  </For>
                </ul>
              </div>
            </div>
          )}
        </For>
      </div>
    </CollapsibleSection>
  );
};

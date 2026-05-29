import { For } from "solid-js";
import { Button } from "~/components/ui/button";
import { Card } from "~/components/ui/card";

// Inline SVGs for Links
const IconFile = (p: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={p.size || 24} height={p.size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class={p.class}>
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
    <polyline points="14 2 14 8 20 8" />
  </svg>
);

const IconGithub = (p: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={p.size || 24} height={p.size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class={p.class}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const IconGitlab = (p: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={p.size || 24} height={p.size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class={p.class}>
    <path d="m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.06 3.27a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-3.33 10a.49.49 0 0 0 .01.33.48.48 0 0 0 .21.24l9.49 6.9a.38.38 0 0 0 .46 0l9.49-6.9a.48.48 0 0 0 .21-.24.49.49 0 0 0 .01-.33z" />
  </svg>
);

const IconCode = (p: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={p.size || 24} height={p.size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class={p.class}>
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

const IconArrowRight = (p: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={p.size || 16} height={p.size || 16} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class={p.class}>
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const IconFlask = (p: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={p.size || 24} height={p.size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class={p.class}>
    <path d="M10 2v7.31" />
    <path d="M14 2v7.31" />
    <path d="M8.5 2h7" />
    <path d="M14 9.3a6.5 6.5 0 1 1-4 0" />
    <path d="M5.52 16h12.96" />
  </svg>
);

export const Links = () => {
  const links = [
    {
      name: "UI/UX Demos",
      url: "/gui-demos",
      icon: <IconFlask />,
      id: "LAB-01",
      internal: true,
    },
    {
      name: "Engineering Blog",
      url: "https://www.ryanjohnson.website/posts",
      icon: <IconFile />,
      id: "DOC-01"
    },
    {
      name: "GitHub",
      url: "https://github.com/AMDphreak",
      icon: <IconGithub />,
      id: "GIT-01"
    },
    {
      name: "GitLab",
      url: "https://gitlab.com/AMDphreak",
      icon: <IconGitlab />,
      id: "GIT-02"
    },
    {
      name: "CodersRank",
      url: "https://profile.codersrank.io/user/amdphreak",
      icon: <IconCode />,
      id: "COD-01"
    }
  ];

  return (
    <section class="space-y-8">
      <div class="flex items-end gap-3 border-b border-stone-200 dark:border-stone-800 pb-4">
        <h2 class="text-xl font-heading font-medium tracking-tight">Connections</h2>
        <span class="font-mono text-[10px] uppercase tracking-widest text-stone-500 mb-0.5">
          Nodes / Links
        </span>
      </div>
      
      <div class="space-y-4">
        <For each={links}>{(link) => {
          return (
            <Button
              as="a"
              href={link.url}
              target={"internal" in link && link.internal ? undefined : "_blank"}
              rel={"internal" in link && link.internal ? undefined : "noopener noreferrer"}
              variant="outline"
              class="group flex h-auto w-full items-center justify-between rounded-none structural-border p-4 hover:bg-stone-50 dark:hover:bg-stone-900 text-stone-900 dark:text-stone-100"
            >
              <div class="flex items-center gap-4">
                <div class="w-10 h-10 flex items-center justify-center bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-stone-500 group-hover:text-stone-900 dark:group-hover:text-stone-100 transition-colors">
                  {link.icon}
                </div>
                <div class="text-left">
                  <h3 class="text-sm font-heading font-medium">{link.name}</h3>
                  <p class="font-mono text-[9px] uppercase tracking-widest text-stone-400">{link.id}</p>
                </div>
              </div>
              <IconArrowRight class="text-stone-300 group-hover:text-stone-900 dark:group-hover:text-stone-100 transition-all group-hover:translate-x-1" />
            </Button>
          );
        }}</For>
      </div>
      
      <Card class="rounded-none border-dashed border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-900/50 p-4 shadow-none">
        <p class="text-[10px] font-mono text-stone-500 uppercase tracking-widest leading-relaxed">
          [NOTE]: Most of my projects have been transferred to organizations I own on GitHub, such as Dev-Centr, FoodTruckNerdz, Dlang-supplemental, and Antora-supplemental
        </p>
      </Card>
    </section>
  );
};

import { For, Show } from "solid-js";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { Card } from "~/components/ui/card";

// Inline SVGs for Projects
interface ProjectProps {
  name: string;
  description: string;
  url?: string;
  repoUrl?: string;
  platform?: "github" | "gitlab" | "linkedin" | "codepen";
  docsUrl?: string;
  technologies?: string[];
  type?: "wip" | "private" | "public" | "hiatus";
}

interface IconProps {
  size?: number;
  class?: string;
}

const IconLock = (p: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={p.size || 10} height={p.size || 10} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class={p.class} aria-hidden="true">
    <title>Private Project</title>
    <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

const IconHammer = (p: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={p.size || 10} height={p.size || 10} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class={p.class} aria-hidden="true">
    <title>Work in Progress</title>
    <path d="m15 12-8.37 8.37a1 1 0 1 1-1.41-1.41L13.59 10.58" />
    <path d="m9 18 6-6" />
    <path d="M10 22 22 10" />
    <path d="m15 12 5-5" />
    <path d="M19 8c.31.17.61.37.89.6l1.51 1.2a2 2 0 0 1 .1 2.96l-1 1" />
    <path d="m15 12 1 1a2 2 0 0 1 0 2.83l-1 1" />
    <path d="m20 9 1 1" />
    <path d="M17.17 11.17 19 13" />
    <path d="m5 3 2 2" />
    <path d="m19 21 2-2" />
  </svg>
);

const IconPause = (p: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={p.size || 10} height={p.size || 10} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class={p.class} aria-hidden="true">
    <title>On Hiatus</title>
    <rect width="4" height="16" x="6" y="4" />
    <rect width="4" height="16" x="14" y="4" />
  </svg>
);

const IconGithub = (p: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={p.size || 14} height={p.size || 14} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class={p.class} aria-hidden="true">
    <title>GitHub</title>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const IconGitlab = (p: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={p.size || 14} height={p.size || 14} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class={p.class} aria-hidden="true">
    <title>GitLab</title>
    <path d="m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.06 3.27a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-3.33 10a.49.49 0 0 0 .01.33.48.48 0 0 0 .21.24l9.49 6.9a.38.38 0 0 0 .46 0l9.49-6.9a.48.48 0 0 0 .21-.24.49.49 0 0 0 .01-.33z" />
  </svg>
);

const IconGlobe = (p: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={p.size || 14} height={p.size || 14} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class={p.class} aria-hidden="true">
    <title>Website</title>
    <circle cx="12" cy="12" r="10" />
    <line x1="2" x2="22" y1="12" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const IconBook = (p: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={p.size || 14} height={p.size || 14} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class={p.class} aria-hidden="true">
    <title>Documentation</title>
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </svg>
);

const publicProjects: ProjectProps[] = [
  {
    name: "multimux",
    description: "Lightweight, elegant, and cross-platform desktop audio mixdown suite. Allows screen-recorders and video-editors to visually mix down multiple discrete audio tracks into a single master track with instant, lossless container-level video passthrough.",
    url: "https://ryanjohnson.dev/multimux/",
    repoUrl: "https://github.com/AMDphreak/multimux",
    platform: "github",
    technologies: ["SolidJS", "Electron", "TypeScript"],
  },
  {
    name: "Equivalence Engine",
    description: "High-performance D-based transformation engine for modular codebase adaptation and version evolution. Standardizes cross-repository dependency management.",
    repoUrl: "https://github.com/AMDphreak/equivalence-engine",
    platform: "github",
    technologies: ["Dlang", "VCS", "CLI"],
  },
  {
    name: "Transcoder Suite",
    description: "Modular, playbook-driven video transcoding system for PowerShell 7. Optimized for high-quality archival.",
    url: "https://github.com/AMDphreak/transcoder-suite",
    platform: "github",
    docsUrl: "https://amdphreak.github.io/transcoder-suite/",
  },
  {
    name: "antora-dark-theme",
    description: "Dark mode supplemental UI theme for Antora documentation sites",
    url: "https://antora-supplemental.github.io/antora-dark-theme/antora-dark-theme/0.1/index.html",
    platform: "github",
    docsUrl: "https://antora-supplemental.github.io/antora-dark-theme/antora-dark-theme/0.1/guide/index.html",
  },
  {
    name: "Windows Theme Autochanger",
    description: "Automatic Windows theme switcher based on time of day",
    url: "https://github.com/AMDphreak/Windows-Theme-Autochanger",
    platform: "github",
  },
  {
    name: "packet-x-ing",
    description: "Network packet analysis tool",
    url: "https://gitlab.com/AMDphreak/packet-x-ing",
    platform: "gitlab",
  },
];

const privateProjects: ProjectProps[] = [
  {
    name: "FoodTruckNerdz",
    description: "Food Truck Nerdz Next.js Web App with Convex DB backend.",
    technologies: ["Next.js", "Vercel", "Convex"],
    url: "https://www.foodtrucknerdz.com",
    repoUrl: "https://github.com/foodtrucknerdz",
    docsUrl: "https://docs.foodtrucknerdz.com",
    type: "private",
  },
  {
    name: "Dev-Centr",
    description: "Desktop application for environment configuration and management.",
    technologies: ["React", "Tauri", "TypeScript"],
    url: "https://devcentr.org",
    repoUrl: "https://github.com/dev-centr",
    docsUrl: "https://docs.devcentr.org",
    type: "private",
  },
];

const workInProgress: ProjectProps[] = [
  {
    name: "Desktop Assistant AI",
    description: "AI-powered desktop assistant for productivity and automation.",
    technologies: ["AI", "Desktop Application"],
    repoUrl: "https://github.com/AMDphreak/Desktop-Assistant-AI",
    type: "hiatus",
  },
];

const ProjectCard = (props: { project: ProjectProps }) => {
  const isWip = props.project.type === "wip";
  const isPrivate = props.project.type === "private";

  return (
    <Card class="group relative structural-border rounded-none border-stone-200 dark:border-stone-800 bg-transparent shadow-none p-6 hover:bg-stone-50/50 dark:hover:bg-stone-900/50 transition-all h-full flex flex-col">
      <div class="flex justify-between items-start mb-4">
        <div class="space-y-1">
          <div class="flex items-center gap-2 flex-wrap">
            <h3 class="text-xl font-heading font-medium tracking-tight text-foreground">
              {props.project.name}
            </h3>
            <Show when={isWip}>
              <Badge
                variant="outline"
                class="inline-flex items-center gap-1 rounded-none border-stone-200 dark:border-stone-800 px-1.5 py-0.5 text-[9px] font-mono font-normal uppercase tracking-widest text-stone-500"
              >
                <IconHammer /> WIP
              </Badge>
            </Show>
            <Show when={isPrivate}>
              <Badge
                variant="outline"
                class="inline-flex items-center gap-1 rounded-none border-stone-200 dark:border-stone-800 px-1.5 py-0.5 text-[9px] font-mono font-normal uppercase tracking-widest text-stone-500"
              >
                <IconLock /> Private
              </Badge>
            </Show>
            <Show when={props.project.type === "hiatus"}>
              <Badge
                variant="outline"
                class="inline-flex items-center gap-1 rounded-none border-stone-200 dark:border-stone-800 px-1.5 py-0.5 text-[9px] font-mono font-normal uppercase tracking-widest text-stone-500 italic"
              >
                <IconPause /> Hiatus
              </Badge>
            </Show>
          </div>
          <Show when={props.project.technologies}>
            <p class="font-mono text-[10px] uppercase tracking-widest text-stone-400">
              {props.project.technologies.join(" / ")}
            </p>
          </Show>
        </div>
      </div>

      <p class="text-sm text-stone-600 dark:text-stone-400 mb-8 leading-relaxed max-w-[90%]">
        {props.project.description}
      </p>

      <div class="flex flex-wrap gap-4 mt-auto">
        <Show when={props.project.url && !props.project.url.includes('github') && !props.project.url.includes('gitlab')}>
          <Button
            as="a"
            href={props.project.url}
            target="_blank"
            rel="noopener noreferrer"
            variant="link"
            class="h-auto p-0 flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.2em] text-stone-900 dark:text-stone-100 hover:opacity-100 opacity-60 transition-opacity"
          >
            <IconGlobe /> Visit
          </Button>
        </Show>
        <Show when={props.project.docsUrl}>
          <Button
            as="a"
            href={props.project.docsUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="link"
            class="h-auto p-0 flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.2em] text-stone-900 dark:text-stone-100 hover:opacity-100 opacity-60 transition-opacity"
          >
            <IconBook /> Docs
          </Button>
        </Show>
        <Show when={props.project.repoUrl || (props.project.url && (props.project.url.includes('github') || props.project.url.includes('gitlab')))}>
          <Button
            as="a"
            href={props.project.repoUrl || props.project.url}
            target="_blank"
            rel="noopener noreferrer"
            variant="link"
            class="h-auto p-0 flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.2em] text-stone-900 dark:text-stone-100 hover:opacity-100 opacity-60 transition-opacity"
          >
            <Show when={props.project.platform === 'gitlab' || (props.project.url && props.project.url.includes('gitlab'))} fallback={<IconGithub />}>
               <IconGitlab />
            </Show>
            Source
          </Button>
        </Show>
      </div>
      
      {/* Decorative Index */}
      <div class="absolute top-2 right-2 opacity-10 font-mono text-[10px] group-hover:opacity-30 transition-opacity select-none hidden md:block">
        STR-{Math.random().toString(36).substring(7).toUpperCase()}
      </div>
    </Card>
  );
};

export const Projects = () => {
  return (
    <section class="space-y-8">
      <div class="flex items-end gap-4 border-b border-stone-200 dark:border-stone-800 pb-4">
        <h2 class="text-3xl font-heading tracking-tighter">Projects</h2>
        <span class="font-mono text-[10px] uppercase tracking-widest text-stone-500 mb-1">
          Software Portfolio / v04
        </span>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-px bg-stone-200 dark:bg-stone-800 border border-stone-200 dark:border-stone-800 overflow-hidden">
        <For each={privateProjects}>
          {(p) => (
            <div class="bg-background">
              <ProjectCard project={p} />
            </div>
          )}
        </For>
        <For each={publicProjects}>
          {(p) => (
            <div class="bg-background">
              <ProjectCard project={p} />
            </div>
          )}
        </For>
        <For each={workInProgress}>
          {(p) => (
            <div class="bg-background">
              <ProjectCard project={p} />
            </div>
          )}
        </For>
        <a
          href="/repositories"
          class="bg-background group block p-6 structural-border hover:bg-stone-50/50 dark:hover:bg-stone-900/50 transition-all h-full flex flex-col justify-between min-h-[220px] no-underline text-inherit"
        >
          <div class="space-y-3">
            <h3 class="text-xl font-heading font-medium tracking-tight text-foreground group-hover:underline decoration-stone-300 underline-offset-4">
              Full repository catalog
            </h3>
            <p class="font-mono text-[10px] uppercase tracking-widest text-stone-400">
              All projects · GitHub & GitLab
            </p>
            <p class="text-sm text-stone-600 dark:text-stone-400 leading-relaxed max-w-[90%]">
              Hierarchically organized by project and organization — every repo across providers,
              not just the highlights above.
            </p>
          </div>
          <p class="mt-8 font-mono text-[10px] uppercase tracking-[0.2em] text-stone-500 group-hover:text-stone-900 dark:group-hover:text-stone-100 transition-colors">
            Browse catalog →
          </p>
        </a>
      </div>
    </section>
  );
};

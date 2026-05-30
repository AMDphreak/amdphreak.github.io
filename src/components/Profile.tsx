import { For, Show } from "solid-js";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";

// Inline Bespoke SVGs (Stroke-based, structural)
const IconGithub = (p: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={p.size || 20} height={p.size || 20} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class={p.class}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const IconLinkedin = (p: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={p.size || 20} height={p.size || 20} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class={p.class}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const IconGitlab = (p: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={p.size || 20} height={p.size || 20} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class={p.class}>
    <path d="m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.06 3.27a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-3.33 10a.49.49 0 0 0 .01.33.48.48 0 0 0 .21.24l9.49 6.9a.38.38 0 0 0 .46 0l9.49-6.9a.48.48 0 0 0 .21-.24.49.49 0 0 0 .01-.33z" />
  </svg>
);

const IconTwitter = (p: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={p.size || 20} height={p.size || 20} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class={p.class}>
    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
  </svg>
);

const IconCode = (p: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={p.size || 20} height={p.size || 20} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class={p.class}>
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

const IconChess = (p: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={p.size || 20} height={p.size || 20} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class={p.class} aria-hidden="true">
    <title>Chess.com</title>
    <path d="M12 3v3" />
    <path d="M8 6h8" />
    <path d="M9 6v2a3 3 0 0 0 6 0V6" />
    <path d="M7 21h10" />
    <path d="M8 21v-4a4 4 0 0 1 8 0v4" />
  </svg>
);

const IconCodeberg = (p: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={p.size || 20} height={p.size || 20} viewBox="0 0 24 24" fill="currentColor" class={p.class} aria-hidden="true">
    <title>Codeberg</title>
    <path d="M11.999 0C7.24 0 3.804 2.841 2.667 6.67L10.12 22.328a1.043 1.043 0 0 0 1.758 0l7.454-15.658C18.195 2.841 14.759 0 11.999 0zm0 3.66c1.136 0 2.057.92 2.057 2.056 0 1.137-.92 2.057-2.057 2.057-1.136 0-2.056-.92-2.056-2.057 0-1.136.92-2.056 2.056-2.056z" />
  </svg>
);

const IconMapPin = (p: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={p.size || 18} height={p.size || 18} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class={p.class}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const IconGraduation = (p: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={p.size || 18} height={p.size || 18} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class={p.class}>
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c3 3 9 3 12 0v-5" />
  </svg>
);

const IconLightbulb = (p: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={p.size || 18} height={p.size || 18} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class={p.class}>
    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .5 2.2 1.5 3.1.8.9 1.3 1.6 1.5 2.5" />
    <path d="M9 18h6" />
    <path d="M10 22h4" />
  </svg>
);

const IconSettings = (p: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={p.size || 12} height={p.size || 12} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class={p.class}>
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const IconTrending = (p: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={p.size || 12} height={p.size || 12} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class={p.class}>
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
    <polyline points="16 7 22 7 22 13" />
  </svg>
);

export const Profile = () => {
  return (
    <div class="space-y-12">
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <h1 class="text-6xl md:text-8xl font-heading font-light tracking-tight text-foreground">
            Ryan<br />Johnson
          </h1>
          <div class="mt-6 flex items-center gap-3">
             <div class="blueprint-dot"></div>
             <h2 class="font-mono text-sm uppercase tracking-[0.3em] text-stone-500">
               AMDphreak / Software Architect
             </h2>
          </div>
        </div>

        <div class="flex flex-col items-start md:items-end gap-3">
          <div class="flex flex-wrap gap-4">
            <SocialLink href="https://github.com/AMDphreak" icon={<IconGithub />} label="GitHub" />
            <SocialLink href="https://codeberg.org/AMDphreak" icon={<IconCodeberg />} label="Codeberg" />
            <SocialLink href="https://gitlab.com/AMDphreak" icon={<IconGitlab />} label="GitLab" />
            <SocialLink href="https://linkedin.com/in/AMDphreak" icon={<IconLinkedin />} label="LinkedIn" />
            <SocialLink href="https://x.com/amdphreak" icon={<IconTwitter />} label="X" />
            <SocialLink href="https://www.chess.com/member/amdphreak" icon={<IconChess />} label="Chess.com" />
            <SocialLink href="https://profile.codersrank.io/user/amdphreak" icon={<IconCode />} label="CodersRank" />
          </div>
          <p class="max-w-md text-[9px] font-mono text-stone-500 uppercase tracking-widest leading-relaxed md:text-right">
            Most projects live under organizations I own on GitHub — Dev-Centr, FoodTruckNerdz,
            Dlang-supplemental, Antora-supplemental, and others.
          </p>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-stone-200 dark:border-stone-800">
        <ProfileDetail 
          icon={<IconMapPin class="text-stone-400" />} 
          title="Location" 
          value="Memphis, TN" 
        />
        <ProfileDetail 
          icon={<IconGraduation class="text-stone-400" />} 
          title="Education" 
          value="University of Memphis (B.S. CS)" 
        />
        <div class="flex items-start gap-3">
          <div class="mt-1"><IconLightbulb class="text-stone-400" /></div>
          <div>
            <p class="font-mono text-[10px] uppercase tracking-widest text-stone-500 mb-1">Status</p>
            <div class="flex flex-wrap gap-2 mt-2">
              <StatusBadge icon={<IconSettings />} label="Engineer" />
              <StatusBadge icon={<IconTrending />} label="Architect" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SocialLink = (props: { href: string; icon: any; label: string }) => (
  <Button
    as="a"
    href={props.href}
    target="_blank"
    rel="noopener noreferrer"
    variant="outline"
    size="icon"
    class="rounded-none structural-border w-10 h-10 text-stone-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800"
    title={props.label}
  >
    {props.icon}
  </Button>
);

const ProfileDetail = (props: { icon: any; title: string; value: string }) => (
  <div class="flex items-start gap-3">
    <div class="mt-1">{props.icon}</div>
    <div>
      <p class="font-mono text-[10px] uppercase tracking-widest text-stone-500 mb-1">{props.title}</p>
      <p class="text-sm font-sans text-foreground">{props.value}</p>
    </div>
  </div>
);

const StatusBadge = (props: { icon: any; label: string }) => (
  <Badge
    variant="outline"
    class="inline-flex items-center gap-1.5 rounded-none px-2 py-0.5 structural-border text-[10px] font-mono font-normal uppercase tracking-wider text-stone-600 dark:text-stone-400"
  >
    {props.icon}
    {props.label}
  </Badge>
);

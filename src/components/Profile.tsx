import { For } from "solid-js";
import { Button } from "~/components/ui/button";
import { GitHubProfileMenu } from "~/components/GitHubProfileMenu";
import { socialIconById } from "~/components/social-icons";
import { socialLinks } from "~/lib/social-links";
import { Badge } from "~/components/ui/badge";

const IconMapPin = (p: { class?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class={p.class}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const IconGraduation = (p: { class?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class={p.class}>
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c3 3 9 3 12 0v-5" />
  </svg>
);

const IconLightbulb = (p: { class?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class={p.class}>
    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .5 2.2 1.5 3.1.8.9 1.3 1.6 1.5 2.5" />
    <path d="M9 18h6" />
    <path d="M10 22h4" />
  </svg>
);

const IconSettings = (p: { class?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class={p.class}>
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const IconTrending = (p: { class?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class={p.class}>
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

        <div class="flex flex-wrap gap-4 items-center md:justify-end">
          <GitHubProfileMenu />
          <For each={socialLinks}>
            {(item) => {
              const Icon = socialIconById[item.id];
              return (
                <SocialLink href={item.href} icon={<Icon />} label={item.label} />
              );
            }}
          </For>
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

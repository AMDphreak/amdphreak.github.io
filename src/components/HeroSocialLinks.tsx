import { For } from "solid-js";
import { GitHubProfileMenu } from "~/components/GitHubProfileMenu";
import { socialIconById } from "~/components/social-icons";
import { socialLinks } from "~/lib/social-links";
import type { JSX } from "solid-js";

const FlipShell = (props: {
  label: string;
  brand: string;
  brandFg?: string;
  front: JSX.Element;
  backIcon: JSX.Element;
  href: string;
}) => (
  <a
    href={props.href}
    target="_blank"
    rel="noopener noreferrer"
    title={props.label}
    aria-label={props.label}
    class="social-flip group relative block h-14 w-14 shrink-0 [perspective:700px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-400 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
  >
    <div class="social-flip-inner relative h-full w-full transition-transform duration-500 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-focus-visible:[transform:rotateY(180deg)] pointer-events-none">
      <div class="absolute inset-0 flex items-center justify-center rounded-xl social-tile-border bg-background/80 dark:bg-background/70 text-stone-600 dark:text-stone-300 [backface-visibility:hidden]">
        {props.front}
      </div>
      <div
        class="absolute inset-0 flex items-center justify-center rounded-xl text-white [backface-visibility:hidden] [transform:rotateY(180deg)]"
        style={{
          background: props.brand,
          color: props.brandFg ?? "#ffffff",
        }}
      >
        {props.backIcon}
      </div>
    </div>
  </a>
);

export const HeroSocialLinks = () => {
  return (
    <div
      class="relative z-20 flex flex-wrap items-center gap-3 sm:gap-3.5 w-fit max-w-[20rem] pointer-events-auto"
      role="group"
      aria-label="Social profiles"
    >
      {/* Dropdown trigger: content-sized width; plain tiles stay square */}
      <GitHubProfileMenu size="hero" brandFlip />
      <For each={socialLinks}>
        {(item) => {
          const Icon = socialIconById[item.id];
          return (
            <FlipShell
              label={item.label}
              href={item.href}
              brand={item.brand}
              brandFg={item.brandFg}
              front={<Icon size={26} />}
              backIcon={<Icon size={26} />}
            />
          );
        }}
      </For>
    </div>
  );
};

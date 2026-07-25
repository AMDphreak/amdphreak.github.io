import { For, Show, onCleanup, onMount } from "solid-js";
import { createSignal } from "solid-js";
import { Button } from "~/components/ui/button";
import { IconGithub } from "~/components/social-icons";
import { githubBrand } from "~/lib/social-links";
import { githubProfiles } from "~/lib/github-profiles";

const IconChevron = (p: { class?: string; size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={p.size || 10}
    height={p.size || 10}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class={p.class}
    aria-hidden="true"
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export const GitHubProfileMenu = (props: {
  size?: "default" | "hero";
  brandFlip?: boolean;
}) => {
  const [open, setOpen] = createSignal(false);
  let rootRef: HTMLDivElement | undefined;
  const hero = () => props.size === "hero";
  const flip = () => props.brandFlip === true;

  const close = () => setOpen(false);

  onMount(() => {
    const onDocClick = (e: MouseEvent) => {
      if (open() && rootRef && !rootRef.contains(e.target as Node)) {
        close();
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("click", onDocClick);
    document.addEventListener("keydown", onKey);
    onCleanup(() => {
      document.removeEventListener("click", onDocClick);
      document.removeEventListener("keydown", onKey);
    });
  });

  const triggerClass = () => {
    if (flip()) {
      // Content-sized (icon + caret); match hero tile height, not a forced square
      return [
        "group relative h-14 w-auto min-w-14 px-3.5 gap-1.5 rounded-xl border-0 bg-transparent p-0 shadow-none",
        "hover:bg-transparent text-stone-600 dark:text-stone-300",
        "[perspective:700px] [&_svg]:size-[unset]",
      ].join(" ");
    }
    if (hero()) {
      return [
        "rounded-xl structural-border h-14 w-auto min-w-14 px-3.5 gap-1.5",
        "text-stone-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800",
        "[&_svg]:size-[unset]",
      ].join(" ");
    }
    return "rounded-none structural-border h-10 w-auto px-2.5 gap-1.5 text-stone-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800";
  };

  return (
    <div class="relative z-30 shrink-0 pointer-events-auto" ref={rootRef}>
      <Button
        type="button"
        variant="outline"
        class={triggerClass()}
        aria-haspopup="menu"
        aria-expanded={open()}
        aria-label="GitHub — choose profile or organization"
        onClick={(e) => {
          e.stopPropagation();
          setOpen((v) => !v);
        }}
      >
        <Show
          when={flip()}
          fallback={
            <>
              <IconGithub size={hero() ? 26 : 20} />
              <IconChevron
                size={hero() ? 12 : 10}
                class={`opacity-60 transition-transform ${open() ? "rotate-180" : ""} ${hero() ? "!size-3" : ""}`}
              />
            </>
          }
        >
          {/* Stacked faces size to content (icon+caret), not a clipped square */}
          <span class="relative inline-grid place-items-center transition-transform duration-500 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-focus-visible:[transform:rotateY(180deg)]">
            <span class="col-start-1 row-start-1 inline-flex items-center justify-center gap-1.5 rounded-xl structural-border bg-background px-3.5 h-14 text-stone-600 dark:text-stone-300 [backface-visibility:hidden]">
              <IconGithub size={26} />
              <IconChevron
                size={12}
                class={`!size-3 opacity-60 transition-transform ${open() ? "rotate-180" : ""}`}
              />
            </span>
            <span
              class="col-start-1 row-start-1 inline-flex items-center justify-center gap-1.5 rounded-xl px-3.5 h-14 text-white [backface-visibility:hidden] [transform:rotateY(180deg)]"
              style={{ background: githubBrand.brand, color: githubBrand.brandFg ?? "#ffffff" }}
            >
              <IconGithub size={26} class="text-white" />
              <IconChevron
                size={12}
                class={`!size-3 text-white opacity-90 transition-transform ${open() ? "rotate-180" : ""}`}
              />
            </span>
          </span>
        </Show>
      </Button>

      <Show when={open()}>
        <div
          role="menu"
          class="absolute top-full left-0 z-50 mt-1 w-64 structural-border bg-background shadow-md border-stone-200 dark:border-stone-800"
        >
          <p class="px-3 py-2 font-mono text-[9px] uppercase tracking-widest text-stone-400 border-b border-stone-200 dark:border-stone-800">
            GitHub
          </p>
          <ul class="max-h-72 overflow-y-auto py-1">
            <For each={githubProfiles}>
              {(profile) => (
                <li>
                  <a
                    role="menuitem"
                    href={profile.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="block px-3 py-2 hover:bg-stone-50 dark:hover:bg-stone-900 transition-colors"
                    onClick={() => close()}
                  >
                    <span class="block text-sm font-heading text-stone-900 dark:text-stone-100">
                      {profile.label}
                    </span>
                    <span class="block font-mono text-[9px] uppercase tracking-widest text-stone-400">
                      {profile.tagline ?? profile.slug}
                    </span>
                  </a>
                </li>
              )}
            </For>
          </ul>
          <a
            role="menuitem"
            href="/repositories"
            class="block px-3 py-2 border-t border-stone-200 dark:border-stone-800 font-mono text-[9px] uppercase tracking-widest text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-50 dark:hover:bg-stone-900 transition-colors"
            onClick={() => close()}
          >
            Full repository catalog →
          </a>
        </div>
      </Show>
    </div>
  );
};

import { For, Show, onCleanup, onMount } from "solid-js";
import { createSignal } from "solid-js";
import { Button } from "~/components/ui/button";
import { githubProfiles } from "~/lib/github-profiles";

const IconGithub = (p: { class?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
    class={p.class}
    aria-hidden="true"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const IconChevron = (p: { class?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={10}
    height={10}
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

export const GitHubProfileMenu = () => {
  const [open, setOpen] = createSignal(false);
  let rootRef: HTMLDivElement | undefined;

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

  return (
    <div class="relative" ref={rootRef}>
      <Button
        type="button"
        variant="outline"
        class="rounded-none structural-border h-10 px-2 gap-0.5 text-stone-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800"
        aria-haspopup="menu"
        aria-expanded={open()}
        aria-label="GitHub — choose profile or organization"
        onClick={(e) => {
          e.stopPropagation();
          setOpen((v) => !v);
        }}
      >
        <IconGithub />
        <IconChevron class={`opacity-60 transition-transform ${open() ? "rotate-180" : ""}`} />
      </Button>

      <Show when={open()}>
        <div
          role="menu"
          class="absolute top-full right-0 z-50 mt-1 w-64 structural-border bg-background shadow-md border-stone-200 dark:border-stone-800"
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

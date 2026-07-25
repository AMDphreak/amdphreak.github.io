import { For, Show, createSignal, onCleanup, onMount } from "solid-js";
import { Portal } from "solid-js/web";
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

/**
 * Profile picker for GitHub user/orgs.
 * Uses a native <button> (not Kobalte) so click + ref are reliable under Astro hydration.
 * Menu is portaled when open so hero overflow / stacking cannot clip or hide it.
 */
export const GitHubProfileMenu = (props: {
  size?: "default" | "hero";
  brandFlip?: boolean;
}) => {
  const [open, setOpen] = createSignal(false);
  const [coords, setCoords] = createSignal({ top: 0, left: 0 });
  let rootEl: HTMLDivElement | undefined;

  const hero = () => props.size === "hero";
  const flip = () => props.brandFlip === true;

  const placeMenu = () => {
    if (!rootEl) return;
    const r = rootEl.getBoundingClientRect();
    setCoords({ top: r.bottom + 4, left: r.left });
  };

  const close = () => setOpen(false);

  const toggle = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (open()) {
      close();
      return;
    }
    placeMenu();
    setOpen(true);
  };

  onMount(() => {
    const onDocPointerDown = (e: PointerEvent) => {
      if (!open()) return;
      const t = e.target as Node | null;
      if (rootEl?.contains(t)) return;
      const portal = document.getElementById("github-profile-menu-portal");
      if (portal?.contains(t)) return;
      close();
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    const onReposition = () => {
      if (open()) placeMenu();
    };
    document.addEventListener("pointerdown", onDocPointerDown, true);
    document.addEventListener("keydown", onKey);
    window.addEventListener("resize", onReposition);
    window.addEventListener("scroll", onReposition, true);
    onCleanup(() => {
      document.removeEventListener("pointerdown", onDocPointerDown, true);
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onReposition);
      window.removeEventListener("scroll", onReposition, true);
    });
  });

  const triggerClass = () => {
    if (flip()) {
      return [
        "group relative inline-flex h-14 w-auto min-w-14 items-center justify-center rounded-xl border-0 bg-transparent p-0",
        "text-stone-600 dark:text-stone-300 cursor-default",
        "[perspective:700px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-400 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
      ].join(" ");
    }
    if (hero()) {
      return [
        "inline-flex h-14 w-auto min-w-14 items-center justify-center gap-1.5 rounded-xl social-tile-border px-3.5",
        "bg-background text-stone-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800 cursor-default",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-400 focus-visible:ring-offset-2",
      ].join(" ");
    }
    return [
      "inline-flex h-10 w-auto items-center justify-center gap-1.5 rounded-none structural-border px-2.5",
      "bg-background text-stone-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800 cursor-default",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-400 focus-visible:ring-offset-2",
    ].join(" ");
  };

  return (
    <div class="relative z-30 shrink-0" ref={rootEl}>
      <button
        type="button"
        class={triggerClass()}
        aria-haspopup="menu"
        aria-expanded={open()}
        aria-controls={open() ? "github-profile-menu-portal" : undefined}
        aria-label="GitHub — choose profile or organization"
        onClick={toggle}
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
          {/* Decorative flip only — events hit the <button> */}
          <span
            aria-hidden="true"
            class="pointer-events-none relative inline-grid place-items-center transition-transform duration-500 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-focus-visible:[transform:rotateY(180deg)]"
          >
            <span class="col-start-1 row-start-1 inline-flex h-14 items-center justify-center gap-1.5 rounded-xl social-tile-border bg-background/80 px-3.5 text-stone-600 dark:bg-background/70 dark:text-stone-300 [backface-visibility:hidden]">
              <IconGithub size={26} />
              <IconChevron
                size={12}
                class={`!size-3 opacity-60 transition-transform ${open() ? "rotate-180" : ""}`}
              />
            </span>
            <span
              class="col-start-1 row-start-1 inline-flex h-14 items-center justify-center gap-1.5 rounded-xl px-3.5 text-white [backface-visibility:hidden] [transform:rotateY(180deg)]"
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
      </button>

      {/* Gate ONLY on open — never on coords. Profiles are a static import. */}
      <Show when={open()}>
        <Portal>
          <div
            id="github-profile-menu-portal"
            role="menu"
            class="fixed z-[200] w-64 structural-border border-stone-200 bg-background shadow-lg dark:border-stone-800"
            style={{
              top: `${coords().top}px`,
              left: `${coords().left}px`,
            }}
          >
            <p class="border-b border-stone-200 px-3 py-2 font-mono text-[9px] uppercase tracking-widest text-stone-400 dark:border-stone-800">
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
                      class="block cursor-pointer px-3 py-2 transition-colors hover:bg-stone-50 dark:hover:bg-stone-900"
                      onClick={() => close()}
                    >
                      <span class="block font-heading text-sm text-stone-900 dark:text-stone-100">
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
              class="block cursor-pointer border-t border-stone-200 px-3 py-2 font-mono text-[9px] uppercase tracking-widest text-stone-500 transition-colors hover:bg-stone-50 hover:text-stone-900 dark:border-stone-800 dark:hover:bg-stone-900 dark:hover:text-stone-100"
              onClick={() => close()}
            >
              Full repository catalog →
            </a>
          </div>
        </Portal>
      </Show>
    </div>
  );
};

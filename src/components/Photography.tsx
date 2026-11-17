import { CollapsibleSection } from "~/components/CollapsibleSection";

const btnBase =
  "inline-flex items-center justify-center gap-1.5 h-12 px-5 font-heading text-sm font-medium tracking-tight transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-400 focus-visible:ring-offset-2 focus-visible:ring-offset-background";
const btnPrimary = `${btnBase} structural-border bg-stone-900 text-stone-50 dark:bg-stone-100 dark:text-stone-900 hover:bg-stone-800 dark:hover:bg-stone-200`;
const btnSecondary = `${btnBase} structural-border bg-background text-foreground hover:bg-stone-100 dark:hover:bg-stone-900`;

const iconSquare = "inline-flex h-[18px] w-[18px] shrink-0 items-center justify-center";

const IconCamera = () => (
  <span class={iconSquare} aria-hidden="true">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="h-full w-full">
      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
      <circle cx="12" cy="13" r="3" />
    </svg>
  </span>
);

const IconInstagram = () => (
  <span class={iconSquare} aria-hidden="true">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="3.25 3.25 17.5 17.5" fill="none" stroke="url(#instagram-brand-gradient)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" preserveAspectRatio="xMidYMid meet" class="h-full w-full">
      <defs>
        <linearGradient id="instagram-brand-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#833AB4" />
          <stop offset="50%" stop-color="#FD1D1D" />
          <stop offset="100%" stop-color="#F77737" />
        </linearGradient>
      </defs>
      <rect width="16" height="16" x="4" y="4" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  </span>
);

export const Photography = (props: { defaultOpen?: boolean; collapsible?: boolean }) => {
  const content = (
      <div class="flex flex-col gap-8 sm:flex-row sm:items-start">
        <div class="relative w-full shrink-0 sm:w-[13.5rem]">
          <div class="w-full structural-border bg-stone-100 dark:bg-stone-900">
            <img
              src="/photography/bigrpic-home-214.webp"
              srcset="/photography/bigrpic-home-214.webp 214w, /photography/bigrpic-home-428.webp 428w"
              sizes="(min-width: 640px) calc(13.5rem - 2px), calc(min(100vw, 80rem) - 3rem)"
              alt="Screenshot of bigrpic.com — BIGRPICTURE photography site"
              class="block h-auto w-full"
              width={214}
              height={235}
              loading="lazy"
            />
          </div>
          <div class="absolute -top-1 -left-1 w-2 h-2 border-l border-t border-stone-400 pointer-events-none" />
          <div class="absolute -bottom-1 -right-1 w-2 h-2 border-r border-b border-stone-400 pointer-events-none" />
        </div>

        <div class="flex-1 min-w-0 space-y-6">
          <p class="home-copy leading-relaxed">
            When I&apos;m not writing code, I&apos;m usually out with a camera. The fuller picture: vibe coding and brainstorming ways to improve the software
            ecosystem fill a lot of hours. When I&apos;m not in that headspace, it&apos;s the
            camera—or League of Legends. Through{" "}
            <span class="font-heading text-foreground">
              bigr picture
            </span>
            , I explore a huge range of photographic styles. Most of what I shoot is events,
            performances, weddings, and portraits of friends and family. Sometimes I do TFP
            shoots helping models with their portfolios.
          </p>

          <div class="flex flex-wrap gap-4 pt-2">
            <a
              href="https://www.bigrpic.com"
              target="_blank"
              rel="noopener noreferrer"
              class={btnPrimary}
            >
              <IconCamera /> bigrpic
            </a>
            <a
              href="https://instagram.com/bigrpicture"
              target="_blank"
              rel="noopener noreferrer"
              class={btnSecondary}
            >
              <IconInstagram /> Instagram
            </a>
          </div>
        </div>
      </div>
  );

  if (props.collapsible === false) {
    return (
      <section id="photography-section" class="space-y-6 scroll-mt-24">
        <h2 class="font-heading text-3xl tracking-tighter text-foreground">Photography</h2>
        <p class="font-mono text-sm uppercase tracking-[0.3em] text-stone-600 dark:text-stone-300">
          Events, Performances, Weddings, Portraits
        </p>
        {content}
      </section>
    );
  }

  return (
    <CollapsibleSection
      id="photography-section"
      title="Photography"
      tagline="Events, Performances, Weddings, Portraits"
      defaultOpen={props.defaultOpen ?? false}
    >
      {content}
    </CollapsibleSection>
  );
};

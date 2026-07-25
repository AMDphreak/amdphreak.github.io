import { CollapsibleSection } from "~/components/CollapsibleSection";

const IconCamera = (p: { size?: number; class?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={p.size || 14} height={p.size || 14} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class={p.class}>
    <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
    <circle cx="12" cy="13" r="3" />
  </svg>
);

const IconInstagram = (p: { size?: number; class?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={p.size || 14} height={p.size || 14} viewBox="0 0 24 24" fill="none" stroke="url(#instagram-brand-gradient)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class={p.class}>
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
);

export const Photography = (props: { defaultOpen?: boolean; collapsible?: boolean }) => {
  const content = (
      <div class="flex flex-col sm:flex-row gap-8 items-start">
        <div class="relative w-full sm:w-[28rem] shrink-0 group cursor-crosshair">
          <div class="aspect-video w-full structural-border bg-stone-100 dark:bg-stone-900 overflow-hidden">
            <img
              src="/photography/bigrpic-home.webp"
              alt="Screenshot of bigrpic.com — BIGRPICTURE photography site"
              class="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
              width={1440}
              height={900}
              loading="lazy"
            />
            <div class="absolute bottom-3 left-3 font-mono text-[8px] uppercase tracking-[0.3em] text-white/70 drop-shadow">
              Capture_Engine / v2.0
            </div>
          </div>
          <div class="absolute -top-1 -left-1 w-2 h-2 border-l border-t border-stone-400 pointer-events-none" />
          <div class="absolute -bottom-1 -right-1 w-2 h-2 border-r border-b border-stone-400 pointer-events-none" />
        </div>

        <div class="flex-1 min-w-0 space-y-6">
          <p class="text-xl md:text-2xl font-heading leading-tight text-foreground/90">
            When I&apos;m not writing code, I&apos;m usually out with a camera.
          </p>

          <div class="max-w-2xl space-y-4">
            <p class="text-stone-600 dark:text-stone-400 leading-relaxed">
              The fuller picture: vibe coding and brainstorming ways to improve the software
              ecosystem fill a lot of hours. When I&apos;m not in that headspace, it&apos;s the
              camera—or League of Legends.
            </p>
            <p class="text-stone-600 dark:text-stone-400 leading-relaxed">
              Through{" "}
              <span class="font-mono uppercase tracking-wider text-xs border-b border-stone-400">
                bigr Picture
              </span>
              , I explore a huge range of photographic styles. Most of what I shoot is events,
              performances, weddings, and portraits of friends and family. Sometimes I do TFP
              shoots helping models with their portfolios.
            </p>
            <p class="text-stone-600 dark:text-stone-400 leading-relaxed">
              Frequent clients: Germantown Symphony Orchestra and the Down Syndrome Association
              of Memphis.
            </p>
          </div>

          <div class="flex flex-wrap gap-4 pt-2">
            <a
              href="https://www.bigrpic.com"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 px-6 py-3 structural-border font-mono text-[10px] uppercase tracking-[0.2em] hover:bg-stone-50 dark:hover:bg-stone-900 transition-all font-bold"
            >
              <IconCamera /> bigrpic.com
            </a>
            <a
              href="https://instagram.com/bigrpicture"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 px-6 py-3 structural-border font-mono text-[10px] uppercase tracking-[0.2em] hover:bg-stone-50 dark:hover:bg-stone-900 transition-all font-bold"
            >
              <IconInstagram /> Instagram
            </a>
          </div>
        </div>
      </div>
  );

  if (props.collapsible === false) {
    return (
      <section id="photography-section" class="space-y-8 scroll-mt-24">
        <div class="flex items-end gap-4 border-b border-stone-200 dark:border-stone-800 pb-4">
          <h2 class="text-3xl font-heading tracking-tighter">Photography</h2>
          <span class="font-mono text-[10px] uppercase tracking-widest text-stone-500 mb-1">
            Visual Arts / Media
          </span>
        </div>
        {content}
      </section>
    );
  }

  return (
    <CollapsibleSection
      id="photography-section"
      title="Photography"
      tagline="Visual Arts / Media"
      defaultOpen={props.defaultOpen ?? false}
    >
      {content}
    </CollapsibleSection>
  );
};

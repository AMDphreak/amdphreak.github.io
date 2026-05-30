import { CollapsibleSection } from "~/components/CollapsibleSection";

const IconCamera = (p: { size?: number; class?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={p.size || 14} height={p.size || 14} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class={p.class}>
    <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
    <circle cx="12" cy="13" r="3" />
  </svg>
);

const IconInstagram = (p: { size?: number; class?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={p.size || 14} height={p.size || 14} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class={p.class}>
    <rect width="16" height="16" x="4" y="4" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export const Photography = () => {
  return (
    <CollapsibleSection
      id="photography-section"
      title="Photography"
      tagline="Visual Arts / Media"
      defaultOpen={false}
    >
      <div class="flex flex-col sm:flex-row gap-8 items-start">
        <div class="relative w-72 h-72 shrink-0 group cursor-crosshair">
          <div class="h-full w-full structural-border bg-stone-100 dark:bg-stone-900 flex items-center justify-center overflow-hidden">
            <IconCamera size={80} class="text-stone-200 dark:text-stone-800 group-hover:scale-110 transition-transform duration-700" />
            <div class="absolute bottom-4 left-4 font-mono text-[8px] uppercase tracking-[0.3em] text-stone-400/50">
              Capture_Engine / v2.0
            </div>
          </div>
          <div class="absolute -top-1 -left-1 w-2 h-2 border-l border-t border-stone-400 pointer-events-none" />
          <div class="absolute -bottom-1 -right-1 w-2 h-2 border-r border-b border-stone-400 pointer-events-none" />
        </div>

        <div class="flex-1 min-w-0 space-y-6">
          <p class="text-xl md:text-2xl font-heading leading-tight text-foreground/90">
            Capturing moments and preserving structural memories beyond the screen.
          </p>

          <div class="max-w-2xl space-y-4">
            <p class="text-stone-600 dark:text-stone-400 leading-relaxed">
              When I&apos;m not architecting software, I&apos;m behind the lens. My photography practice
              focuses on the intersection of urban landscape, events, and creative geometry through my
              business,{" "}
              <span class="font-mono uppercase tracking-wider text-xs border-b border-stone-400">
                bigr Picture
              </span>
              .
            </p>
            <p class="text-stone-600 dark:text-stone-400 leading-relaxed">
              I believe that photography is a form of visual documentation—a way to preserve the
              structural integrity of a moment before it dissolves. Whether it&apos;s the stark lines of a
              concrete building or the chaotic energy of a live event, my goal is to capture the
              underlying pattern.
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
              class="inline-flex items-center gap-2 px-6 py-3 border border-stone-200 dark:border-stone-800 font-mono text-[10px] uppercase tracking-[0.2em] text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 transition-all"
            >
              <IconInstagram /> Instagram
            </a>
          </div>
        </div>
      </div>
    </CollapsibleSection>
  );
};

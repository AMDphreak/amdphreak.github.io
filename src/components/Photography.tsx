// Inline SVGs for Photography
const IconCamera = (p: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={p.size || 14} height={p.size || 14} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class={p.class}>
    <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
    <circle cx="12" cy="13" r="3" />
  </svg>
);

const IconInstagram = (p: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={p.size || 14} height={p.size || 14} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class={p.class}>
    <rect width="16" height="16" x="4" y="4" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export const Photography = () => {
  return (
    <section class="space-y-8">
      <div class="flex items-end gap-3 border-b border-stone-200 dark:border-stone-800 pb-4">
        <h2 class="text-3xl font-heading tracking-tighter">Photography</h2>
        <span class="font-mono text-[10px] uppercase tracking-widest text-stone-500 mb-1">
          Visual Arts / Media
        </span>
      </div>

      <div class="relative">
        {/* Floating Pseudo-Image for Desktop */}
        <div class="md:float-right md:ml-12 md:mb-8 mb-8 w-full md:w-72 lg:w-80 aspect-square group cursor-crosshair">
          <div class="h-full structural-border bg-stone-100 dark:bg-stone-900 flex items-center justify-center overflow-hidden relative">
             <IconCamera size={80} class="text-stone-200 dark:text-stone-800 group-hover:scale-110 transition-transform duration-700" />
             
             <div class="absolute bottom-4 left-4 font-mono text-[8px] uppercase tracking-[0.3em] text-stone-400/50">
               Capture_Engine / v2.0
             </div>
          </div>
          <div class="absolute -top-1 -left-1 w-2 h-2 border-l border-t border-stone-400"></div>
          <div class="absolute -bottom-1 -right-1 w-2 h-2 border-r border-b border-stone-400"></div>
        </div>

        <div class="space-y-6">
          <p class="text-xl md:text-2xl font-heading leading-tight text-foreground/90 max-w-2xl">
             Capturing moments and preserving structural memories beyond the screen.
          </p>
          
          <div class="prose prose-stone dark:prose-invert max-w-2xl">
            <p class="text-stone-600 dark:text-stone-400 leading-relaxed">
              When I'm not architecting software, I'm behind the lens. My photography practice focuses on the intersection of urban landscape, events, and creative geometry through my business, <span class="font-mono uppercase tracking-wider text-xs border-b border-stone-400">bigr Picture</span>.
            </p>
            <p class="text-stone-600 dark:text-stone-400 leading-relaxed">
              I believe that photography is a form of visual documentation—a way to preserve the structural integrity of a moment before it dissolves. Whether it's the stark lines of a concrete building or the chaotic energy of a live event, my goal is to capture the underlying pattern.
            </p>
          </div>
          
          <div class="flex flex-wrap gap-4 pt-4">
            <a
              href="https://www.bigrpic.com"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 px-6 py-3 structural-border font-mono text-[10px] uppercase tracking-[0.2em] hover:bg-stone-50 dark:hover:bg-stone-900 transition-all font-bold"
            >
              <IconCamera /> bigrpic.com
            </a>
            <a
              href="https://www.bigrpicture.com"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 px-6 py-3 structural-border font-mono text-[10px] uppercase tracking-[0.2em] hover:bg-stone-50 dark:hover:bg-stone-900 transition-all opacity-60 hover:opacity-100"
            >
              <IconCamera /> bigrpicture.com
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
        <div class="clear-both"></div>
      </div>
    </section>
  );
};

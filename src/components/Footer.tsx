export function Footer() {
  const buildYear = import.meta.env.BUILD_YEAR || new Date().getFullYear();

  return (
    <footer class="mt-24 border-t border-stone-200 dark:border-stone-800 pt-12 pb-24 px-6">
      <div class="container mx-auto max-w-7xl">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div class="space-y-4">
            <h3 class="text-[10px] font-mono uppercase tracking-[0.3em] text-stone-500">Software stack</h3>
            <p class="text-xs text-stone-400 leading-relaxed font-mono">
              [FRAMEWORK]: ASTRO 5.x<br/>
              [UI LIBRARY]: SOLIDJS + KOBALTE<br/>
              [DESIGN]: TAILWIND CSS V4<br/>
              [VERSION]: 2026.04.11<br/>
              [LICENSE]: © {buildYear} RY-JH
            </p>
          </div>
          
          <div class="space-y-4 md:text-right">
            <h3 class="text-[10px] font-mono uppercase tracking-[0.3em] text-stone-500">Infrastructure</h3>
            <p class="text-[10px] text-stone-500 uppercase tracking-widest leading-relaxed">
              Architected with <a href="https://github.com/AMDphreak/amdphreak.github.io" target="_blank" rel="noopener noreferrer" class="text-stone-900 dark:text-stone-100 underline decoration-stone-300 underline-offset-4">GitHub Pages</a>
              <br/>
              Originally hand-coded. Redesigned with AI assistance.
            </p>
          </div>
        </div>
        
        <div class="mt-16 flex justify-center">
           <div class="w-px h-12 bg-gradient-to-b from-stone-200 to-transparent dark:from-stone-800"></div>
        </div>
      </div>
    </footer>
  );
}

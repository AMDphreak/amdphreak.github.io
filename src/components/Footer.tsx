export function Footer() {
  const buildYear = import.meta.env.BUILD_YEAR || new Date().getFullYear();

  return (
    <footer class="mt-24 border-t border-stone-200 dark:border-stone-800 pt-12 pb-24">
      <div class="chrome-width">
        <div class="max-w-md space-y-4">
          <p class="text-[11px] uppercase tracking-widest leading-relaxed text-stone-600 dark:text-stone-400">
            Built with{" "}
            <a
              href="https://github.com/AMDphreak/amdphreak.github.io"
              target="_blank"
              rel="noopener noreferrer"
              class="text-stone-900 underline decoration-stone-300 underline-offset-4 dark:text-stone-100"
            >
              GitHub Pages
            </a>
            <br />
            Site redesign conducted with AI.
          </p>
          <p class="text-xs text-stone-700 leading-relaxed font-mono dark:text-stone-400">
            [FRAMEWORK]: ASTRO 5.x<br />
            [UI LIBRARY]: SOLIDJS + SOLID-UI<br />
            [DESIGN]: TAILWIND CSS V4<br />
            [VERSION]: {import.meta.env.SITE_VERSION}<br />
            [LICENSE]: © {buildYear} RY-JH
          </p>
        </div>

        <div class="mt-16 flex justify-center">
          <div class="w-px h-12 bg-gradient-to-b from-stone-200 to-transparent dark:from-stone-800"></div>
        </div>
      </div>
    </footer>
  );
}

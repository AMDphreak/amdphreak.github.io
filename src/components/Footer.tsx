export function Footer() {
  // Generate year at build time - this gets evaluated when Astro builds the site
  // Alternative: Use import.meta.env.BUILD_YEAR if you set it in your build process
  const buildYear = import.meta.env.BUILD_YEAR || new Date().getFullYear();

  return (
    <footer class="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 p-8 text-center">
      <p class="text-gray-600 dark:text-gray-300 mb-2">
        © {buildYear} Ryan Johnson. All rights reserved.
      </p>
      <p class="text-sm text-gray-500 dark:text-gray-400">
        Made with Astro, SolidJS, Tailwind CSS, and Flowbite.
      </p>
      <p class="text-sm text-gray-500 dark:text-gray-400">
        Hosted for free on{" "}
        <a
          href="https://github.com/AMDphreak/amdphreak.github.io"
          target="_blank"
          rel="noopener noreferrer"
          class="footer-link"
        >
          GitHub Pages
        </a>
        .
      </p>
      <p class="text-sm text-gray-500 dark:text-gray-400">
        Originally hand-coded with HTML, CSS, and JavaScript. Ported using Cursor AI editor.
      </p>
    </footer>
  );
}

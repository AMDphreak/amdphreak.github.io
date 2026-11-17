import { philosophyLeadSummary } from "~/lib/philosophy-summary";

export const Philosophy = () => {
  return (
    <div class="space-y-8">
      <div class="flex items-end gap-4 border-b border-stone-200 dark:border-stone-800 pb-4">
        <h1 class="text-4xl md:text-5xl font-heading tracking-tighter">Philosophy</h1>
        <span class="font-mono text-[10px] uppercase tracking-widest text-stone-500 mb-1">
          Internal Logic / Origins
        </span>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div class="md:col-span-1">
          <p class="font-mono text-[10px] uppercase tracking-[0.2em] text-stone-400">Core Disciplines</p>
          <ul class="mt-4 space-y-2 text-[11px] font-mono uppercase tracking-widest text-stone-500">
            <li>• Computer Science</li>
            <li>• UI/UX</li>
            <li>• Human-Computer Interaction (HCI)</li>
            <li>• Mathematics</li>
            <li>• Physics</li>
          </ul>
        </div>

        <div class="md:col-span-3 space-y-6">
          <p class="text-xl md:text-2xl font-heading leading-tight text-foreground/90">
            {philosophyLeadSummary}
          </p>

          <div class="prose prose-stone dark:prose-invert max-w-none space-y-4">
            <p class="text-stone-600 dark:text-stone-400 leading-relaxed font-sans">
              I started coding in early high school on a TI-83+ Silver Edition graphing calculator,
              picking apart programs with black-box reverse-engineering before I had reliable
              internet access. I practiced several hours a day for years on an 8×16 character
              display with no lexical scoping — variables were global to every program, so I wrote
              code bottom-up so the editor would land near a fault faster, and I memorized entire
              listings because the screen could not hold them.
            </p>
            <p class="text-stone-600 dark:text-stone-400 leading-relaxed font-sans">
              From fractal generators and a black-and-white image compression scheme to automated
              math suites (to avoid doing the actual school work) and text-based Pong and Snake, my
              early work was obsessive, improvised, and deeply intimate with the machine.
            </p>
            <p class="text-stone-600 dark:text-stone-400 leading-relaxed font-sans italic">
              I am an &ldquo;unprofessional&rdquo;: I do not respect the traditions of the profession. I break
              expectations and question the existing order of things.
            </p>
            <p class="text-stone-600 dark:text-stone-400 leading-relaxed font-sans">
              The quotes and figures that shaped that posture are on the{" "}
              <a
                href="/inspirations"
                class="text-stone-800 dark:text-stone-200 underline decoration-stone-300 underline-offset-4 hover:text-stone-900 dark:hover:text-stone-100"
              >
                Inspirations page
              </a>
              . My self-written WordPress about page is archived verbatim at{" "}
              <a
                href="/wordpress-archive/about"
                class="text-stone-800 dark:text-stone-200 underline decoration-stone-300 underline-offset-4 hover:text-stone-900 dark:hover:text-stone-100"
              >
                About (WordPress archive)
              </a>
              .
            </p>
          </div>
        </div>
      </div>

      <section id="experience-before-ornament" class="space-y-6 border-t border-stone-200 pt-8 dark:border-stone-800">
        <h2 class="text-xl font-heading font-medium tracking-tight">Experience before ornament</h2>
        <div class="space-y-4 text-base md:text-lg text-stone-600 dark:text-stone-400 leading-relaxed font-sans">
          <p>
            Experience comes before ornament. I treat UX as the primary contract and UI as the
            disciplined surface that makes that contract legible — not the other way around.
          </p>
          <p>
            Interfaces should carry <strong class="font-medium text-stone-800 dark:text-stone-200">rich models of data</strong> instead of endless prose and flat lists that ought to live in a graph, hierarchy, or other structure matched to the problem. When the representation fits the domain, users reason in context instead of scanning noise.
          </p>
          <p>
            That bias toward clarity and restraint draws on industrial design — especially the work of
            <strong class="font-medium text-stone-800 dark:text-stone-200">Dieter Rams</strong> (Braun, and a touchstone for products like the original iPod): minimalism, honest materials, and forms that explain themselves. In engineering I pair that with
            <strong class="font-medium text-stone-800 dark:text-stone-200">rigorous specification design</strong>, composability, and functional orthogonality so parts combine without surprise.
          </p>
          <p>
            Organizationally I favor <strong class="font-medium text-stone-800 dark:text-stone-200">functional (thematic) design</strong> over purely taxonomic buckets: group things by what they do together in a real workflow (needle with thread), not only by abstract category (needle with nail because both are metal). Taxonomic sorting has its place in libraries and schemas; thematic sorting is often what a wise interface optimizes for.
          </p>
        </div>
      </section>
    </div>
  );
};

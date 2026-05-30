import { CollapsibleSection } from "~/components/CollapsibleSection";
import { theoryLeadSummary } from "~/lib/theory-summary";

export const About = () => {
  return (
    <CollapsibleSection
      id="theory-section"
      title="Theory"
      tagline="Internal Logic / Origins"
      defaultOpen={false}
      collapsedPreview={theoryLeadSummary}
    >
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
            {theoryLeadSummary}
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
              I am an &ldquo;unprofessional&rdquo;: I do not focus on breaking systems — I break
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
              (also in the header). My self-written WordPress about page is archived verbatim at{" "}
              <a
                href="/about/wordpress-archive"
                class="text-stone-800 dark:text-stone-200 underline decoration-stone-300 underline-offset-4 hover:text-stone-900 dark:hover:text-stone-100"
              >
                About (WordPress archive)
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </CollapsibleSection>
  );
};

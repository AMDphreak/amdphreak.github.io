import { philosophyLeadSummary } from "~/lib/philosophy-summary";

const body =
  "text-stone-600 dark:text-stone-400 leading-relaxed font-sans";

export const Philosophy = () => {
  return (
    <div class="space-y-8">
      <header class="space-y-4 border-b border-stone-200 pb-4 dark:border-stone-800">
        <h1 class="text-4xl md:text-5xl font-heading tracking-tighter">Philosophy</h1>
        <p class="font-mono text-[11px] uppercase tracking-[0.2em] text-stone-500">
          Internal Logic / Axioms
        </p>
      </header>

      <section id="on-software-reliability" class="space-y-4">
        <h2 class="text-3xl font-heading font-medium tracking-tight">On Software Reliability</h2>
        <p class={body}>{philosophyLeadSummary}</p>
      </section>

      <section id="on-ui-ux" class="space-y-6 border-t border-stone-200 pt-8 dark:border-stone-800">
        <h2 class="text-3xl font-heading font-medium tracking-tight">On UI/UX</h2>
        <div class="space-y-4 text-base md:text-lg text-stone-600 dark:text-stone-400 leading-relaxed font-sans">
          <p>
            UI/UX is as important as, if not more important than, the supposed core functionality,
            because it shapes the user's mental model of how to interface with the software. Bad
            UI/UX creates a bad mental model, which impairs the user's thinking. The screens,
            labels, and controls are how a person learns what the program is. When those teach the
            wrong picture, the person reasons from that picture, and the functions underneath are
            harder to use well.
          </p>
          <p>Software should respect its users' privacy and cognitive needs.</p>
          <p>
            Interfaces should carry <strong class="font-medium text-stone-800 dark:text-stone-200">rich models of data</strong> instead of endless prose and flat lists that ought to live in a graph, hierarchy, or other structure matched to the problem. When the representation fits the domain, users reason in context instead of scanning noise.
          </p>
          <p>
            That bias toward clarity and restraint draws on industrial design — especially the work of{" "}
            <strong class="font-medium text-stone-800 dark:text-stone-200">Dieter Rams</strong> (of Braun fame, whose design philosophy inspired continued successes for products such as the original iPod): minimalism, honest materials, and forms that explain themselves. In engineering I pair that with{" "}
            <strong class="font-medium text-stone-800 dark:text-stone-200">rigorous specification design</strong>, composability, and functional orthogonality so parts combine without surprise.
          </p>
          <p>
            Organizationally I favor <strong class="font-medium text-stone-800 dark:text-stone-200">functional (thematic) design</strong> over purely taxonomic buckets: group things by what they do together in a real workflow (needle with thread), not only by abstract category (needle with nail because both are metal). Taxonomic sorting has its place in libraries and schemas, but thematic sorting is often what a wise interface optimizes for.
          </p>
        </div>
      </section>
    </div>
  );
};

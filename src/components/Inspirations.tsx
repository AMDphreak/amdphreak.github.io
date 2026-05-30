import { For } from "solid-js";
import {
  discussionSectionImages,
  discussionSections,
  inspirationCards,
  inspirationProfiles,
  inspirationsCapturedAt,
  inspirationsSourceUrl,
  joeArmstrongIntro,
  joeArmstrongSection,
} from "~/lib/inspirations";

const QuoteAttribution = (props: {
  attribution: string;
  url?: string;
}) => (
  <cite class="block mt-3 font-mono text-[10px] uppercase tracking-widest text-stone-400 not-italic">
    {props.url ? (
      <a
        href={props.url}
        target="_blank"
        rel="noopener noreferrer"
        class="hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
      >
        {props.attribution}
      </a>
    ) : (
      props.attribution
    )}
  </cite>
);

const InspirationHeroCard = (props: { quote: string; attribution: string; attributionUrl?: string; image: string; imagePosition?: string }) => (
  <figure class="relative min-h-[280px] md:min-h-[320px] structural-border overflow-hidden">
    <img
      src={props.image}
      alt=""
      class="absolute inset-0 w-full h-full object-cover"
      style={props.imagePosition ? { "object-position": props.imagePosition } : undefined}
      loading="lazy"
      decoding="async"
    />
    <div class="absolute inset-0 bg-stone-950/55 dark:bg-stone-950/65" aria-hidden="true" />
    <blockquote class="relative z-10 flex flex-col justify-end min-h-[inherit] p-8 md:p-10">
      <p class="text-lg md:text-xl font-heading leading-snug text-stone-50 max-w-2xl">
        &ldquo;{props.quote}&rdquo;
      </p>
      <QuoteAttribution attribution={props.attribution} url={props.attributionUrl} />
    </blockquote>
  </figure>
);

export const Inspirations = () => {
  return (
    <section class="space-y-12">
      <div class="flex flex-wrap items-end gap-4 border-b border-stone-200 dark:border-stone-800 pb-4">
        <h2 class="text-3xl font-heading tracking-tighter">Inspirations</h2>
        <span class="font-mono text-[10px] uppercase tracking-widest text-stone-500 mb-1">
          Quotes &amp; Posture
        </span>
      </div>

      <p class="text-sm text-stone-600 dark:text-stone-400 leading-relaxed max-w-3xl font-sans">
        Migrated from my WordPress inspirations page ({inspirationsSourceUrl}). Captured{" "}
        {inspirationsCapturedAt} with original background art preserved locally.
      </p>

      <div class="grid grid-cols-1 gap-6">
        <For each={inspirationCards}>
          {(card) => (
            <InspirationHeroCard
              quote={card.quote}
              attribution={card.attribution}
              attributionUrl={card.attributionUrl}
              image={card.image}
              imagePosition={card.imagePosition}
            />
          )}
        </For>
      </div>

      <div class="structural-border overflow-hidden">
        <div
          class="relative min-h-[200px] bg-cover bg-center"
          style={{ "background-image": `url(${joeArmstrongSection.headerImage})` }}
        >
          <div class="absolute inset-0 bg-stone-950/50" aria-hidden="true" />
          <p class="relative z-10 p-8 text-center text-xl font-heading text-stone-50">
            {joeArmstrongSection.title}
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-px bg-stone-200 dark:bg-stone-800">
          <For each={joeArmstrongSection.quotes}>
            {(q) => (
              <blockquote class="bg-background p-8 space-y-2">
                <p class="text-base text-stone-700 dark:text-stone-300 leading-relaxed font-sans">
                  &ldquo;{q.quote}&rdquo;
                </p>
                <QuoteAttribution attribution={q.attribution} />
              </blockquote>
            )}
          </For>
        </div>
        <div class="p-6 border-t border-stone-200 dark:border-stone-800 bg-stone-50/50 dark:bg-stone-900/30">
          <p class="text-sm text-stone-600 dark:text-stone-400 leading-relaxed font-sans">
            {joeArmstrongIntro}
          </p>
        </div>
      </div>

      <For each={inspirationProfiles}>
        {(profile) => (
          <article class="structural-border p-8 space-y-6">
            <header class="text-center space-y-2">
              <h3 class="text-2xl font-heading tracking-tight">{profile.title}</h3>
              <p class="text-sm text-stone-600 dark:text-stone-400 max-w-2xl mx-auto leading-relaxed">
                {profile.description}
              </p>
            </header>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <For each={profile.images}>
                {(src) => (
                  <img
                    src={src}
                    alt=""
                    class="w-full h-48 md:h-56 object-cover structural-border"
                    loading="lazy"
                  />
                )}
              </For>
            </div>
          </article>
        )}
      </For>

      <div class="space-y-10">
        <h3 class="text-xl font-heading tracking-tight text-center">Discussions and Videos</h3>
        <For each={discussionSections}>
          {(section) => (
            <article class="space-y-6">
              <h4 class="text-lg font-heading text-center">{section.title}</h4>
              {section.image && (
                <img
                  src={section.image}
                  alt=""
                  class="w-full max-h-48 object-cover structural-border"
                  loading="lazy"
                />
              )}
              <div class="space-y-4">
                <For each={section.quotes}>
                  {(q, qi) => (
                    <blockquote class="structural-border p-6 bg-background">
                      <p class="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
                        &ldquo;{q.quote}&rdquo;
                      </p>
                      <QuoteAttribution attribution={q.attribution} url={q.attributionUrl} />
                      {section.id === "famous-oop" && qi() === 0 && (
                        <img
                          src={discussionSectionImages["famous-oop-armstrong"]}
                          alt=""
                          class="mt-4 w-full max-h-40 object-cover object-top structural-border"
                          loading="lazy"
                        />
                      )}
                      {section.id === "famous-oop" && qi() === 1 && (
                        <img
                          src={discussionSectionImages["famous-oop-graham"]}
                          alt=""
                          class="mt-4 w-full max-h-40 object-cover structural-border"
                          loading="lazy"
                        />
                      )}
                      {section.id === "famous-oop" && qi() === 2 && (
                        <img
                          src={discussionSectionImages["famous-oop-raymond"]}
                          alt=""
                          class="mt-4 w-full max-h-40 object-cover structural-border"
                          loading="lazy"
                        />
                      )}
                    </blockquote>
                  )}
                </For>
              </div>
            </article>
          )}
        </For>
      </div>

      <p class="font-mono text-[9px] uppercase tracking-widest text-stone-400">
        Source:{" "}
        <a
          href={inspirationsSourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          class="hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
        >
          WordPress originals ↗
        </a>
      </p>
    </section>
  );
};

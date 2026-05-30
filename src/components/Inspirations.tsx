import { For, Show } from "solid-js";
import {
  discussionSections,
  inspirationCards,
  inspirationProfiles,
  joeArmstrongIntro,
  joeArmstrongSection,
  type InspirationQuote,
} from "~/lib/inspirations";
import { cn } from "~/lib/utils";

const QuoteAttribution = (props: {
  attribution: string;
  url?: string;
  light?: boolean;
}) => (
  <cite
    class={cn(
      "block mt-3 font-mono text-[10px] uppercase tracking-widest not-italic",
      props.light ? "text-stone-300" : "text-stone-400",
    )}
  >
    {props.url ? (
      <a
        href={props.url}
        target="_blank"
        rel="noopener noreferrer"
        class={cn(
          "transition-colors",
          props.light
            ? "hover:text-stone-50"
            : "hover:text-stone-900 dark:hover:text-stone-100",
        )}
      >
        {props.attribution}
      </a>
    ) : (
      props.attribution
    )}
  </cite>
);

const InspirationHeroCard = (props: {
  quote: string;
  attribution: string;
  attributionUrl?: string;
  image: string;
  imagePosition?: string;
  tall?: boolean;
}) => (
  <figure
    class={cn(
      "relative structural-border overflow-hidden",
      props.tall ? "min-h-[340px] md:min-h-[400px]" : "min-h-[280px] md:min-h-[320px]",
    )}
  >
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
      <QuoteAttribution
        attribution={props.attribution}
        url={props.attributionUrl}
        light
      />
    </blockquote>
  </figure>
);

const QuoteHeroFromData = (props: { quote: InspirationQuote }) => (
  <Show when={props.quote.image}>
    <InspirationHeroCard
      quote={props.quote.quote}
      attribution={props.quote.attribution}
      attributionUrl={props.quote.attributionUrl}
      image={props.quote.image!}
      imagePosition={props.quote.imagePosition}
      tall
    />
  </Show>
);

const PlainQuoteBlock = (props: { quote: InspirationQuote }) => (
  <blockquote class="structural-border p-6 md:p-8 bg-background">
    <p class="text-sm md:text-base text-stone-600 dark:text-stone-400 leading-relaxed">
      &ldquo;{props.quote.quote}&rdquo;
    </p>
    <QuoteAttribution
      attribution={props.quote.attribution}
      url={props.quote.attributionUrl}
    />
  </blockquote>
);

type InspirationsProps = {
  /** When false, page shell supplies the title (e.g. /inspirations). */
  showTitle?: boolean;
};

export const Inspirations = (props: InspirationsProps) => {
  const showTitle = () => props.showTitle !== false;

  return (
    <section class="space-y-12">
      {showTitle() && (
        <div class="flex flex-wrap items-end gap-4 border-b border-stone-200 dark:border-stone-800 pb-4">
          <h2 class="text-3xl font-heading tracking-tighter">Inspirations</h2>
          <span class="font-mono text-[10px] uppercase tracking-widest text-stone-500 mb-1">
            Quotes &amp; Posture
          </span>
        </div>
      )}

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

      <article class="structural-border p-8 space-y-6">
        <header class="text-center space-y-2">
          <h3 class="text-2xl font-heading tracking-tight">{joeArmstrongSection.title}</h3>
          <p class="font-mono text-[10px] uppercase tracking-[0.2em] text-stone-500">
            {joeArmstrongSection.quotesHeading}
          </p>
        </header>
        <img
          src={joeArmstrongSection.portraitImage}
          alt="Dr. Joe Armstrong"
          class="w-full h-48 md:h-56 object-cover structural-border"
          style={
            joeArmstrongSection.imagePosition
              ? { "object-position": joeArmstrongSection.imagePosition }
              : undefined
          }
          loading="lazy"
          decoding="async"
        />
        <div class="grid grid-cols-1 md:grid-cols-2 gap-px bg-stone-200 dark:bg-stone-800 structural-border">
          <For each={joeArmstrongSection.quotes}>
            {(q) => (
              <blockquote class="bg-background p-6 md:p-8 space-y-2">
                <p class="text-base text-stone-700 dark:text-stone-300 leading-relaxed font-sans">
                  &ldquo;{q.quote}&rdquo;
                </p>
                <QuoteAttribution attribution={q.attribution} />
              </blockquote>
            )}
          </For>
        </div>
        <p class="text-sm text-stone-600 dark:text-stone-400 leading-relaxed font-sans max-w-3xl mx-auto text-center">
          {joeArmstrongIntro}{" "}
          <a
            href={joeArmstrongSection.siteUrl}
            target="_blank"
            rel="noopener noreferrer"
            class="text-stone-800 dark:text-stone-200 underline decoration-stone-300 underline-offset-4 hover:text-stone-900 dark:hover:text-stone-100"
          >
            joearms.github.io ↗
          </a>
        </p>
      </article>

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
                {(src, i) => (
                  <img
                    src={src}
                    alt=""
                    class={cn(
                      "w-full object-cover structural-border",
                      profile.id === "paul-graham" && i() === 0
                        ? "h-56 md:h-64"
                        : profile.id === "paul-graham" && i() === 1
                          ? "h-56 md:h-64 object-cover object-center"
                          : "h-48 md:h-56",
                    )}
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
              <div class="space-y-2 text-center">
                <h4 class="text-lg font-heading">{section.title}</h4>
                <Show when={section.relatedUrl}>
                  <p>
                    <a
                      href={section.relatedUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      class="font-mono text-[10px] uppercase tracking-widest text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
                    >
                      {section.relatedLabel ?? section.relatedUrl} ↗
                    </a>
                  </p>
                </Show>
              </div>
              <div class="space-y-6">
                <For each={section.quotes}>
                  {(q) =>
                    q.image ? <QuoteHeroFromData quote={q} /> : <PlainQuoteBlock quote={q} />
                  }
                </For>
              </div>
            </article>
          )}
        </For>
      </div>
    </section>
  );
};

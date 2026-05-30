import { Show, type JSX } from "solid-js";
import { createSignal } from "solid-js";

type CollapsibleSectionProps = {
  id: string;
  title: string;
  tagline?: string;
  defaultOpen?: boolean;
  /** Single-line preview when collapsed (e.g. Theory lead summary). */
  collapsedPreview?: string;
  titleSize?: "lg" | "xl";
  children: JSX.Element;
};

export const CollapsibleSection = (props: CollapsibleSectionProps) => {
  const [open, setOpen] = createSignal(props.defaultOpen ?? true);
  const titleClass =
    props.titleSize === "lg"
      ? "text-xl font-heading font-medium tracking-tight"
      : "text-3xl font-heading tracking-tighter";

  return (
    <section id={props.id} class="scroll-mt-20 space-y-0">
      <button
        type="button"
        class="w-full text-left group border-b border-stone-200 dark:border-stone-800 pb-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-400 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
        aria-expanded={open()}
        aria-controls={`${props.id}-panel`}
        onClick={() => setOpen((v) => !v)}
      >
        <div class="flex flex-wrap items-end justify-between gap-4">
          <div class="flex flex-wrap items-end gap-4 min-w-0 flex-1">
            <h2 class={titleClass}>{props.title}</h2>
            <Show when={props.tagline}>
              <span class="font-mono text-[10px] uppercase tracking-widest text-stone-500 mb-1">
                {props.tagline}
              </span>
            </Show>
          </div>
          <span
            class="font-mono text-sm text-stone-400 group-hover:text-stone-900 dark:group-hover:text-stone-100 transition-colors shrink-0"
            aria-hidden="true"
          >
            {open() ? "−" : "+"}
          </span>
        </div>
        <Show when={!open() && props.collapsedPreview}>
          <p class="mt-3 text-base md:text-lg font-heading leading-snug text-stone-500 dark:text-stone-400 truncate">
            {props.collapsedPreview}
          </p>
        </Show>
      </button>

      <Show when={open()}>
        <div id={`${props.id}-panel`} class="pt-8">
          {props.children}
        </div>
      </Show>
    </section>
  );
};

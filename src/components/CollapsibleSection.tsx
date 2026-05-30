import { Show, type JSX } from "solid-js";
import { createSignal } from "solid-js";
import { cn } from "~/lib/utils";

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

const sectionActionClass =
  "inline-flex items-center gap-2 px-6 py-3 structural-border font-heading text-lg md:text-xl font-medium tracking-tight transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-400 focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const revealGrid =
  "grid transition-[grid-template-rows] duration-300 ease-in-out motion-reduce:transition-none";
const revealInner =
  "overflow-hidden min-h-0 transition-opacity duration-300 ease-in-out motion-reduce:transition-none";

export const CollapsibleSection = (props: CollapsibleSectionProps) => {
  const [open, setOpen] = createSignal(props.defaultOpen ?? true);
  const titleClass =
    props.titleSize === "lg"
      ? "text-xl font-heading font-medium tracking-tight"
      : "text-3xl font-heading tracking-tighter";

  const collapsed = () => !open();

  return (
    <section
      id={props.id}
      class={cn(
        "scroll-mt-20 transition-[padding-bottom] duration-300 ease-in-out motion-reduce:transition-none",
        collapsed() ? "pb-10 lg:pb-14" : "pb-2",
      )}
    >
      <div class="border-b border-stone-200 dark:border-stone-800 pb-4">
        <div class="flex flex-wrap items-end justify-between gap-4">
          <div class="flex flex-wrap items-end gap-4 min-w-0 flex-1">
            <h2 class={titleClass}>{props.title}</h2>
            <Show when={props.tagline}>
              <span class="font-mono text-[10px] uppercase tracking-widest text-stone-500 mb-1">
                {props.tagline}
              </span>
            </Show>
          </div>
          <div
            class={cn(
              revealGrid,
              open() ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
            )}
            aria-hidden={!open()}
          >
            <div
              class={cn(
                revealInner,
                open() ? "opacity-100" : "opacity-0",
              )}
            >
              <button
                type="button"
                class={cn(
                  sectionActionClass,
                  "text-stone-900 dark:text-stone-100 hover:bg-stone-50 dark:hover:bg-stone-900 shrink-0",
                )}
                aria-controls={`${props.id}-panel`}
                tabindex={open() ? 0 : -1}
                onClick={() => setOpen(false)}
              >
                Collapse
                <span class="font-mono text-xs opacity-60" aria-hidden="true">
                  −
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        class={cn(revealGrid, collapsed() ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}
        aria-hidden={!collapsed()}
      >
        <div
          class={cn(
            revealInner,
            collapsed() ? "opacity-100" : "opacity-0",
          )}
        >
          <div class="mt-5 space-y-5">
            <Show when={props.collapsedPreview}>
              <p class="text-base md:text-lg font-heading leading-snug text-stone-500 dark:text-stone-400 truncate">
                {props.collapsedPreview}
              </p>
            </Show>
            <button
              type="button"
              class={cn(
                sectionActionClass,
                "text-stone-900 dark:text-stone-100 hover:bg-stone-50 dark:hover:bg-stone-900",
              )}
              aria-expanded={false}
              aria-controls={`${props.id}-panel`}
              tabindex={collapsed() ? 0 : -1}
              onClick={() => setOpen(true)}
            >
              Expand
              <span class="font-mono text-xs opacity-70" aria-hidden="true">
                →
              </span>
            </button>
          </div>
        </div>
      </div>

      <div
        id={`${props.id}-panel`}
        class={cn(revealGrid, open() ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}
        aria-hidden={!open()}
      >
        <div
          class={cn(
            revealInner,
            open() ? "opacity-100" : "opacity-0",
          )}
        >
          <div class="pt-8 pb-4">{props.children}</div>
        </div>
      </div>
    </section>
  );
};

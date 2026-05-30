import { Show, type JSX } from "solid-js";
import { createSignal } from "solid-js";
import { cn } from "~/lib/utils";

type CollapsibleSectionProps = {
  id: string;
  title: string;
  tagline?: string;
  defaultOpen?: boolean;
  /** Teaser line when collapsed; grows on hover, full text when expanded. */
  collapsedPreview?: string;
  titleSize?: "lg" | "xl";
  children: JSX.Element;
};

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

  const toggle = () => setOpen((v) => !v);

  const onActivateKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggle();
    }
  };

  return (
    <section
      id={props.id}
      class={cn(
        "group/section scroll-mt-20 transition-[padding-bottom] duration-300 ease-in-out motion-reduce:transition-none",
        collapsed() ? "pb-10 lg:pb-14" : "pb-2",
      )}
    >
      <div
        class="border-b border-stone-200 dark:border-stone-800 pb-4 cursor-pointer"
        role="button"
        tabindex={0}
        aria-expanded={open()}
        aria-controls={`${props.id}-panel`}
        onClick={toggle}
        onKeyDown={onActivateKeyDown}
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
          <span class="font-mono text-[9px] uppercase tracking-widest text-stone-400 shrink-0">
            {open() ? "Click to collapse" : "Click to open"}
          </span>
        </div>
      </div>

      <div
        id={`${props.id}-panel`}
        class={cn(
          "relative",
          collapsed() && "cursor-pointer",
          collapsed() &&
            cn(
              "overflow-hidden transition-[max-height] duration-300 ease-in-out motion-reduce:transition-none group-hover/section:max-h-52 group-focus-within/section:max-h-52",
              props.collapsedPreview ? "max-h-14" : "max-h-8",
            ),
          open() && "max-h-none",
        )}
        role={collapsed() ? "button" : undefined}
        tabindex={collapsed() ? 0 : undefined}
        aria-expanded={open()}
        aria-label={collapsed() ? `Expand ${props.title} section` : undefined}
        onClick={(e) => {
          e.stopPropagation();
          if (collapsed()) toggle();
        }}
        onKeyDown={(e) => {
          e.stopPropagation();
          if (collapsed()) onActivateKeyDown(e);
        }}
      >
        <Show when={collapsed() && props.collapsedPreview}>
          <p
            class="mt-4 text-base md:text-lg font-heading leading-snug text-stone-500 dark:text-stone-400 line-clamp-1 group-hover/section:line-clamp-4 group-focus-within/section:line-clamp-4"
          >
            {props.collapsedPreview}
          </p>
        </Show>

        <Show when={collapsed()}>
          <p class="mt-2 font-mono text-[9px] uppercase tracking-widest text-stone-400 group-hover/section:hidden group-focus-within/section:hidden">
            Hover to preview · Click to open
          </p>
        </Show>

        <div
          class={cn(
            revealGrid,
            open() ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
            collapsed() && "group-hover/section:grid-rows-[1fr] group-focus-within/section:grid-rows-[1fr]",
          )}
        >
          <div
            class={cn(
              revealInner,
              open() ? "opacity-100" : "opacity-0",
              collapsed() &&
                "group-hover/section:opacity-100 group-focus-within/section:opacity-100",
            )}
          >
            <div
              class={cn(
                "relative",
                collapsed() ? "pt-4 pb-10" : "pt-8 pb-4",
              )}
            >
              {props.children}
              <Show when={collapsed()}>
                <div
                  class="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-background to-transparent opacity-0 transition-opacity duration-300 group-hover/section:opacity-100 group-focus-within/section:opacity-100 motion-reduce:opacity-0"
                  aria-hidden="true"
                />
              </Show>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

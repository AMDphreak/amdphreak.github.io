import { For } from "solid-js";
import { socialIconById } from "~/components/social-icons";
import { profileLinks } from "~/lib/social-links";

export const ProfileLinks = () => {
  return (
    <ul class="m-0 flex list-none flex-wrap gap-x-6 gap-y-3 p-0" role="list" aria-label="Profiles">
      <For each={profileLinks}>
        {(item) => {
          const Icon = socialIconById[item.id];
          return (
            <li>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 text-stone-800 transition-colors hover:text-stone-950 dark:text-stone-300 dark:hover:text-stone-100"
              >
                <Icon size={18} />
                <span class="font-mono text-[10px] uppercase tracking-[0.2em]">{item.label}</span>
              </a>
            </li>
          );
        }}
      </For>
    </ul>
  );
};

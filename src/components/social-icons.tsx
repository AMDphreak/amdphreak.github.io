import type { JSX } from "solid-js";

type IconProps = {
  size?: number;
  class?: string;
};

export const IconLinkedin = (p: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={p.size || 20} height={p.size || 20} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class={p.class} aria-hidden="true">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const IconGitlab = (p: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={p.size || 20} height={p.size || 20} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class={p.class} aria-hidden="true">
    <path d="m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.06 3.27a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-3.33 10a.49.49 0 0 0 .01.33.48.48 0 0 0 .21.24l9.49 6.9a.38.38 0 0 0 .46 0l9.49-6.9a.48.48 0 0 0 .21-.24.49.49 0 0 0 .01-.33z" />
  </svg>
);

export const IconTwitter = (p: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={p.size || 20} height={p.size || 20} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class={p.class} aria-hidden="true">
    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
  </svg>
);

export const IconCode = (p: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={p.size || 20} height={p.size || 20} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class={p.class} aria-hidden="true">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

export const IconChess = (p: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={p.size || 20} height={p.size || 20} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class={p.class} aria-hidden="true">
    <title>Chess.com</title>
    <path d="M12 3v3" />
    <path d="M8 6h8" />
    <path d="M9 6v2a3 3 0 0 0 6 0V6" />
    <path d="M7 21h10" />
    <path d="M8 21v-4a4 4 0 0 1 8 0v4" />
  </svg>
);

export const IconCodeberg = (p: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={p.size || 20} height={p.size || 20} viewBox="0 0 24 24" fill="currentColor" class={p.class} aria-hidden="true">
    <title>Codeberg</title>
    <path d="M11.999 0C7.24 0 3.804 2.841 2.667 6.67L10.12 22.328a1.043 1.043 0 0 0 1.758 0l7.454-15.658C18.195 2.841 14.759 0 11.999 0zm0 3.66c1.136 0 2.057.92 2.057 2.056 0 1.137-.92 2.057-2.057 2.057-1.136 0-2.056-.92-2.056-2.057 0-1.136.92-2.056 2.056-2.056z" />
  </svg>
);

export const IconGithub = (p: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={p.size || 20} height={p.size || 20} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class={p.class} aria-hidden="true">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export const socialIconById: Record<string, (p: IconProps) => JSX.Element> = {
  codeberg: IconCodeberg,
  gitlab: IconGitlab,
  linkedin: IconLinkedin,
  x: IconTwitter,
  chess: IconChess,
  codersrank: IconCode,
};

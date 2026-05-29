import type { Config } from "tailwindcss";

/** Referenced by solid-ui; primary styling lives in src/styles/tailwind.css (Tailwind v4). */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
} satisfies Config;

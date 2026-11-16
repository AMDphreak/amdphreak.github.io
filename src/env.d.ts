/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly BUILD_YEAR?: string;
  readonly SITE_VERSION: string;
}

declare global {
  const Astro: {
    generator: string;
  };
}

declare module "solid-js" {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}

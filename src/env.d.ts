/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

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

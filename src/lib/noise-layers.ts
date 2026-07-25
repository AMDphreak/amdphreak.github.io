export interface NoiseLayer {
  x: number;
  y: number;
  rot: number;
  opacity: number;
  /** CSS background-size for this layer's tile (px). Defaults to 64. */
  tileSize?: number;
  /** Public texture path. Defaults to fine grain. */
  src?: string;
}

const FINE = "/textures/noise-tile.png";
const POISSON = "/textures/poisson-noise-tile.png";

/** Coprime offsets + irrational angles so repeat grids never align across layers. */
export const noiseLayers: NoiseLayer[] = [
  // Fine static (existing)
  { x: 0, y: 0, rot: 0, opacity: 0.028, tileSize: 64, src: FINE },
  { x: 37, y: 53, rot: 13, opacity: 0.022, tileSize: 64, src: FINE },
  { x: -29, y: 71, rot: -7, opacity: 0.022, tileSize: 64, src: FINE },
  { x: 61, y: -17, rot: 21, opacity: 0.018, tileSize: 64, src: FINE },
  { x: -43, y: 89, rot: -14, opacity: 0.018, tileSize: 64, src: FINE },
  // Large-scale Poisson blotches (soft-light, sparse structure)
  { x: 11, y: -47, rot: 8, opacity: 0.08, tileSize: 512, src: POISSON },
  { x: -73, y: 29, rot: -19, opacity: 0.055, tileSize: 640, src: POISSON },
  { x: 97, y: 61, rot: 27, opacity: 0.04, tileSize: 768, src: POISSON },
];

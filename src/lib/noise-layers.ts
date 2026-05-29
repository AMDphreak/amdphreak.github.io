export interface NoiseLayer {
  x: number;
  y: number;
  rot: number;
  opacity: number;
}

/** Coprime offsets + irrational angles so repeat grids never align across layers. */
export const noiseLayers: NoiseLayer[] = [
  { x: 0, y: 0, rot: 0, opacity: 0.028 },
  { x: 37, y: 53, rot: 13, opacity: 0.022 },
  { x: -29, y: 71, rot: -7, opacity: 0.022 },
  { x: 61, y: -17, rot: 21, opacity: 0.018 },
  { x: -43, y: 89, rot: -14, opacity: 0.018 },
];

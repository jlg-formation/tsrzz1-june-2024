import { cx0, cy0, r0 } from "./constants";
import { Point } from "./interfaces/Point";

export const computeAngle = (i: number, samples: number): number =>
  i * ((Math.PI * 2) / samples) + Math.PI / 2;

export const computePointOnCircle = (angle: number): Point => {
  const x = cx0 + r0 * Math.cos(angle);
  const y = cy0 + r0 * Math.sin(angle);
  return { x, y };
};

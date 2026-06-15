// DARTRIX-MEASURE-CHAT v1.0 — STRTRIX VISUALIZATION API
// Smile Curve: y(x) = (7.14/φD)·x² − C

import { SmileCurveParams, VisualizationFrame } from './types';

export function generateSmileCurve(
  params: SmileCurveParams,
  range: number = 5,
  steps: number = 100
): VisualizationFrame {
  const { phiD, C, scale } = params;
  const x: number[] = [];
  const y: number[] = [];

  for (let i = 0; i <= steps; i++) {
    const xi = -range + (2 * range * i) / steps;
    const yi = (scale / phiD) * xi ** 2 - C;
    x.push(parseFloat(xi.toFixed(4)));
    y.push(parseFloat(yi.toFixed(4)));
  }

  return { x, y };
}

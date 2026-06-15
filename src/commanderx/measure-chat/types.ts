// DARTRIX-MEASURE-CHAT v1.0 — COMMANDERX CONTRACT
// K = 1848181 | scale = 7.14 | phiD = 7.14/π ≈ 2.2736

export interface HelixParams {
  omega0: number;      // natural frequency
  phiD: number;        // geometric coefficient (7.14/π)
  lambda: number;      // damping
  scale: number;       // Daniel-714 scaling constant = 7.14
}

export interface HelixState {
  t: number;           // time
  psi: number;         // position
  dpsi: number;        // velocity
  ddpsi: number;       // acceleration
}

export interface TelemetryVector {
  timestamp: number;
  freq: number;        // carrier frequency, default 156 Hz
  drift: number;       // e.g. 0.61
  cohesion: number;    // e.g. 44.534
}

export interface BeeLabInput {
  mImpulse: TelemetryVector;
  deviceId: string;    // e.g. 'Samsung Galaxy A10'
}

export interface VertebralSegment {
  id: 'V1' | 'V2' | 'V3' | 'V4';
  branchType: 'meningeal' | 'muscular' | 'spinal' | 'intracranial';
}

export interface DermatomeMap {
  level: string;       // e.g. 'T10', 'S1'
  region: string;      // e.g. 'umbilicus', 'lateral foot'
}

export interface DartrixState {
  mode: 'STATE_00' | 'PHI' | 'FIGHT';
  drift: number;
  resonanceK: number;  // K = 1848181
  phiD: number;
}

export interface ChatRequest {
  text: string;
  contextState: DartrixState;
}

export interface ChatResponse {
  text: string;
  metrics?: Record<string, number>;
}

export interface SmileCurveParams {
  phiD: number;
  C: number;
  scale: number;       // 7.14
}

export interface VisualizationFrame {
  x: number[];
  y: number[];
}

export interface AtlasMatrix {
  resolve(query: string): string;
}

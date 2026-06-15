// DARTRIX-MEASURE-CHAT v1.0 — AGENT LEON EXECUTION CORE
// Helix ODE: d²ψ/dt² + ω₀²ψ = 7.14·φD·e^(−λt)·cos(156πt)

import { HelixParams, HelixState, AtlasMatrix } from './types';

export class HelixEngine {
  constructor(private params: HelixParams) {}

  step(state: HelixState, dt: number): HelixState {
    const { omega0, phiD, lambda, scale } = this.params;

    const forcing =
      scale * phiD * Math.exp(-lambda * state.t) * Math.cos(156 * Math.PI * state.t);

    const ddpsi = forcing - omega0 ** 2 * state.psi;

    return {
      t: state.t + dt,
      psi: state.psi + state.dpsi * dt,
      dpsi: state.dpsi + ddpsi * dt,
      ddpsi
    };
  }
}

export class DartrixMeasureChat {
  constructor(
    private helix: HelixEngine,
    private atlas: AtlasMatrix
  ) {}

  query(text: string, state: HelixState): { reply: string; nextState: HelixState } {
    const next = this.helix.step(state, 0.01);
    const clinical = this.atlas.resolve(text);

    return {
      reply: this.generateReply(text, next, clinical),
      nextState: next
    };
  }

  private generateReply(text: string, helix: HelixState, clinical: string): string {
    return `AGENT LEON:
• helix.psi    = ${helix.psi.toFixed(4)}
• helix.dpsi   = ${helix.dpsi.toFixed(4)}
• helix.ddpsi  = ${helix.ddpsi.toFixed(4)}

Interpretacja kliniczna:
${clinical}`;
  }
}

// DARTRIX-MEASURE-CHAT v1.0 — ATLAS MATRIX
// Vertebral Artery V1-V4 + Dermatomes C2-S5

import { AtlasMatrix, VertebralSegment, DermatomeMap } from './types';

const VERTEBRAL_SEGMENTS: VertebralSegment[] = [
  { id: 'V1', branchType: 'muscular' },
  { id: 'V2', branchType: 'spinal' },
  { id: 'V3', branchType: 'meningeal' },
  { id: 'V4', branchType: 'intracranial' }
];

const DERMATOMES: DermatomeMap[] = [
  { level: 'C2', region: 'occiput' },
  { level: 'C5', region: 'lateral arm' },
  { level: 'C6', region: 'thumb and lateral forearm' },
  { level: 'C7', region: 'middle finger' },
  { level: 'C8', region: 'little finger and medial forearm' },
  { level: 'T4', region: 'nipple line' },
  { level: 'T10', region: 'umbilicus' },
  { level: 'L4', region: 'medial leg and foot' },
  { level: 'L5', region: 'dorsum of foot and big toe' },
  { level: 'S1', region: 'lateral foot and heel' },
  { level: 'S3', region: 'perineum' }
];

export class VertebralAtlas implements AtlasMatrix {
  resolve(query: string): string {
    const q = query.toLowerCase();

    if (q.includes('vertebral') || q.includes('kręgowa')) {
      return VERTEBRAL_SEGMENTS.map(
        s => `Segment ${s.id}: gałąź ${s.branchType}`
      ).join('\n');
    }

    if (q.includes('dermatom') || q.includes('ból')) {
      return DERMATOMES.map(
        d => `${d.level}: ${d.region}`
      ).join('\n');
    }

    return 'Brak dopasowania w atlasie. Doprecyzuj zapytanie (vertebral artery / dermatom / segment).';
  }
}

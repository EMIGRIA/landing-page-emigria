/* ─── Crime Index data per negara tujuan PMI (source: OCIndex / Numbeo 2025) ─── */

export interface CrimeEntry {
  labels: string[];
  values: number[];
  level: string;
  globalRank: number;
  variation: number;
}

export const crimeData: Record<string, CrimeEntry> = {
  'Malaysia': {
    labels: ['2021', '2023', '2025'],
    values: [5.94, 6.23, 6.53],
    level: 'medium', globalRank: 35, variation: 0.30,
  },
  'Arab Saudi': {
    labels: ['2021', '2023', '2025'],
    values: [6.01, 6.23, 6.33],
    level: 'medium', globalRank: 43, variation: 0.10,
  },
  'Uni Emirat Arab': {
    labels: ['2021', '2023', '2025'],
    values: [5.75, 6.37, 6.35],
    level: 'medium', globalRank: 42, variation: -0.02,
  },
  'Singapura': {
    labels: ['2021', '2023', '2025'],
    values: [3.13, 3.47, 3.72],
    level: 'medium', globalRank: 163, variation: 0.25,
  },
  'Taiwan': {
    labels: ['2021', '2023', '2025'],
    values: [1.72, 1.72, 1.71],
    level: 'low', globalRank: 144, variation: -0.01,
  },
  'Jepang': {
    labels: ['2021', '2023', '2025'],
    values: [4.53, 4.28, 4.25],
    level: 'medium', globalRank: 141, variation: -0.03,
  },
  'Korea Selatan': {
    labels: ['2021', '2023', '2025'],
    values: [4.91, 4.43, 4.42],
    level: 'medium', globalRank: 134, variation: -0.01,
  },
  'Hong Kong': {
    labels: ['2021', '2023', '2025'],
    values: [3.13, 3.47, 3.72],
    level: 'medium', globalRank: 163, variation: 0.25,
  },
};

export const provinces = Object.keys(crimeData);

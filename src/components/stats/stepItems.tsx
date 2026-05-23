export interface StepItem {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

export const steps: StepItem[] = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-brand-green)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="17 8 12 3 7 8" />
        <line x1="12" y1="3" x2="12" y2="15" />
      </svg>
    ),
    title: 'Upload brosur',
    desc: 'Unggah gambar dari WhatsApp atau tempel URL loker. Mendukung format JPG, PNG, JPEG, link web dan Teks mentah lewat Clipboard',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-brand-green)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M2 12h3M19 12h3M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12" />
      </svg>
    ),
    title: 'AI analisis otomatis',
    desc: 'Gemini 2.5 Flash dan model MLP TensorFlow memproses semua data dalam hitungan detik tanpa aksi manual.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-brand-green)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="9" y1="13" x2="15" y2="13" />
        <line x1="9" y1="17" x2="13" y2="17" />
      </svg>
    ),
    title: 'Terima laporan',
    desc: 'Dapatkan skor risiko, validasi BP2MI, analisis geografis, dan narasi aksi untuk dibagikan ke keluarga.',
  },
];

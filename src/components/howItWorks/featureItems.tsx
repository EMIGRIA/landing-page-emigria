export interface FeatureItem {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

export const features: FeatureItem[] = [
  {
    // "Free transfers" position — transfer / scan arrows icon
    icon: (
      <svg width="40" height="40" viewBox="0 0 48 48" fill="none" stroke="var(--color-cta)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {/* rounded rectangle */}
        <rect x="6" y="9" width="36" height="30" rx="4" />
        {/* top-right curved arrow going right */}
        <path d="M16 18 L34 18" />
        <polyline points="30,14 34,18 30,22" />
        {/* bottom-left curved arrow going left */}
        <path d="M32 30 L14 30" />
        <polyline points="18,26 14,30 18,34" />
      </svg>
    ),
    title: 'Ekstraksi Cerdas',
    desc: 'Gemini AI membaca brosur loker dari gambar WhatsApp, screenshot, atau URL dan mengekstrak semua informasi penting secara otomatis.',
  },
  {
    // "Multiple account" position — AI/neural network icon
    icon: (
      <svg width="40" height="40" viewBox="0 0 48 48" fill="none" stroke="var(--color-cta)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {/* center node */}
        <circle cx="24" cy="24" r="4" />
        {/* outer nodes */}
        <circle cx="10" cy="14" r="3" />
        <circle cx="38" cy="14" r="3" />
        <circle cx="10" cy="34" r="3" />
        <circle cx="38" cy="34" r="3" />
        {/* connections */}
        <line x1="13" y1="15.5" x2="20.5" y2="21" />
        <line x1="35" y1="15.5" x2="27.5" y2="21" />
        <line x1="13" y1="32.5" x2="20.5" y2="27" />
        <line x1="35" y1="32.5" x2="27.5" y2="27" />
        {/* cross connections */}
        <line x1="13" y1="14" x2="35" y2="14" strokeOpacity="0.3" />
        <line x1="13" y1="34" x2="35" y2="34" strokeOpacity="0.3" />
      </svg>
    ),
    title: 'Deteksi Anomali AI',
    desc: 'Model MLP TensorFlow menganalisis 127 fitur data untuk mendeteksi pola penipuan dengan akurasi 94% berdasarkan 20.000+ kasus nyata.',
  },
  {
    // "Unmatched security" position — shield with center divider
    icon: (
      <svg width="40" height="40" viewBox="0 0 48 48" fill="none" stroke="var(--color-cta)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {/* shield outline */}
        <path d="M24 6 L40 12 V24 C40 33 33 40 24 42 C15 40 8 33 8 24 V12 Z" fill="rgba(var(--color-brand-green-rgb), 0.08)" />
        {/* center divider — the half-fill effect */}
        <line x1="24" y1="6" x2="24" y2="42" />
      </svg>
    ),
    title: 'Privasi Terjamin',
    desc: 'Tidak ada data pribadi tersimpan. Semua analisis diproses secara anonim. Tidak perlu daftar atau login untuk menggunakan layanan.',
  },
];

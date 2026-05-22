export interface FaqItem {
  q: string;
  a: string;
}

export const faqs: FaqItem[] = [
  {
    q: 'Apakah Emigria benar-benar gratis dan tanpa daftar?',
    a: 'Ya, sepenuhnya gratis dan tanpa registrasi. Tidak perlu membuat akun, tidak perlu login, dan tidak ada biaya tersembunyi. Cukup unggah brosur loker dan sistem langsung menganalisis secara anonim.',
  },
  {
    q: 'Seberapa akurat deteksi penipuannya?',
    a: 'Model kami mencapai akurasi 94% dengan F1-score 0,91 pada test set berisi 3.200+ kasus nyata. Model dilatih dengan Custom Focal Loss untuk menangani ketidakseimbangan data antara kasus penipuan dan kasus legit.',
  },
  {
    q: 'Apakah data brosur yang saya unggah disimpan?',
    a: 'Tidak. Gambar dan URL yang Anda kirimkan diproses di memori sementara dan tidak tersimpan di server kami. Hanya log anonim tanpa identifier pribadi yang disimpan untuk audit keamanan sistem.',
  },
  {
    q: 'Format apa saja yang bisa dianalisis?',
    a: 'Emigria mendukung gambar JPG/PNG dari screenshot WhatsApp atau media sosial, file PDF brosur lowongan, serta URL langsung ke halaman loker. Ukuran maksimum 10MB per file.',
  },
  {
    q: 'Apa yang dimaksud dengan validasi BP2MI?',
    a: 'BP2MI memiliki database resmi agen penempatan, perusahaan mitra, dan standar gaji per sektor. Emigria melakukan cross-check otomatis antara data hasil ekstraksi brosur dengan database tersebut.',
  },
  {
    q: 'Bagaimana cara membagikan hasil deteksi ke keluarga?',
    a: 'Setelah analisis selesai, tersedia tombol Bagikan ke WhatsApp yang menggunakan Web Share API. Sistem akan otomatis menyusun ringkasan peringatan dalam Bahasa Indonesia yang mudah dipahami.',
  },
];

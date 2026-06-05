# Emigria — Landing Page

Landing page resmi Emigria, platform deteksi penipuan lowongan kerja luar negeri berbasis AI untuk Pekerja Migran Indonesia (PMI).

<a href="https://landing-page-emigria.vercel.app/">
  <img src="https://img.shields.io/badge/Live-Aplikasi-Emigria4CAF50?style=for-the-badge" alt="Live Demo"/>
</a>
---

## Tentang Halaman Ini

Halaman ini berfungsi sebagai pintu masuk utama platform Emigria. Memuat statistik penipuan loker nyata, penjelasan sistem AI, gambaran fitur utama, dan FAQ — semua dirancang untuk membangun kepercayaan pengguna sebelum menggunakan fitur pemindaian.

---

## Fitur yang Ditampilkan

- **Fraud Score** — Deteksi indikasi penipuan berbasis model MLP TensorFlow dengan skor risiko Low/High
- **Reality Check** — Perbandingan gaji yang ditawarkan vs standar gaji riil negara tujuan
- **Geographic Risk Analyzer** — Informasi crime index, peringkat kriminalitas regional/global, dan tren tahunan negara tujuan
- **Integrasi BP2MI** — Validasi lowongan langsung dengan data resmi BP2MI
- **Native Share** — Bagikan hasil analisis langsung ke WhatsApp dalam satu klik
- **Dashboard Analitik Publik** — Statistik scan anonim secara real-time

---

## Mode Input

Pengguna dapat melakukan pemindaian melalui tiga cara:
- Upload foto brosur (JPG, PNG, JPEG)
- Copy-paste teks mentah dari chat atau postingan
- Tempel URL iklan dari media sosial atau website

---

## Tech Stack

- **Framework**: Vite + React
- **Deployment**: Vercel
- **AI Integration**: Gemini API 3.1 Flash Lite + Model MLP TensorFlow (via FastAPI)

---

## Tim

CC26-PSU306 — DBS Foundation Coding Camp 2026

/*
  Emigria "MISI KAMI" — Premium 3-Card Layout matching provided reference exactly:
    - Background: var(--color-canvas)
    - Eyebrow: MISI KAMI
    - Heading: Kami membantu melindungi PMI setiap hari
    - Subheading: Teknologi AI terdepan untuk setiap orang yang ingin bekerja dengan aman di luar negeri.
    - Three Cards:
        1. Pinkish Peach (#faf2ee): Loker Palsu & Bodong (The Problem in Indonesia)
        2. Soft Teal (#edf7f5): Pemindaian AI Cerdas (The AI Solution)
        3. Soft Purple (#f3eefc): Perjalanan Kerja Legal (The Verified Impact)
    - Each card includes high-fidelity HTML/CSS mockups, category pills, title, description, and interactive links.
*/

interface CardProps {
  bg: string;
  badgeBg: string;
  badgeColor: string;
  badgeText: string;
  title: string;
  desc: string;
  linkText: string;
  linkUrl: string;
  mockup: React.ReactNode;
}

function MissionCard({ bg, badgeBg, badgeColor, badgeText, title, desc, linkText, linkUrl, mockup }: CardProps) {
  return (
    <div
      style={{
        background: bg,
        borderRadius: 24,
        padding: '36px 36px 32px',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        border: '1px solid rgba(0, 0, 0, 0.03)',
      }}
      className="misi-card"
    >
      {/* Mockup Container at top */}
      <div
        style={{
          width: '100%',
          minHeight: 150,
          background: 'rgba(255, 255, 255, 0.4)',
          backdropFilter: 'blur(8px)',
          borderRadius: 16,
          padding: 16,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 24,
          border: '1px solid rgba(255, 255, 255, 0.5)',
        }}
        className="misi-mockup-wrapper"
      >
        {mockup}
      </div>

      {/* Pill Badge */}
      <div style={{ display: 'flex', marginBottom: 16 }}>
        <span
          style={{
            background: badgeBg,
            color: badgeColor,
            padding: '6px 14px',
            borderRadius: 99,
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: 0.3,
            textTransform: 'uppercase',
          }}
        >
          {badgeText}
        </span>
      </div>

      {/* Title */}
      <h3
        style={{
          fontSize: 20,
          fontWeight: 800,
          color: 'var(--color-ink)',
          marginBottom: 12,
          letterSpacing: -0.5,
          lineHeight: 1.25,
        }}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        style={{
          fontSize: 14,
          color: 'var(--color-steel)',
          lineHeight: 1.6,
          marginBottom: 24,
          margin: 0,
        }}
      >
        {desc}
      </p>

      {/* Divider */}
      <div
        style={{
          borderBottom: '1px dashed var(--color-hairline-strong)',
          opacity: 0.5,
          marginTop: 'auto',
          marginBottom: 20,
        }}
      />

      {/* Interactive Link */}
      <a
        href={linkUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          textDecoration: 'none',
          color: 'var(--color-ink)',
          fontWeight: 700,
          fontSize: 14,
          transition: 'color 0.2s ease',
        }}
        className="misi-card-link"
      >
        <span>{linkText}</span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="misi-arrow-icon"
          style={{ transition: 'transform 0.25s cubic-bezier(0.4, 0, 0.2, 1)' }}
        >
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </a>
    </div>
  );
}

export default function CTASection() {
  return (
    <section
      id="pelajari"
      style={{
        background: 'var(--color-canvas)',
        padding: '100px 0 90px',
        borderTop: '1px solid var(--color-hairline)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background glow accents */}
      <div
        style={{
          position: 'absolute',
          top: '10%',
          right: '-5%',
          width: 400,
          height: 400,
          background: 'radial-gradient(circle, rgba(0, 237, 100, 0.03) 0%, transparent 70%)',
          filter: 'blur(60px)',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: 680, margin: '0 auto 56px' }}>
          <div className="eyebrow" style={{ marginBottom: 16, color: 'var(--color-brand-green-dark)' }}>
            MISI KAMI
          </div>
          <h2 className="section-heading" style={{ marginBottom: 20 }}>
            Kami membantu melindungi PMI setiap hari
          </h2>
          <p
            style={{
              fontSize: 16,
              color: 'var(--color-steel)',
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            Teknologi AI terdepan untuk setiap orang yang ingin bekerja dengan
            aman di luar negeri.
          </p>
        </div>

        {/* 3-Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 24,
          }}
          className="misi-cards-grid"
        >
          {/* Card 1: Loker Palsu & Bodong (The Problem - Forest Green Variation) */}
          <MissionCard
            bg="#f0f7f3"
            badgeBg="rgba(0, 104, 74, 0.08)"
            badgeColor="#00684a"
            badgeText="Darurat Penipuan"
            title="Loker Palsu & Bodong"
            desc="Banyak calon PMI tertipu loker luar negeri bodong bergaji fantastis. Emigria memutus eksploitasi ini secara instan: tanpa login, cukup unggah brosur, tempel teks, atau tautkan URL untuk analisis cepat."
            linkText="Lihat Dampak Sosial"
            linkUrl="https://kominfo.kuburaya.go.id/modus-penipuan-lewat-lowongan-kerja-tanpa-modal-waspada-agar-tidak-tertipu"
            mockup={
              <div
                style={{
                  background: '#fff',
                  borderRadius: 16,
                  padding: 8,
                  border: '1px solid rgba(0, 104, 74, 0.15)',
                  boxShadow: '0 8px 24px rgba(0, 104, 74, 0.04)',
                  width: '100%',
                  height: 116,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                {/* Tabs Bar */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr 1fr',
                  gap: 4,
                  background: 'rgba(0, 104, 74, 0.04)',
                  padding: 2,
                  borderRadius: 8,
                  border: '1px solid rgba(0, 104, 74, 0.06)',
                }}>
                  {/* Tab 1 Active */}
                  <div style={{
                    background: '#fff',
                    color: '#00684a',
                    fontSize: 8,
                    fontWeight: 700,
                    padding: '3px 2px',
                    borderRadius: 6,
                    textAlign: 'center',
                    border: '1px solid rgba(0, 104, 74, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 3,
                  }}>
                    <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <polyline points="21 15 16 10 5 21" />
                    </svg>
                    Brosur
                  </div>

                  {/* Tab 2 Inactive */}
                  <div style={{
                    color: 'var(--color-stone)',
                    fontSize: 8,
                    fontWeight: 600,
                    padding: '3px 2px',
                    textAlign: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 3,
                  }}>
                    <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                    </svg>
                    Teks
                  </div>

                  {/* Tab 3 Inactive */}
                  <div style={{
                    color: 'var(--color-stone)',
                    fontSize: 8,
                    fontWeight: 600,
                    padding: '3px 2px',
                    textAlign: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 3,
                  }}>
                    <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                    </svg>
                    URL
                  </div>
                </div>

                {/* Dropzone Area */}
                <div style={{
                  border: '1px dashed rgba(0, 104, 74, 0.25)',
                  background: 'rgba(0, 104, 74, 0.01)',
                  borderRadius: 10,
                  padding: '6px 8px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 2,
                }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#00684a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21.2 15c.7-1.2 1-2.5.7-3.9-.3-2-1.9-3.6-3.9-3.9C16.9 3.5 13 1 9 2.2 5.8 3.2 3.4 6 3 9.2c-.3 2.1.4 4.1 1.8 5.6" />
                    <polyline points="16 16 12 12 8 16" />
                  </svg>
                  <span style={{ fontSize: 8, fontWeight: 700, color: 'var(--color-ink)', textAlign: 'center', lineHeight: 1.1 }}>
                    Seret & lepas brosur lowongan
                  </span>
                  <span style={{ fontSize: 6.5, color: 'var(--color-steel)', textAlign: 'center', lineHeight: 1 }}>
                    atau klik untuk memilih dari galeri
                  </span>
                </div>

                {/* Submit Button */}
                <div style={{
                  background: '#00684a',
                  color: '#fff',
                  fontSize: 8.5,
                  fontWeight: 700,
                  padding: '5px 8px',
                  borderRadius: 8,
                  textAlign: 'center',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 4,
                  boxShadow: '0 2px 6px rgba(0, 104, 74, 0.1)',
                }}>
                  Analisis Sekarang
                  <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>
              </div>
            }
          />

          {/* Card 2: Pemindaian AI Cerdas (The AI Solution - Mint/Leaf Green Variation) */}
          <MissionCard
            bg="#e6f9ed"
            badgeBg="rgba(0, 237, 100, 0.12)"
            badgeColor="#00a35c"
            badgeText="Kecerdasan Buatan"
            title="Pemindaian Brosur Cerdas"
            desc="Ditenagai TensorFlow Deep Learning dengan arsitektur MLP, AI Emigria memindai kontrak, visa, dan brosur lowongan dalam 5 detik untuk mendeteksi indikasi penipuan secara cepat dan akurat."
            linkText="Pelajari Sistem Model"
            linkUrl="https://medium.com/@abhaysingh71711/multi-layer-perceptron-mlp-explained-a-beginners-guide-f9b2affff8c1"
            mockup={
              <div
                style={{
                  background: '#fff',
                  borderRadius: 16,
                  padding: 8,
                  border: '1px solid rgba(0, 237, 100, 0.15)',
                  boxShadow: '0 8px 24px rgba(0, 237, 100, 0.04)',
                  width: '100%',
                  height: 116,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                {/* Mockup Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: 9, fontWeight: 700, color: '#00a35c', background: 'rgba(0,237,100,0.1)', padding: '2px 8px', borderRadius: 4 }}>EMIGRIA SCANNER</span>
                  <span style={{ fontSize: 9, fontWeight: 700, color: 'var(--color-brand-green-mid)', display: 'flex', alignItems: 'center', gap: 3 }}>
                    <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--color-brand-green-mid)', display: 'inline-block' }} className="scanning-pulse" />
                    Analisis Selesai
                  </span>
                </div>

                {/* Risk Score Area */}
                <div style={{
                  border: '1px solid rgba(0, 237, 100, 0.08)',
                  background: 'rgba(0, 237, 100, 0.01)',
                  borderRadius: 10,
                  padding: '6px 8px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 4,
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: 9, color: 'var(--color-ink)', fontWeight: 700 }}>
                    <span>Probabilitas Loker Bodong</span>
                    <span style={{ color: '#00684a', fontWeight: 800 }}>87%</span>
                  </div>
                  <div style={{ height: 5, background: 'var(--color-hairline)', borderRadius: 3, overflow: 'hidden' }}>
                    <div style={{ width: '87%', height: '100%', background: 'linear-gradient(90deg, var(--color-brand-green-mid), var(--color-brand-green-dark))', borderRadius: 3 }} />
                  </div>
                </div>

                {/* High/Low Risk Status Pill */}
                <div style={{
                  background: 'rgba(0, 104, 74, 0.05)',
                  border: '1px dashed #00684a',
                  borderRadius: 8,
                  padding: '6px 10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 4,
                  fontSize: 9,
                  fontWeight: 700,
                  color: '#00684a',
                }}>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                    <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                  TERINDIKASI HIGH RISK (BAHAYA)
                </div>
              </div>
            }
          />

          {/* Card 3: Perjalanan Kerja Legal (The Verified Impact - Finpay Teal Green Variation) */}
          <MissionCard
            bg="#eef7f6"
            badgeBg="rgba(13, 122, 110, 0.08)"
            badgeColor="var(--color-cta)"
            badgeText="Terverifikasi BP2MI"
            title="Perjalanan Kerja Legal"
            desc="Menghubungkan loker langsung dengan data resmi SISKOP2MI dan integrasi Crime Index negara tujuan. Memastikan perjalanan kerja Anda legal, minim risiko, serta terlindungi hingga ke tujuan."
            linkText="Cek Situs Resmi"
            linkUrl="https://siskop2mi.bp2mi.go.id/lowongan/list"
            mockup={
              <div
                style={{
                  background: '#fff',
                  borderRadius: 16,
                  padding: 8,
                  border: '1px solid rgba(13, 122, 110, 0.15)',
                  boxShadow: '0 8px 24px rgba(13, 122, 110, 0.04)',
                  width: '100%',
                  height: 116,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                {/* Mockup Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: 9, fontWeight: 700, color: 'var(--color-cta)', background: 'rgba(13,122,110,0.1)', padding: '2px 8px', borderRadius: 4 }}>ID JOB: BP2MI-894</span>
                  <span style={{ fontSize: 9, fontWeight: 700, color: 'var(--color-brand-green-mid)', display: 'flex', alignItems: 'center', gap: 3 }}>
                    <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--color-brand-green)', display: 'inline-block' }} />
                    Valid
                  </span>
                </div>

                {/* Middle Area (Job Title) */}
                <div style={{ fontSize: 13, fontWeight: 800, color: 'var(--color-ink)', textAlign: 'left', padding: '0 4px', lineHeight: 1.2 }}>
                  PT. Bina Jasa Indonesia
                </div>

                {/* Bottom Status Pill */}
                <div style={{
                  background: 'rgba(0, 237, 100, 0.05)',
                  border: '1px dashed var(--color-brand-green-mid)',
                  borderRadius: 8,
                  padding: '6px 10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 4,
                  fontSize: 9,
                  fontWeight: 700,
                  color: 'var(--color-brand-green-dark)',
                }}>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" style={{ flexShrink: 0 }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  TERDATA RESMI SISKOP2MI BP2MI
                </div>
              </div>
            }
          />
        </div>
      </div>

      <style>{`
        /* Hover micro-animations on cards */
        .misi-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 36px rgba(0, 30, 43, 0.06) !important;
          border-color: rgba(0, 0, 0, 0.06) !important;
        }

        .misi-card:hover .misi-mockup-wrapper {
          background: rgba(255, 255, 255, 0.8) !important;
          border-color: rgba(255, 255, 255, 0.9) !important;
        }

        .misi-card-link:hover {
          color: var(--color-cta) !important;
        }

        .misi-card:hover .misi-arrow-icon {
          transform: translateX(4px);
        }

        .scanning-pulse {
          animation: scanningPulse 1.5s ease-in-out infinite;
        }

        @keyframes scanningPulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }

        @media (max-width: 991px) {
          .misi-cards-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 20px !important;
          }
        }

        @media (max-width: 767px) {
          .misi-cards-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
          .misi-card {
            padding: 28px 24px 24px !important;
          }
        }
      `}</style>
    </section>
  );
}


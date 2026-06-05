import { JOB_CHECKER_URL } from '../constants';

/*
  Emigria Hero — split side-by-side layout matching reference mockup exactly:
    - Left column: Pill badge, Headline, Description, Pill CTA button, 3 Checklist Rows
    - Right column: Main dummy image + two bottom stats cards (Option A)
*/

export default function Hero() {
  return (
    <section
      id="hero"
      className="hero-section"
      style={{
        background: 'var(--color-canvas)',
        minHeight: 'calc(100vh - 84px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        padding: '24px 0 16px',
      }}
    >
      {/* Decorative ambient background glows */}
      <div style={{
        position: 'absolute',
        top: '15%',
        left: '5%',
        width: 350,
        height: 350,
        background: 'radial-gradient(circle, rgba(var(--color-brand-green-rgb), 0.08) 0%, transparent 70%)',
        filter: 'blur(60px)',
        zIndex: 0,
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '10%',
        right: '5%',
        width: 400,
        height: 400,
        background: 'radial-gradient(circle, rgba(var(--color-brand-green-rgb), 0.05) 0%, transparent 70%)',
        filter: 'blur(70px)',
        zIndex: 0,
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.3fr 1fr',
          gap: 48,
          alignItems: 'center',
          width: '100%',
        }} className="hero-split-grid">

          {/* Left Column: Text Content & Checklist */}
          <div style={{
            textAlign: 'left',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            position: 'relative',
            zIndex: 1,
          }} className="hero-text-col">

            {/* Top pill/badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: 'rgba(var(--color-brand-green-rgb), 0.08)',
              border: '1px solid rgba(var(--color-brand-green-rgb), 0.18)',
              borderRadius: 'var(--rounded-full)',
              padding: '8px 16px',
              fontSize: 12,
              fontWeight: 700,
              color: 'var(--color-brand-green-dark)',
              marginBottom: 24,
              letterSpacing: 0.3,
            }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--color-brand-green-dark)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>Proteksi AI & SISKOP2MI Terintegrasi</span>
            </div>

            {/* Heading */}
            <h1 style={{
              fontSize: 'clamp(32px, 3.8vw, 46px)',
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: -1.8,
              color: 'var(--color-ink)',
              marginBottom: 12,
            }}>
              <span className="hero-title-line">Verifikasi Loker Luar Negeri.</span><br />
              <span style={{ color: 'var(--color-brand-green-dark)' }}>Solusi Aman Bersama Emigria.</span>
            </h1>

            {/* Description */}
            <p style={{
              fontSize: 16,
              color: 'var(--color-steel)',
              lineHeight: 1.65,
              maxWidth: 480,
              marginBottom: 20,
            }}>
              Mendeteksi indikasi penipuan loker luar negeri secara otomatis dan akurat dalam hitungan detik.
            </p>

            {/* Checklist at the bottom of left column */}
            <div className="hero-checklist-container hide-on-mobile">
              {/* Checklist Row 1 */}
              <div className="hero-checklist-row">
                <div style={{
                  width: 22,
                  height: 22,
                  borderRadius: '50%',
                  background: 'rgba(var(--color-brand-green-rgb), 0.10)',
                  color: 'var(--color-brand-green-dark)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  marginTop: 2,
                }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span className="hero-checklist-text">
                  Model AI Mendeteksi Indikasi Kejahatan & Penipuan
                </span>
              </div>

              {/* Checklist Row 2 */}
              <div className="hero-checklist-row">
                <div style={{
                  width: 22,
                  height: 22,
                  borderRadius: '50%',
                  background: 'rgba(var(--color-brand-green-rgb), 0.08)',
                  color: 'var(--color-slate)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  marginTop: 2,
                }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span className="hero-checklist-text">
                  Sinkronisasi Data Loker dari Situs Resmi SISKOP2MI
                </span>
              </div>

              {/* Checklist Row 3 */}
              <div className="hero-checklist-row">
                <div style={{
                  width: 22,
                  height: 22,
                  borderRadius: '50%',
                  background: 'rgba(var(--color-brand-green-rgb), 0.12)',
                  color: 'var(--color-brand-green-dark)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  marginTop: 2,
                }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span className="hero-checklist-text">
                  Gratis dan Tanpa Login Untuk Pekerja Migran
                </span>
              </div>
            </div>

            {/* CTA Button */}
            <a href={JOB_CHECKER_URL} className="btn btn-dark hide-on-mobile" style={{
              padding: '12px 32px',
              fontSize: 15,
              fontWeight: 700,
              borderRadius: 'var(--rounded-full)',
              marginTop: 24,
              marginBottom: 0,
              background: 'var(--color-ink)',
              color: 'var(--color-canvas)',
              boxShadow: 'var(--shadow-2)',
            }}>
              Cek Loker Sekarang
            </a>

          </div>

          {/* Right Column: Visual dummy image + two bottom stats cards (Option A) */}
          <div style={{
            perspective: 1000,
            width: '100%',
          }}>
            {/* Top Main Visual Card (Dummy Photo Placeholder) */}
            <div style={{
              position: 'relative',
              width: '100%',
            }}>
              {/* 
                UPLOAD FOTO UTAMA ASLI ANDA DI SINI
                Anda bisa mengganti link URL di background-image di bawah dengan foto asli Anda nanti.
                Contoh: url("/path/to/your/image.jpg")
              */}
              <div style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '8px',
              }}>
                <img
                  src="/hero-v2-transparent.png"
                  alt="Emigria AI Scanner Illustration"
                  className="animate-float hero-dashboard-mockup"
                  style={{
                    width: '100%',
                    maxHeight: 380,
                    objectFit: 'contain',
                    transition: 'all 0.3s ease',
                  }}
                />
              </div>
            </div>

            {/* Mobile-only CTA Button (placed below image on mobile) */}
            <a href={JOB_CHECKER_URL} className="btn btn-dark show-on-mobile" style={{
              padding: '12px 32px',
              fontSize: 15,
              fontWeight: 700,
              borderRadius: 'var(--rounded-full)',
              marginTop: 24,
              marginBottom: 0,
              background: 'var(--color-ink)',
              color: 'var(--color-canvas)',
              boxShadow: 'var(--shadow-2)',
            }}>
              Cek Loker Sekarang
            </a>

            {/* Mobile-only Checklist (placed below CTA Button on mobile) */}
            <div className="hero-checklist-container show-on-mobile" style={{ marginTop: 24, marginBottom: 8 }}>
              {/* Checklist Row 1 */}
              <div className="hero-checklist-row">
                <div style={{
                  width: 22,
                  height: 22,
                  borderRadius: '50%',
                  background: 'rgba(var(--color-brand-green-rgb), 0.08)',
                  color: 'var(--color-brand-green-dark)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  marginTop: 2,
                }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span className="hero-checklist-text">
                  Model AI Mendeteksi Indikasi Kejahatan & Penipuan
                </span>
              </div>

              {/* Checklist Row 2 */}
              <div className="hero-checklist-row">
                <div style={{
                  width: 22,
                  height: 22,
                  borderRadius: '50%',
                  background: 'rgba(var(--color-brand-green-rgb), 0.08)',
                  color: 'var(--color-brand-green-mid)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  marginTop: 2,
                }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span className="hero-checklist-text">
                  Sinkronisasi Data Loker dari Situs Resmi SISKOP2MI
                </span>
              </div>

              {/* Checklist Row 3 */}
              <div className="hero-checklist-row">
                <div style={{
                  width: 22,
                  height: 22,
                  borderRadius: '50%',
                  background: 'rgba(var(--color-brand-green-rgb), 0.08)',
                  color: 'var(--color-cta)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  marginTop: 2,
                }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span className="hero-checklist-text">
                  Gratis dan Tanpa Login Untuk Pekerja Migran
                </span>
              </div>
            </div>

            {/* Two Bottom Stats Cards (Option A) */}
            <div className="hero-bottom-cards">

              {/* Left Stats Card */}
              <div className="hero-stat-card hero-stat-card-left">
                <div style={{ textAlign: 'left' }}>
                  <h4 style={{ fontSize: 13, fontWeight: 700, color: 'var(--color-ink)', marginBottom: 4 }}>Loker Terpindai</h4>
                  <p style={{ fontSize: 12, color: 'var(--color-steel)', margin: 0 }}>20.000+ Loker Terverifikasi</p>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: 12, textAlign: 'left' }} className="hero-stat-pill-row">
                  <div style={{
                    width: 36,
                    height: 36,
                    borderRadius: 10,
                    background: 'rgba(var(--color-brand-green-rgb), 0.10)',
                    color: 'var(--color-brand-green-dark)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  </div>
                  <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--color-ink)', lineHeight: 1.3 }}>
                    94% Akurasi
                  </div>
                </div>
              </div>

              {/* Right Stats Card (with circular progress bar) */}
              <div className="hero-stat-card hero-stat-card-right">
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10, flexGrow: 1, textAlign: 'left' }} className="hero-stat-info-col">
                  <h4 style={{ fontSize: 14, fontWeight: 700, color: 'var(--color-ink)', marginBottom: 2 }}>Situs Resmi</h4>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }} className="hero-db-status-bullets">
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--color-brand-green)', flexShrink: 0 }} />
                      <span style={{ fontSize: 12, color: 'var(--color-steel)' }}><strong>100%</strong> Sync SISKOP2MI</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--color-brand-green)', flexShrink: 0 }} />
                      <span style={{ fontSize: 12, color: 'var(--color-steel)' }}><strong>0%</strong> Delay Data</span>
                    </div>
                  </div>
                </div>

                {/* Circular Progress Bar SVG */}
                <div className="hero-progress-container">
                  <svg className="hero-progress-svg" viewBox="0 0 36 36">
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="var(--color-hairline-soft)"
                      strokeWidth="2.5"
                    />
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="var(--color-brand-green-mid)"
                      strokeWidth="2.5"
                      strokeDasharray="100, 100"
                    />
                  </svg>
                  <div style={{
                    position: 'absolute',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <span className="hero-progress-text" style={{ fontWeight: 800, color: 'var(--color-ink)', lineHeight: 1 }}>100%</span>
                    <span className="hero-progress-subtext" style={{ color: 'var(--color-steel)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: 0.3 }}>Sync</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      <style>{`
        /* --- Desktop & Base Styles --- */
        .hero-title-line {
          display: inline;
        }
        @media (min-width: 992px) {
          .hero-title-line {
            white-space: nowrap;
          }
        }

        .show-on-mobile {
          display: none !important;
        }
        .hide-on-mobile {
          display: flex !important;
        }
        button.hide-on-mobile {
          display: inline-flex !important;
        }

        .hero-checklist-container {
          display: flex;
          flex-direction: column;
          gap: 10px;
          width: 100%;
          border-top: 1px solid var(--color-hairline-soft);
          padding-top: 20px;
          margin-bottom: 24px;
        }

        .hero-checklist-row {
          display: flex;
          align-items: flex-start;
          gap: 14px;
        }

        .hero-checklist-text {
          font-size: 14px;
          font-weight: 600;
          color: var(--color-ink);
          line-height: 1.4;
          text-align: left;
        }

        .hero-dummy-photo {
          height: 340px;
          transition: all 0.3s ease;
        }

        .hero-photo-overlay {
          font-size: 13px;
          letter-spacing: 2px;
          margin: 16px;
        }

        .hero-bottom-cards {
          display: grid;
          grid-template-columns: 1fr 1.25fr;
          gap: 16px;
          margin-top: 16px;
          width: 100%;
        }

        .hero-stat-card {
          background: rgba(var(--color-brand-green-rgb), 0.055);
          border: 1px solid rgba(var(--color-brand-green-rgb), 0.12);
          border-radius: 24px;
          padding: 16px 20px;
          display: flex;
          box-shadow: 0 12px 28px rgba(0, 30, 43, 0.04);
          transition: all 0.3s ease;
        }

        [data-theme="dark"] .hero-stat-card {
          background: rgba(var(--color-brand-green-rgb), 0.08);
          border-color: rgba(var(--color-brand-green-rgb), 0.16);
          box-shadow: 0 12px 28px rgba(0, 0, 0, 0.22);
        }

        .hero-stat-card-left {
          flex-direction: column;
          justify-content: space-between;
          gap: 16px;
        }

        .hero-stat-card-right {
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }

        .hero-progress-container {
          position: relative;
          width: 80px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .hero-progress-svg {
          width: 80px;
          height: 80px;
          transform: rotate(-90deg);
        }

        .hero-progress-text {
          font-size: 13px;
        }

        .hero-progress-subtext {
          font-size: 8px;
        }

        /* --- Tablet Responsive Layout (max-width: 991px) --- */
        @media (max-width: 991px) {
          .show-on-mobile {
            display: flex !important;
          }
          button.show-on-mobile {
            display: inline-flex !important;
          }
          .hide-on-mobile,
          button.hide-on-mobile {
            display: none !important;
          }

          .hero-split-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
            text-align: center !important;
          }
          .hero-text-col {
            align-items: center !important;
            text-align: center !important;
          }
          .hero-text-col p {
            margin-left: auto !important;
            margin-right: auto !important;
          }
          
          /* Center the checklist row block but keep the rows left-aligned */
          .hero-checklist-container {
            max-width: 460px;
            margin: 0 auto;
          }
          .hero-checklist-row {
            text-align: left !important;
          }

          .hero-dummy-photo {
            height: 280px !important;
          }
          
          .hero-bottom-cards {
            grid-template-columns: 1fr 1fr !important; /* Keep side-by-side on tablet */
            gap: 16px !important;
          }
        }

        /* --- Mobile Responsive Layout (max-width: 580px) --- */
        @media (max-width: 580px) {
          .hero-dummy-photo {
            height: 220px !important;
          }
          
          .hero-photo-overlay {
            font-size: 10px !important;
            letter-spacing: 1px !important;
            margin: 12px !important;
          }

          .hero-bottom-cards {
            grid-template-columns: 1fr !important; /* Stack vertically on small mobile */
            gap: 12px !important;
            margin-top: 12px !important;
          }

          /* Clean card styles, no horizontal squishing */
          .hero-stat-card {
            padding: 14px 18px !important;
            border-radius: 18px !important;
            gap: 12px !important;
          }

          /* Left card remains vertical, eliminating narrow text wrap columns */
          .hero-stat-card-left {
            flex-direction: column !important;
            align-items: flex-start !important;
            justify-content: flex-start !important;
          }

          .hero-stat-pill-row {
            display: flex !important;
            flex-direction: row !important;
            align-items: center !important;
            gap: 10px !important;
            width: 100%;
            border-top: 1px solid var(--color-hairline-soft);
            padding-top: 10px;
          }

          /* Right card is horizontal split, with vertical bullet list */
          .hero-stat-card-right {
            flex-direction: row !important;
            align-items: center !important;
            justify-content: space-between !important;
          }

          .hero-stat-info-col {
            gap: 4px !important;
          }
          
          .hero-stat-info-col h4 {
            font-size: 13px !important;
          }

          .hero-db-status-bullets {
            display: flex !important;
            flex-direction: column !important; /* Stack vertically to fit narrow screens */
            align-items: flex-start !important;
            gap: 6px !important;
          }
          
          .hero-db-status-bullets div {
            gap: 6px !important;
          }

          .hero-stat-info-col span {
            font-size: 11px !important;
          }

          /* Compact circular progress on mobile */
          .hero-progress-container,
          .hero-progress-svg {
            width: 54px !important;
            height: 54px !important;
          }
          .hero-progress-text {
            font-size: 11px !important;
          }
          .hero-progress-subtext {
            font-size: 6px !important;
            letter-spacing: 0.1px !important;
          }
        }

      `}</style>
    </section>
  );
}

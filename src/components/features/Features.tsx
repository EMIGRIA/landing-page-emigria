import { CrimeIndexChart } from './CrimeIndexChart';

/* ─── Main section ─── */
export default function Features() {
  return (
    <section id="pelanggan" className="section-pad" style={{ background: 'var(--color-surface-soft)', padding: '80px 0' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <div className="eyebrow" style={{ marginBottom: 14 }}>MENGAPA EMIGRIA</div>
          <h2 className="section-heading">
            Mengapa PMI memilih<br />Emigria
          </h2>
        </div>

        {/* Bento — top row: 2 equal cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 16,
          marginBottom: 16,
          alignItems: 'stretch',
        }} className="bento-top">

          {/* Card 1 — Prediksi Model AI */}
          <div style={{
            background: 'var(--color-surface)',
            borderRadius: 20,
            padding: '36px 32px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            minHeight: 220,
            border: '1px solid var(--color-hairline)',
          }}>
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', color: 'var(--color-stone)', marginBottom: 12 }}>
                Prediksi Model
              </div>
              <div className="stat-value" style={{
                fontSize: 64,
                fontWeight: 800,
                color: 'var(--color-cta)',
                letterSpacing: -4,
                lineHeight: 1,
                marginBottom: 4,
              }}>
                94%
              </div>
              <div style={{ fontSize: 12, color: 'var(--color-stone)', marginBottom: 16 }}>
                Confidence score deteksi penipuan
              </div>
            </div>
            <div>
              {/* Fraud probability bar */}
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--color-ink)' }}>Probabilitas Penipuan</span>
                <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--color-cta)' }}>94%</span>
              </div>
              <div style={{ height: 6, background: 'rgba(13,122,110,0.15)', borderRadius: 99 }}>
                <div style={{ width: '94%', height: '100%', background: 'var(--color-cta)', borderRadius: 99 }} />
              </div>
              <div style={{ marginTop: 10, display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(13,122,110,0.12)', borderRadius: 99, padding: '4px 12px' }}>
                <div style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--color-cta)' }} />
                <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--color-cta)' }}>TERINDIKASI PENIPUAN</span>
              </div>
            </div>
          </div>

          {/* Card 2 — Reality Check */}
          <div style={{
            background: 'var(--color-surface)',
            borderRadius: 20,
            padding: '36px 32px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            minHeight: 220,
            border: '1px solid var(--color-hairline)',
          }}>
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', color: 'var(--color-stone)', marginBottom: 12 }}>
                Reality Check
              </div>
              <div className="feature-title" style={{
                fontWeight: 700,
                fontSize: 18,
                color: 'var(--color-ink)',
                lineHeight: 1.4,
                marginBottom: 20,
              }}>
                Perbandingan dengan<br />loker resmi SISKOP2MI
              </div>
            </div>

            {/* Comparison rows */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {[
                { label: 'Gaji sesuai standar', match: true },
                { label: 'Agen terdaftar SISKOP2MI', match: false },
                { label: 'Kontrak kerja valid', match: false },
              ].map(item => (
                <div key={item.label} style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  background: 'var(--color-surface-feature)',
                  borderRadius: 10,
                  padding: '9px 14px',
                  border: '1px solid var(--color-hairline-soft)',
                }}>
                  <span style={{ fontSize: 13, color: 'var(--color-ink)', fontWeight: 500 }}>{item.label}</span>
                  <div style={{
                    width: 20,
                    height: 20,
                    borderRadius: '50%',
                    background: item.match ? 'var(--color-cta)' : '#f87171',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    {item.match ? (
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    ) : (
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bento — bottom: Crime Index Chart */}
        <CrimeIndexChart />      </div>

      <style>{`
        @media (max-width: 900px) {
          .crime-chart-card {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
            padding: 28px 24px !important;
          }
        }
        @media (max-width: 640px) {
          .bento-top {
            grid-template-columns: 1fr !important;
            gap: 12px !important;
          }
          .bento-top > div {
            padding: 24px 20px !important;
            min-height: auto !important;
          }
          .bento-top .stat-value {
            font-size: 48px !important;
            letter-spacing: -2px !important;
          }
          .bento-top .feature-title {
            font-size: 16px !important;
          }
          .crime-chart-card {
            padding: 24px 20px !important;
          }
        }
      `}</style>
    </section>
  );
}

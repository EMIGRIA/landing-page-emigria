import { steps } from './stepItems';

/*
  Emigria "LANGKAH" — dark variant of the Filigran layout:
    - Dark teal section background
    - Centered eyebrow + heading + description framed in a dashed border
    - Below: row of 3 feature columns with icon, title, desc, link
*/

export default function Stats() {
  const dashBorder = '1px dashed rgba(255, 255, 255, 0.18)';
  const hairline = '1px solid rgba(255, 255, 255, 0.10)';

  return (
    <section
      id="harga"
      className="section-pad"
      style={{
        background: 'var(--color-brand-teal-deep)',
        padding: '80px 0',
      }}
    >
      <div className="container">
        {/* Header — centered, framed by a dashed border */}
        <div
          style={{
            border: dashBorder,
            borderRadius: 12,
            padding: '56px 32px',
            textAlign: 'center',
            marginBottom: 24,
          }}
        >
          <div
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: 1.2,
              textTransform: 'uppercase',
              color: 'var(--color-brand-green)',
              marginBottom: 14,
            }}
          >
            LANGKAH
          </div>
          <h2 className="section-heading-white" style={{ marginBottom: 16 }}>
            Lindungi diri dalam tiga langkah
          </h2>
          <p
            style={{
              fontSize: 15,
              color: 'rgba(255, 255, 255, 0.65)',
              lineHeight: 1.7,
              maxWidth: 720,
              margin: '0 auto',
            }}
          >
            Emigria menyederhanakan deteksi loker penipuan menjadi alur singkat — unggah,
            biarkan AI menganalisis, lalu terima laporan lengkap dalam hitungan detik.
            Tanpa daftar, tanpa biaya.
          </p>
        </div>

        {/* Feature columns */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 0,
            border: dashBorder,
            borderRadius: 12,
            padding: '40px 24px',
          }}
          className="steps-grid"
        >
          {steps.map((step, i) => (
            <div
              key={i}
              style={{
                padding: '0 24px',
                borderLeft: i > 0 ? hairline : 'none',
              }}
              className="step-cell"
            >
              {/* Icon in green-tinted circle */}
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: '50%',
                  background: 'rgba(0, 237, 100, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 20,
                }}
              >
                {step.icon}
              </div>

              <h3
                style={{
                  fontWeight: 700,
                  fontSize: 16,
                  color: '#fff',
                  marginBottom: 10,
                  lineHeight: 1.35,
                }}
              >
                {step.title}
              </h3>

              <p
                style={{
                  fontSize: 14,
                  color: 'rgba(255, 255, 255, 0.55)',
                  lineHeight: 1.65,
                  marginBottom: 18,
                }}
              >
                {step.desc}
              </p>

              <a
                href="#hero"
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: 'var(--color-brand-green)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                }}
              >
                Pelajari lebih
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .steps-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 24px !important;
            padding: 28px 20px !important;
          }
          .step-cell {
            border-left: none !important;
            padding: 0 !important;
          }
          .step-cell:nth-child(even) {
            border-left: 1px solid rgba(255,255,255,0.10) !important;
            padding-left: 20px !important;
          }
        }
        @media (max-width: 480px) {
          .steps-grid {
            grid-template-columns: 1fr !important;
            gap: 0 !important;
            padding: 24px 20px !important;
          }
          .step-cell {
            padding: 20px 0 !important;
            border-bottom: 1px solid rgba(255,255,255,0.08) !important;
          }
          .step-cell:last-child {
            border-bottom: none !important;
          }
          .step-cell:nth-child(even) {
            border-left: none !important;
            padding-left: 0 !important;
          }
        }
      `}</style>
    </section>
  );
}

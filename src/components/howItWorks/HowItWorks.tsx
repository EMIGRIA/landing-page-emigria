import { features } from './featureItems';

/*
  Emigria "PROTEKSI AI" — matches Finpay reference image exactly:
  - Outer white card on softly tinted background, soft shadow
  - LEFT: eyebrow + bold heading
  - RIGHT: descriptive paragraph
  - Below: 3 columns with simple line-icons (no bordered box), title, description
*/

export default function HowItWorks() {
  return (
    <section
      id="produk"
      className="section-pad"
      style={{
        background: 'var(--color-surface-soft)',
        padding: '80px 0',
      }}
    >
      <div className="container">
        {/* Outer rounded white card with soft shadow */}
        <div
          style={{
            background: 'var(--color-canvas)',
            borderRadius: 24,
            padding: '64px 64px 60px',
            boxShadow: '0 12px 40px rgba(0, 30, 43, 0.06), 0 2px 8px rgba(0, 30, 43, 0.04)',
          }}
          className="proteksi-card"
        >
          {/* Top: eyebrow + heading LEFT | description RIGHT */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1.3fr 1fr',
              gap: 80,
              marginBottom: 72,
              alignItems: 'start',
            }}
            className="proteksi-top-grid"
          >
            <div>
              <div className="eyebrow" style={{ marginBottom: 18 }}>PROTEKSI AI</div>
              <h2 className="section-heading">
                Perlindungan yang<br />
                tumbuh bersama<br />
                kebutuhan Anda.
              </h2>
            </div>
            <div style={{ paddingTop: 38 }} className="proteksi-desc">
              <p
                style={{
                  fontSize: 15,
                  color: 'var(--color-slate)',
                  lineHeight: 1.7,
                }}
              >
                Emigria menggunakan sistem AI dua lapis — Gemini 1.5 Flash untuk ekstraksi
                visual dan model deep learning custom — untuk mendeteksi penipuan yang sering
                terlewat oleh manusia, dalam hitungan detik.
              </p>
            </div>
          </div>

          {/* 3-column features (no bordered icon box, matches reference) */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 56,
            }}
            className="proteksi-3-grid"
          >
            {features.map((f, i) => (
              <div key={i}>
                <div style={{ marginBottom: 20 }}>{f.icon}</div>
                <h3
                  style={{
                    fontWeight: 700,
                    fontSize: 17,
                    color: 'var(--color-ink)',
                    marginBottom: 12,
                    letterSpacing: -0.2,
                  }}
                >
                  {f.title}
                </h3>
                <p style={{ fontSize: 14, color: 'var(--color-steel)', lineHeight: 1.65 }}>
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .proteksi-card { padding: 40px 32px !important; }
          .proteksi-top-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
            margin-bottom: 48px !important;
          }
          .proteksi-desc { padding-top: 0 !important; }
          .proteksi-3-grid {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
        }
      `}</style>
    </section>
  );
}

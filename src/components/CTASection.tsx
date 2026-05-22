/*
  Emigria "MISI KAMI" — simple, centered, clean.
  Heading + description above, 3 stats in a single row below.
*/

export default function CTASection() {
  const stats = [
    { value: '94%', label: 'Akurasi deteksi model' },
    { value: '47K+', label: 'Kasus loker per tahun' },
    { value: '<3 dtk', label: 'Rata-rata waktu analisis' },
  ];

  return (
    <section
      id="pelajari"
      style={{ background: 'var(--color-surface-soft)', padding: '100px 0 80px' }}
    >
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 48px' }}>
          <div className="eyebrow" style={{ marginBottom: 16 }}>
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
            }}
          >
            Teknologi AI terdepan untuk setiap orang yang ingin bekerja dengan
            aman di luar negeri.
          </p>
        </div>

        {/* Stats row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            borderTop: '1px solid var(--color-hairline)',
            borderBottom: '1px solid var(--color-hairline)',
          }}
          className="misi-stats"
        >
          {stats.map((s, i) => (
            <div
              key={s.value}
              style={{
                padding: '28px 24px',
                textAlign: 'center',
                borderRight:
                  i < stats.length - 1
                    ? '1px solid var(--color-hairline)'
                    : 'none',
              }}
              className="misi-stat-cell"
            >
              <div
                className="misi-stat-value"
                style={{
                  fontSize: 56,
                  fontWeight: 800,
                  color: 'var(--color-ink)',
                  letterSpacing: -2.5,
                  lineHeight: 1,
                  marginBottom: 12,
                }}
              >
                {s.value}
              </div>
              <div
                className="misi-stat-label"
                style={{
                  fontSize: 14,
                  color: 'var(--color-steel)',
                  lineHeight: 1.5,
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 760px) {
          .misi-stat-cell {
            padding: 20px 8px !important;
          }
          .misi-stat-value {
            font-size: 28px !important;
            letter-spacing: -1px !important;
            margin-bottom: 4px !important;
          }
          .misi-stat-label {
            font-size: 11px !important;
            line-height: 1.4 !important;
          }
        }
        @media (max-width: 420px) {
          .misi-stat-cell {
            padding: 16px 4px !important;
          }
          .misi-stat-value {
            font-size: 22px !important;
            letter-spacing: -0.5px !important;
          }
          .misi-stat-label {
            font-size: 10px !important;
          }
        }
      `}</style>
    </section>
  );
}

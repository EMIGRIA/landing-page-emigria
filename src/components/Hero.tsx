/*
  Emigria Hero — simple centered layout:
    - Social proof line
    - Big bold heading (2 lines, green accent)
    - Short description
    - Single dark CTA button
    - 3 simple step indicators (clean, no pills)
*/

export default function Hero() {
  const steps = ['Upload Brosur', 'AI Analisis', 'Hasil Deteksi'];

  return (
    <section
      id="hero"
      className="hero-section"
      style={{
        background: 'var(--color-canvas)',
        minHeight: 'calc(100vh - 64px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
      }}
    >
      <div className="container">
        <div style={{
          maxWidth: 720,
          margin: '0 auto',
          textAlign: 'center',
        }}>
          {/* Social proof */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            marginBottom: 20,
            fontSize: 14,
            color: 'var(--color-steel)',
          }}>
            <span style={{ color: 'var(--color-cta)', fontSize: 16 }}>★</span>
            <span>Melindungi <strong style={{ color: 'var(--color-ink)' }}>47K+</strong> PMI dari penipuan loker</span>
          </div>

          {/* Heading */}
          <h1 style={{
            fontSize: 'clamp(40px, 6vw, 72px)',
            fontWeight: 800,
            lineHeight: 1.08,
            letterSpacing: -2.5,
            color: 'var(--color-ink)',
            marginBottom: 16,
          }}>
            Cek Loker Aman.<br />
            <span style={{ color: 'var(--color-brand-green-dark)' }}>AI yang Melindungi.</span>
          </h1>

          {/* Description */}
          <p style={{
            fontSize: 16,
            color: 'var(--color-steel)',
            lineHeight: 1.7,
            maxWidth: 520,
            margin: '0 auto 28px',
            textAlign: 'center',
          }}>
            Emigria menganalisis brosur loker dengan AI, memvalidasi data BP2MI,
            dan mendeteksi risiko — tanpa daftar, gratis selamanya.
          </p>

          {/* CTA */}
          <button className="btn btn-dark" style={{
            padding: '14px 32px',
            fontSize: 15,
            fontWeight: 600,
            borderRadius: 'var(--rounded-full)',
            marginBottom: 40,
          }}>
            Cek Loker Sekarang
          </button>

          {/* 3 steps — clean horizontal with line connectors */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 0,
          }} className="hero-steps">
            {steps.map((s, i) => (
              <div key={s} style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{
                    width: 28,
                    height: 28,
                    borderRadius: '50%',
                    background: 'var(--color-brand-green-dark)',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 12,
                    fontWeight: 700,
                  }}>
                    {i + 1}
                  </div>
                  <span style={{
                    fontSize: 14,
                    fontWeight: 600,
                    color: 'var(--color-ink)',
                    whiteSpace: 'nowrap',
                  }}>
                    {s}
                  </span>
                </div>
                {i < steps.length - 1 && (
                  <div className="step-line" style={{
                    width: 40,
                    height: 1,
                    background: 'var(--color-hairline-strong)',
                    margin: '0 16px',
                  }} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-section {
            min-height: auto !important;
            align-items: flex-start !important;
            padding-top: 40px !important;
            padding-bottom: 40px !important;
          }
          .hero-steps > div > div:first-child {
            gap: 6px !important;
          }
          .hero-steps > div > div:first-child > div:first-child {
            width: 22px !important;
            height: 22px !important;
            font-size: 10px !important;
          }
          .hero-steps > div > div:first-child > span {
            font-size: 11px !important;
          }
          .hero-steps .step-line {
            width: 20px !important;
            margin: 0 8px !important;
          }
        }
      `}</style>
    </section>
  );
}

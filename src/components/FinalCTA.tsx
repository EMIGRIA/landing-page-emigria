import { JOB_CHECKER_URL } from '../constants';

/*
  Finpay "Ready to level up" CTA Banner
  → Emigria: dark rounded card + 2 buttons (teal filled + outline arrow)
*/

export default function FinalCTA() {
  return (
    <section style={{
      background: 'var(--color-surface-soft)',
      padding: '0 0 60px',
    }}>
      <div className="container">
        <div style={{
          background: 'var(--color-brand-teal-deep)',
          borderRadius: 20,
          padding: '52px 56px',
          display: 'grid',
          gridTemplateColumns: '1fr auto',
          gap: 48,
          alignItems: 'center',
        }} className="final-cta-grid">
          {/* Left: text */}
          <div>
            <div style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: 1.2,
              textTransform: 'uppercase',
              color: 'var(--color-cta)',
              marginBottom: 16,
            }}>
              COBA SEKARANG
            </div>
            <h2 style={{
              fontSize: 'clamp(28px, 3.5vw, 42px)',
              fontWeight: 800,
              color: '#fff',
              lineHeight: 1.12,
              letterSpacing: '-1.5px',
              marginBottom: 16,
            }}>
              Siap melindungi<br />
              perjalanan kerja Anda?
            </h2>
            <p style={{
              fontSize: 14,
              color: 'rgba(255,255,255,0.55)',
              lineHeight: 1.65,
              maxWidth: 380,
            }}>
              Emigria mendukung PMI dengan analisis brosur cerdas, validasi
              BP2MI, dan perlindungan risiko berbasis AI — tanpa daftar, gratis selamanya.
            </p>
          </div>

          {/* Right: buttons */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
            alignItems: 'flex-start',
            flexShrink: 0,
          }}>
            <a
              href={JOB_CHECKER_URL}
              className="btn btn-cta"
              style={{ fontSize: 14, padding: '13px 26px', whiteSpace: 'nowrap' }}
            >
              Cek Loker Sekarang
            </a>
            <a
              href="#produk"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                fontSize: 14,
                fontWeight: 600,
                color: '#fff',
                padding: '13px 26px',
                border: '1.5px solid rgba(255,255,255,0.2)',
                borderRadius: 'var(--rounded-full)',
                transition: 'all 0.2s ease',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.5)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.2)';
              }}
            >
              Pelajari Lebih
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 700px) {
          .final-cta-grid {
            grid-template-columns: 1fr !important;
            padding: 36px 28px !important;
          }
          .final-cta-grid > div:last-child {
            flex-direction: row !important;
            flex-wrap: wrap;
          }
        }
      `}</style>
    </section>
  );
}

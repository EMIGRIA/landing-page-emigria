/*
  Emigria Footer — Premium Dark Teal Flat Design matching mockup layout:
    - Background: var(--color-brand-teal-deep)
    - Top: Integrated Flat CTA (split left-right, double checks, pill button, no cards/boxes)
    - Middle: Logo + Horizontal Nav Links + Social Icons (WhatsApp, Instagram, Github)
    - Bottom: Copyright + Policy Links (Terms of Service, Privacy Policy)
*/

function SocialIcon({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        width: 36,
        height: 36,
        borderRadius: '50%',
        border: '1px solid rgba(255, 255, 255, 0.15)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'rgba(255, 255, 255, 0.75)',
        background: 'transparent',
        transition: 'all 0.2s ease',
      }}
      className="footer-social-icon"
    >
      {children}
    </a>
  );
}

export default function Footer() {
  const linkStyle = {
    fontSize: 14,
    fontWeight: 600,
    color: 'rgba(255, 255, 255, 0.65)',
    textDecoration: 'none',
    transition: 'color 0.2s ease',
  };

  return (
    <footer
      style={{
        background: 'var(--color-brand-teal-deep)',
        padding: '80px 0 0',
        color: '#fff',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle ambient glows for dark footer background */}
      <div style={{
        position: 'absolute',
        top: '-20%',
        left: '-10%',
        width: 350,
        height: 350,
        background: 'radial-gradient(circle, rgba(0, 237, 100, 0.08) 0%, transparent 70%)',
        filter: 'blur(50px)',
        zIndex: 0,
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-20%',
        right: '-10%',
        width: 350,
        height: 350,
        background: 'radial-gradient(circle, rgba(13, 122, 110, 0.08) 0%, transparent 70%)',
        filter: 'blur(50px)',
        zIndex: 0,
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Top CTA Banner — Flat, No Cards/Boxes */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.25fr 0.75fr',
          gap: 64,
          alignItems: 'center',
          marginBottom: 64,
          paddingBottom: 56,
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        }} className="footer-cta-banner">
          
          {/* Left column */}
          <div style={{ textAlign: 'left' }}>
            <h2 style={{
              fontSize: 'clamp(24px, 3.5vw, 36px)',
              fontWeight: 800,
              lineHeight: 1.15,
              color: '#fff',
              marginBottom: 20,
              letterSpacing: -1,
            }}>
              Wujudkan perjalanan kerja aman dan terlindungi,<br />
              <span style={{ color: 'var(--color-brand-green)' }}>dengan kecerdasan AI terpercaya.</span>
            </h2>
            
            <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{
                  width: 20,
                  height: 20,
                  borderRadius: '50%',
                  background: 'rgba(0, 237, 100, 0.15)',
                  color: 'var(--color-brand-green)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255, 255, 255, 0.85)' }}>100% Gratis selamanya</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{
                  width: 20,
                  height: 20,
                  borderRadius: '50%',
                  background: 'rgba(0, 237, 100, 0.15)',
                  color: 'var(--color-brand-green)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255, 255, 255, 0.85)' }}>Terintegrasi sistem SISKOP2MI</span>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div style={{ 
            textAlign: 'left', 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'flex-start', 
            gap: 24,
          }} className="footer-cta-right">
            <p style={{
              fontSize: 14,
              color: 'rgba(255, 255, 255, 0.65)',
              lineHeight: 1.6,
              margin: 0,
            }}>
              Dengan meningkatkan deteksi penipuan secara dini menggunakan kecerdasan buatan, Emigria membantu Pekerja Migran Indonesia melangkah dengan aman dan tenang.
            </p>
            <a 
              href="#hero"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '12px 26px',
                background: '#fff',
                color: 'var(--color-brand-teal-deep)',
                borderRadius: 'var(--rounded-full)',
                fontSize: 13,
                fontWeight: 700,
                textDecoration: 'none',
                transition: 'all 0.2s ease',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
              }}
              className="footer-cta-btn"
            >
              Mulai Cek Loker
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>

        </div>

        {/* Middle Bar: Logo, Nav, Socials */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingBottom: 24,
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          flexWrap: 'wrap',
          gap: 24,
        }} className="footer-mid-bar">
          
          {/* Logo */}
          <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
            <img 
              src="/logo emigria.png" 
              alt="Emigria Icon" 
              style={{ 
                height: 32, 
                width: 'auto', 
                objectFit: 'contain',
                display: 'block',
                borderRadius: 6
              }} 
            />
            <span style={{ fontWeight: 800, fontSize: 16, color: '#fff', letterSpacing: -0.3 }}>
              Emigria
            </span>
          </a>

          {/* Navigation Links */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 32,
          }} className="footer-links">
            <a href="#hero" style={linkStyle} className="footer-link-item">Beranda</a>
            <a href="#produk" style={linkStyle} className="footer-link-item">Cara Kerja</a>
            <a href="#pelanggan" style={linkStyle} className="footer-link-item">Fitur</a>
            <a href="#harga" style={linkStyle} className="footer-link-item">Langkah</a>
            <a href="#pelajari" style={linkStyle} className="footer-link-item">Misi Kami</a>
            <a href="#faq" style={linkStyle} className="footer-link-item">FAQ</a>
          </div>

          {/* Social Icons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <SocialIcon href="https://github.com/EMIGRIA">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            </SocialIcon>
          </div>

        </div>

        {/* Bottom Bar: Copyright and Terms */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '24px 0 32px',
          flexWrap: 'wrap',
          gap: 16,
        }} className="footer-bottom-bar">
          
          <span style={{ fontSize: 13, color: 'rgba(255, 255, 255, 0.5)' }}>
            © 2026 Emigria. Hak cipta dilindungi.
          </span>

          <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
            <a href="#" style={{ fontSize: 13, color: 'rgba(255, 255, 255, 0.5)', transition: 'color 0.15s ease', textDecoration: 'none' }} className="footer-policy-link">Terms of Service</a>
            <a href="#" style={{ fontSize: 13, color: 'rgba(255, 255, 255, 0.5)', transition: 'color 0.15s ease', textDecoration: 'none' }} className="footer-policy-link">Privacy Policy</a>
          </div>

        </div>

      </div>

      <style>{`
        .footer-social-icon {
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1) !important;
        }
        .footer-social-icon:hover {
          border-color: var(--color-brand-green) !important;
          color: var(--color-brand-green) !important;
          transform: translateY(-2px);
          background-color: rgba(255, 255, 255, 0.05) !important;
        }
        
        .footer-link-item {
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1) !important;
        }
        .footer-link-item:hover {
          color: var(--color-brand-green) !important;
        }

        .footer-policy-link:hover {
          color: var(--color-brand-green) !important;
        }

        .footer-cta-btn {
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1) !important;
        }
        .footer-cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0, 237, 100, 0.2) !important;
          background-color: var(--color-brand-green) !important;
          color: var(--color-brand-teal-deep) !important;
        }

        @media (max-width: 900px) {
          .footer-cta-banner {
            grid-template-columns: 1fr !important;
            gap: 28px !important;
            padding-bottom: 32px !important;
          }
          .footer-mid-bar {
            flex-direction: column !important;
            align-items: center !important;
            text-align: center !important;
          }
          .footer-links {
            flex-wrap: wrap !important;
            justify-content: center !important;
            gap: 20px !important;
          }
          .footer-bottom-bar {
            flex-direction: column-reverse !important;
            align-items: center !important;
            text-align: center !important;
          }
        }
      `}</style>
    </footer>
  );
}

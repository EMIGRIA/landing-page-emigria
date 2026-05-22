/*
  Emigria footer — dark teal variant (matches reference):
  - Logo + tagline + social icons LEFT
  - 3 link columns RIGHT
  - Hairline divider + copyright at the bottom
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
        border: '1px solid rgba(255, 255, 255, 0.18)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'rgba(255, 255, 255, 0.75)',
        background: 'transparent',
        transition: 'all 0.15s ease',
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--color-brand-green)';
        (e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-brand-green)';
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255, 255, 255, 0.18)';
        (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255, 255, 255, 0.75)';
      }}
    >
      {children}
    </a>
  );
}

export default function Footer() {
  const columns = [
    {
      title: 'Solusi',
      links: ['PMI Individu', 'Komunitas PMI', 'Agen Resmi', 'Keluarga PMI'],
    },
    {
      title: 'Perusahaan',
      links: ['Tentang Kami', 'Karir', 'Kontak', 'Kebijakan Privasi'],
    },
    {
      title: 'Pelajari',
      links: ['Blog', 'Panduan PMI', 'Data BP2MI', 'FAQ'],
    },
  ];

  const linkBase = {
    fontSize: 13,
    color: 'rgba(255, 255, 255, 0.65)',
    transition: 'color 0.15s ease',
    fontWeight: 400,
  } as const;

  return (
    <footer
      style={{
        background: 'var(--color-brand-teal-deep)',
        padding: '64px 0 0',
        color: '#fff',
      }}
    >
      <div className="container">
        {/* Main row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 2fr',
            gap: 64,
            paddingBottom: 48,
            alignItems: 'start',
          }}
          className="footer-main-grid"
        >
          {/* Left: brand + tagline + socials */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
              <div
                style={{
                  width: 34,
                  height: 34,
                  background: 'var(--color-cta)',
                  borderRadius: 8,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <span style={{ fontWeight: 800, fontSize: 18, color: '#fff' }}>Emigria</span>
            </div>
            <p
              style={{
                fontSize: 14,
                color: 'rgba(255, 255, 255, 0.6)',
                lineHeight: 1.65,
                marginBottom: 24,
                maxWidth: 280,
              }}
            >
              Deteksi penipuan loker luar negeri berbasis AI untuk melindungi
              perjalanan kerja Pekerja Migran Indonesia.
            </p>

            <div style={{ display: 'flex', gap: 10 }}>
              <SocialIcon href="#">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </SocialIcon>
              <SocialIcon href="#">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </SocialIcon>
              <SocialIcon href="#">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
              </SocialIcon>
              <SocialIcon href="#">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </SocialIcon>
            </div>
          </div>

          {/* Right: link columns */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 32,
            }}
            className="footer-cols-grid"
          >
            {columns.map(col => (
              <div key={col.title}>
                <div
                  style={{
                    fontSize: 14,
                    fontWeight: 700,
                    color: '#fff',
                    marginBottom: 18,
                  }}
                >
                  {col.title}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {col.links.map(link => (
                    <a
                      key={link}
                      href="#"
                      style={linkBase}
                      onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                      onMouseLeave={e =>
                        (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.65)')
                      }
                    >
                      {link}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Divider + copyright */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.10)',
            padding: '22px 0',
          }}
        >
          <span style={{ fontSize: 13, color: 'rgba(255, 255, 255, 0.55)' }}>
            © Emigria 2026. All Rights Reserved. · Capstone Project CC26-PSU306
          </span>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-main-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .footer-cols-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        @media (max-width: 560px) {
          .footer-cols-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </footer>
  );
}

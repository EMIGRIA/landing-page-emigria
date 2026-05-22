/*
  Emigria Navbar — floating pill style.
  Desktop: rounded pill with logo left, links center, dark toggle + CTA right.
  Mobile: logo left, dark toggle + burger right → sidebar overlay.
*/

import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
  }, [dark]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const links = [
    { label: 'Produk', href: '#produk' },
    { label: 'Pelanggan', href: '#pelanggan' },
    { label: 'Harga', href: '#harga' },
    { label: 'FAQ', href: '#faq' },
  ];

  const toggleBtn = (
    <button
      onClick={() => setDark(d => !d)}
      title={dark ? 'Light mode' : 'Dark mode'}
      style={{
        width: 32,
        height: 32,
        borderRadius: 'var(--rounded-full)',
        background: 'var(--color-surface-soft)',
        border: '1px solid var(--color-hairline)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        flexShrink: 0,
        transition: 'all 0.2s ease',
      }}
    >
      {dark ? (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-ink)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="5"/>
          <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
          <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
        </svg>
      ) : (
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--color-ink)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
        </svg>
      )}
    </button>
  );

  return (
    <>
      <nav style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: 'transparent',
        padding: '12px 0',
      }}>
        <div className="container">
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: 60,
            background: scrolled ? 'rgba(255,255,255,0.45)' : 'var(--color-canvas)',
            backdropFilter: scrolled ? 'blur(20px)' : 'none',
            WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
            border: scrolled ? '1px solid rgba(255,255,255,0.3)' : '1px solid var(--color-hairline)',
            borderRadius: 'var(--rounded-full)',
            padding: '0 8px 0 16px',
            boxShadow: scrolled
              ? '0 4px 20px rgba(0,0,0,0.10)'
              : '0 1px 4px rgba(0,0,0,0.06)',
            transition: 'box-shadow 0.25s ease, background 0.3s ease',
            position: 'relative',
          }}>
            {/* Logo */}
            <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
              <div style={{
                width: 28,
                height: 28,
                borderRadius: 7,
                background: 'var(--color-cta)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <span style={{ fontWeight: 800, fontSize: 15, color: 'var(--color-ink)', letterSpacing: -0.3 }}>
                Emigria
              </span>
            </a>

            {/* Desktop links — absolutely centered */}
            <div style={{
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              alignItems: 'center',
              gap: 2,
            }} className="nav-links-desktop">
              {links.map(item => (
                <a
                  key={item.label}
                  href={item.href}
                  style={{
                    padding: '6px 14px',
                    fontSize: 13,
                    fontWeight: 500,
                    color: 'var(--color-steel)',
                    borderRadius: 'var(--rounded-full)',
                    transition: 'all 0.15s ease',
                    whiteSpace: 'nowrap',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-ink)';
                    (e.currentTarget as HTMLAnchorElement).style.background = 'var(--color-surface-soft)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-steel)';
                    (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
                  }}
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Right side: toggle + CTA (desktop) / toggle + burger (mobile) */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              {toggleBtn}

              {/* CTA — desktop only */}
              <a
                href="#hero"
                className="nav-cta-btn"
                style={{
                  padding: '8px 18px',
                  fontSize: 13,
                  fontWeight: 600,
                  color: '#fff',
                  background: 'var(--color-cta)',
                  borderRadius: 'var(--rounded-full)',
                  whiteSpace: 'nowrap',
                  flexShrink: 0,
                  transition: 'background 0.15s ease',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = 'var(--color-cta-hover)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'var(--color-cta)')}
              >
                Cek Sekarang
              </a>

              {/* Burger — mobile only */}
              <button
                className="nav-burger"
                onClick={() => setMenuOpen(true)}
                style={{
                  display: 'none',
                  width: 32,
                  height: 32,
                  borderRadius: 8,
                  background: 'transparent',
                  border: 'none',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-ink)" strokeWidth="2" strokeLinecap="round">
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile sidebar */}
      <div style={{
        position: 'fixed',
        inset: 0,
        zIndex: 200,
        pointerEvents: menuOpen ? 'auto' : 'none',
      }}>
        <div
          onClick={() => setMenuOpen(false)}
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(0,30,43,0.5)',
            opacity: menuOpen ? 1 : 0,
            transition: 'opacity 0.25s ease',
          }}
        />
        <div style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: 260,
          height: '100%',
          background: 'var(--color-canvas)',
          boxShadow: '-8px 0 32px rgba(0,0,0,0.15)',
          transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.3s ease',
          display: 'flex',
          flexDirection: 'column',
          padding: '24px',
        }}>
          <button
            onClick={() => setMenuOpen(false)}
            style={{
              alignSelf: 'flex-end',
              width: 32,
              height: 32,
              borderRadius: 8,
              background: 'var(--color-surface-soft)',
              border: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              marginBottom: 32,
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-ink)" strokeWidth="2.5" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {links.map(item => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  padding: '12px 16px',
                  fontSize: 15,
                  fontWeight: 600,
                  color: 'var(--color-ink)',
                  borderRadius: 10,
                  transition: 'background 0.15s ease',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = 'var(--color-surface-soft)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div style={{ marginTop: 24 }}>
            <a
              href="#hero"
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'block',
                textAlign: 'center',
                padding: '12px',
                fontSize: 14,
                fontWeight: 600,
                color: '#fff',
                background: 'var(--color-cta)',
                borderRadius: 'var(--rounded-full)',
              }}
            >
              Cek Sekarang
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 700px) {
          .nav-links-desktop { display: none !important; }
          .nav-cta-btn { display: none !important; }
          .nav-burger { display: flex !important; }
        }
      `}</style>
    </>
  );
}

import { useState } from 'react';
import { faqs } from './faqData';

/*
  Emigria FAQ — two-column layout:
    LEFT: eyebrow + heading + description + small CTA links
    RIGHT: accordion list, open item gets soft-mint highlight
           with brand-green-dark text + plus-rotate icon
*/

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="section-pad"
      style={{
        background: 'var(--color-surface-soft)',
        padding: '80px 0',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.4fr',
            gap: 80,
            alignItems: 'start',
          }}
          className="faq-grid"
        >
          {/* LEFT */}
          <div style={{ position: 'sticky', top: 100 }} className="faq-left reveal reveal-left">
            <div className="eyebrow" style={{ marginBottom: 16 }}>FAQ</div>
            <h2 className="section-heading" style={{ marginBottom: 20 }}>
              Pertanyaan yang<br />
              sering diajukan
            </h2>
            <p
              style={{
                fontSize: 15,
                color: 'var(--color-steel)',
                lineHeight: 1.7,
                marginBottom: 28,
                maxWidth: 360,
              }}
            >
              Hal-hal yang paling sering ditanyakan tentang cara kerja Emigria.
              Ada pertanyaan lain? Hubungi tim kami.
            </p>


          </div>

          {/* RIGHT — accordion */}
          <div
            className="reveal delay-2"
            style={{
              background: 'var(--color-canvas)',
              border: '1px solid var(--color-hairline)',
              borderRadius: 16,
              overflow: 'hidden',
              boxShadow: '0 2px 8px rgba(0, 30, 43, 0.04)',
            }}
          >
            {faqs.map((faq, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={i}
                  style={{
                    borderBottom:
                      i < faqs.length - 1
                        ? '1px solid var(--color-hairline-soft)'
                        : 'none',
                  }}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    style={{
                      width: '100%',
                      textAlign: 'left',
                      padding: '22px 28px',
                      background: isOpen
                        ? 'var(--color-surface-feature)'
                        : 'transparent',
                      border: 'none',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap: 16,
                      cursor: 'pointer',
                      fontFamily: 'var(--font-primary)',
                      transition: 'background 0.2s ease',
                    }}
                  >
                    <span
                      style={{
                        fontWeight: 600,
                        fontSize: 15,
                        lineHeight: 1.5,
                        color: isOpen
                          ? 'var(--color-brand-green-dark)'
                          : 'var(--color-ink)',
                        flex: 1,
                        transition: 'color 0.2s ease',
                      }}
                    >
                      {faq.q}
                    </span>
                    <span
                      aria-hidden
                      style={{
                        width: 26,
                        height: 26,
                        borderRadius: '50%',
                        background: isOpen
                          ? 'var(--color-brand-green-dark)'
                          : 'transparent',
                        border: isOpen
                          ? 'none'
                          : '1.5px solid var(--color-hairline-strong)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        transition: 'all 0.2s ease',
                      }}
                    >
                      <svg
                        width="11"
                        height="11"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke={isOpen ? '#fff' : 'var(--color-slate)'}
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        style={{
                          transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                          transition: 'transform 0.25s ease',
                        }}
                      >
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                      </svg>
                    </span>
                  </button>

                  <div
                    style={{
                      maxHeight: isOpen ? 320 : 0,
                      overflow: 'hidden',
                      background: isOpen
                        ? 'var(--color-surface-feature)'
                        : 'transparent',
                      transition:
                        'max-height 0.35s ease, background 0.2s ease',
                    }}
                  >
                    <p
                      style={{
                        fontSize: 14,
                        color: 'var(--color-slate)',
                        lineHeight: 1.75,
                        padding: '0 28px 24px',
                      }}
                    >
                      {faq.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .faq-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
          .faq-left {
            position: static !important;
          }
        }
      `}</style>
    </section>
  );
}

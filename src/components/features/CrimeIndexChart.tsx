import { useState, useRef, useEffect } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  type ChartOptions,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { crimeData, provinces } from './crimeData';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Filler, Tooltip);

/* ─── Crime Index Chart ─── */
export function CrimeIndexChart() {
  const [country, setCountry] = useState(provinces[0]);
  const [open, setOpen] = useState(false);
  const dropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const d = crimeData[country];
  const max = Math.max(...d.values);

  const levelColor: Record<string, string> = {
    low: '#22c55e',
    medium: '#f59e0b',
    high: '#ef4444',
  };
  const levelLabel: Record<string, string> = {
    low: 'Rendah',
    medium: 'Sedang',
    high: 'Tinggi',
  };

  const chartData = {
    labels: d.labels,
    datasets: [
      {
        data: d.values,
        fill: true,
        borderColor: '#0d7a6e',
        borderWidth: 2.5,
        backgroundColor: (ctx: { chart: ChartJS }) => {
          const gradient = ctx.chart.ctx.createLinearGradient(0, 0, 0, 130);
          gradient.addColorStop(0, 'rgba(13,122,110,0.22)');
          gradient.addColorStop(1, 'rgba(13,122,110,0.01)');
          return gradient;
        },
        tension: 0.45,
        pointRadius: 4,
        pointBackgroundColor: '#0d7a6e',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointHoverRadius: 6,
        pointHoverBackgroundColor: '#0d7a6e',
        pointHoverBorderColor: '#fff',
        pointHoverBorderWidth: 2,
      },
    ],
  };

  const options: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        mode: 'index',
        intersect: false,
        callbacks: {
          label: (ctx) => ` Crime Index: ${ctx.parsed.y.toFixed(2)}`,
        },
      },
    },
    scales: {
      x: {
        grid: { display: false },
        border: { display: false },
        ticks: { font: { size: 11, weight: 600 }, color: '#5c6c7a' },
      },
      y: {
        display: false,
        min: 0,
        max: max * 1.3,
      },
    },
    interaction: { mode: 'nearest', axis: 'x', intersect: false },
  };

  return (
    <div style={{
      background: 'var(--color-surface)',
      borderRadius: 20,
      padding: '36px 40px',
      display: 'grid',
      gridTemplateColumns: '220px 1fr',
      gap: 40,
      alignItems: 'center',
      border: '1px solid var(--color-hairline)',
    }} className="bento-bottom crime-chart-card">
      {/* Left text */}
      <div>
        <div className="chart-title" style={{
          fontWeight: 800,
          fontSize: 24,
          color: 'var(--color-ink)',
          lineHeight: 1.25,
          marginBottom: 10,
          letterSpacing: -0.5,
        }}>
          Crime Index<br />Negara Tujuan
        </div>
        <p style={{ fontSize: 13, color: 'var(--color-steel)', lineHeight: 1.65, marginBottom: 20 }}>
          Indeks kriminalitas negara tujuan kerja PMI. Sumber: OCIndex / Numbeo 2025.
        </p>

        {/* Current index value */}
        <div style={{ marginBottom: 12 }}>
          <div style={{ fontSize: 11, color: 'var(--color-stone)', fontWeight: 600, marginBottom: 4, textTransform: 'uppercase', letterSpacing: 0.5 }}>
            Index 2025
          </div>
          <div style={{ fontSize: 36, fontWeight: 800, color: 'var(--color-ink)', letterSpacing: -2, lineHeight: 1 }}>
            {d.values[2].toFixed(2)}
          </div>
        </div>

        {/* Level badge */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 5,
            background: `${levelColor[d.level]}18`,
            borderRadius: 99,
            padding: '4px 10px',
          }}>
            <div style={{ width: 7, height: 7, borderRadius: '50%', background: levelColor[d.level] }} />
            <span style={{ fontSize: 11, fontWeight: 700, color: levelColor[d.level], textTransform: 'uppercase', letterSpacing: 0.5 }}>
              {levelLabel[d.level]}
            </span>
          </div>
          <span style={{ fontSize: 12, color: 'var(--color-stone)' }}>
            #{d.globalRank} global
          </span>
        </div>
      </div>

      {/* Right chart */}
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
          <div>
            <div style={{ fontSize: 11, color: 'var(--color-stone)', fontWeight: 600, marginBottom: 2 }}>
              Tren 2021 – 2025
            </div>
            <div className="chart-heading" style={{
              fontSize: 20,
              fontWeight: 800,
              color: 'var(--color-ink)',
              letterSpacing: -0.5,
              lineHeight: 1,
            }}>
              {country}
            </div>
          </div>

          {/* Dropdown */}
          <div ref={dropRef} style={{ position: 'relative' }}>
            <button
              onClick={() => setOpen(o => !o)}
              style={{
                fontSize: 12,
                color: 'var(--color-steel)',
                border: '1px solid var(--color-hairline-strong)',
                borderRadius: 'var(--rounded-full)',
                padding: '5px 12px',
                background: 'var(--color-canvas)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: 4,
                fontFamily: 'var(--font-primary)',
                fontWeight: 500,
                whiteSpace: 'nowrap',
              }}
            >
              {country}
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>

            {open && (
              <div style={{
                position: 'absolute',
                top: 'calc(100% + 6px)',
                right: 0,
                background: 'var(--color-canvas)',
                border: '1px solid var(--color-hairline)',
                borderRadius: 10,
                boxShadow: '0 8px 24px rgba(0,30,43,0.10)',
                zIndex: 10,
                minWidth: 160,
                overflow: 'hidden',
              }}>
                {provinces.map(p => (
                  <button
                    key={p}
                    onClick={() => { setCountry(p); setOpen(false); }}
                    style={{
                      display: 'block',
                      width: '100%',
                      textAlign: 'left',
                      padding: '10px 16px',
                      fontSize: 13,
                      fontWeight: p === country ? 600 : 400,
                      color: p === country ? 'var(--color-cta)' : 'var(--color-ink)',
                      background: p === country ? 'var(--color-surface-feature)' : 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                      fontFamily: 'var(--font-primary)',
                    }}
                  >
                    {p}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div style={{ height: 130 }}>
          <Line data={chartData} options={options} />
        </div>

        {/* Variation indicator */}
        <div style={{ marginTop: 10, display: 'flex', alignItems: 'center', gap: 6 }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
            stroke={d.variation >= 0 ? '#ef4444' : '#22c55e'}
            strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            {d.variation >= 0
              ? <><line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/></>
              : <><line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/></>
            }
          </svg>
          <span style={{ fontSize: 12, color: 'var(--color-steel)' }}>
            {d.variation >= 0 ? '+' : ''}{d.variation.toFixed(2)} dari 2023
          </span>
        </div>
      </div>
    </div>
  );
}

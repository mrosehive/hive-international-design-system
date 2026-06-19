import React from 'react';

/**
 * Hive International — Badge
 * Compact status/category pill. Low-saturation, mission-credible.
 * `tone` maps to the semantic palette; gold ("accent") is the default
 * emphasis tone and should stay scarce.
 */
export function Badge({ children, tone = 'neutral', solid = false, style, ...rest }) {
  const tones = {
    neutral: { fg: 'var(--text-muted)', bg: 'rgba(184,188,196,0.12)', bd: 'rgba(184,188,196,0.25)' },
    accent:  { fg: 'var(--hive-gold)', bg: 'var(--hive-gold-soft)', bd: 'rgba(242,182,50,0.35)' },
    success: { fg: '#7Fce82', bg: 'rgba(76,175,80,0.14)', bd: 'rgba(76,175,80,0.35)' },
    danger:  { fg: '#ef8a87', bg: 'rgba(229,57,53,0.14)', bd: 'rgba(229,57,53,0.35)' },
    info:    { fg: '#9cc2e8', bg: 'rgba(91,155,213,0.14)', bd: 'rgba(91,155,213,0.35)' },
  };
  const t = tones[tone] || tones.neutral;

  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    fontFamily: 'var(--font-body)',
    fontSize: '10.5px',
    fontWeight: 'var(--weight-semibold)',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    padding: '4px 10px',
    borderRadius: 'var(--radius-pill)',
    lineHeight: 1.3,
    whiteSpace: 'nowrap',
    color: solid ? 'var(--text-on-gold)' : t.fg,
    background: solid ? t.fg : t.bg,
    border: `1px solid ${solid ? 'transparent' : t.bd}`,
  };

  return <span style={{ ...base, ...style }} {...rest}>{children}</span>;
}

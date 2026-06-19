import React from 'react';

/**
 * Hive International — Eyebrow
 * The tracked uppercase micro-label used above headings, with the
 * signature thin gold rule beneath it. Pairs with Bebas section titles.
 */
export function Eyebrow({ children, rule = true, style, ...rest }) {
  return (
    <div style={style} {...rest}>
      <div style={{
        fontFamily: 'var(--font-body)',
        fontSize: '11px',
        fontWeight: 'var(--weight-semibold)',
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        color: 'var(--text-accent)',
      }}>{children}</div>
      {rule && <div style={{ width: '40px', height: '2px', background: 'var(--hive-gold)', marginTop: '10px' }} />}
    </div>
  );
}

import React from 'react';

/**
 * Hive International — InfoBlock
 * A titled panel with a 3px left-accent rule (gold by default, silver for
 * supporting notes). Used for guidance, callouts, and capability summaries.
 */
export function InfoBlock({ title, children, accent = 'gold', style, ...rest }) {
  const accentColor = accent === 'silver' ? 'var(--hive-silver)' : 'var(--hive-gold)';
  return (
    <div
      style={{
        background: 'var(--surface-card)',
        borderLeft: `3px solid ${accentColor}`,
        borderRadius: '0 var(--radius-md) var(--radius-md) 0',
        padding: '18px 22px',
        ...style,
      }}
      {...rest}
    >
      {title && (
        <div style={{
          fontFamily: 'var(--font-display)',
          fontSize: '18px',
          letterSpacing: '0.04em',
          color: 'var(--text-strong)',
          marginBottom: '8px',
        }}>{title}</div>
      )}
      <div style={{
        fontFamily: 'var(--font-body)',
        fontSize: '13px',
        lineHeight: 1.65,
        color: 'var(--text-muted)',
      }}>{children}</div>
    </div>
  );
}

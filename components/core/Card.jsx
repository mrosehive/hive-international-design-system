import React from 'react';

/**
 * Hive International — Card
 * Charcoal panel on slate. 1px hairline + subtle shadow. Set
 * `accent` to add the signature 3px gold left-rule used on callouts,
 * info blocks and feature panels. `hexTexture` overlays the faint
 * honeycomb mesh for hero/feature cards (keep it off behind dense text).
 */
export function Card({
  children,
  accent = false,
  hexTexture = false,
  interactive = false,
  padding = '24px',
  style,
  ...rest
}) {
  const base = {
    position: 'relative',
    background: 'var(--surface-card)',
    border: '1px solid var(--border-hairline)',
    borderLeft: accent ? '3px solid var(--hive-gold)' : '1px solid var(--border-hairline)',
    borderRadius: accent ? '0 var(--radius-md) var(--radius-md) 0' : 'var(--radius-md)',
    boxShadow: 'var(--shadow-sm)',
    padding,
    overflow: 'hidden',
    transition: 'transform var(--duration-base) var(--ease-standard), box-shadow var(--duration-base) var(--ease-standard), border-color var(--duration-base) var(--ease-standard)',
    cursor: interactive ? 'pointer' : 'default',
  };

  const hex = hexTexture ? {
    position: 'absolute', inset: 0, zIndex: 0,
    backgroundImage: 'var(--hive-hex-mesh)',
    backgroundSize: '56px 96px',
    opacity: 0.08,
    pointerEvents: 'none',
  } : null;

  return (
    <div
      style={{ ...base, ...style }}
      onMouseEnter={(e) => { if (interactive) { e.currentTarget.style.boxShadow = 'var(--shadow-md)'; e.currentTarget.style.borderColor = 'var(--border-strong)'; } }}
      onMouseLeave={(e) => { if (interactive) { e.currentTarget.style.boxShadow = 'var(--shadow-sm)'; e.currentTarget.style.borderColor = 'var(--border-hairline)'; } }}
      {...rest}
    >
      {hex && <div style={hex} />}
      <div style={{ position: 'relative', zIndex: 1 }}>{children}</div>
    </div>
  );
}

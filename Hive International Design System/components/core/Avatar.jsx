import React from 'react';

/**
 * Hive International — Avatar
 * Initials avatar on a charcoal disc with a hairline ring. Optional
 * image src. Quiet by default; gold ring for emphasis/active states.
 */
export function Avatar({ name = '', src, size = 40, ring = 'hairline', style, ...rest }) {
  const initials = name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join('');

  const ringColor = ring === 'gold' ? 'var(--hive-gold)' : 'var(--border-strong)';

  const base = {
    width: size,
    height: size,
    borderRadius: 'var(--radius-pill)',
    background: 'var(--surface-raised)',
    border: `1px solid ${ringColor}`,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    flex: '0 0 auto',
    ...style,
  };

  return (
    <span style={base} {...rest}>
      {src ? (
        <img src={src} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      ) : (
        <span style={{
          fontFamily: 'var(--font-body)',
          fontSize: size * 0.36,
          fontWeight: 'var(--weight-semibold)',
          letterSpacing: '0.02em',
          color: 'var(--text-muted)',
        }}>{initials}</span>
      )}
    </span>
  );
}

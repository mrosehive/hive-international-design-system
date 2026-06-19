import React from 'react';

/**
 * Hive International — Tag
 * Small squared chip for capabilities, NAICS codes, contract vehicles,
 * and filter keywords. Quieter and more rectangular than a Badge.
 */
export function Tag({ children, active = false, onClick, style, ...rest }) {
  const interactive = typeof onClick === 'function';
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    fontFamily: 'var(--font-body)',
    fontSize: '12px',
    fontWeight: 'var(--weight-medium)',
    letterSpacing: '0.02em',
    padding: '5px 11px',
    borderRadius: 'var(--radius-sm)',
    lineHeight: 1.4,
    cursor: interactive ? 'pointer' : 'default',
    color: active ? 'var(--hive-gold)' : 'var(--text-muted)',
    background: active ? 'var(--hive-gold-soft)' : 'var(--surface-raised)',
    border: `1px solid ${active ? 'rgba(242,182,50,0.35)' : 'var(--border-hairline)'}`,
    transition: 'color var(--duration-fast) var(--ease-standard), border-color var(--duration-fast) var(--ease-standard)',
    userSelect: 'none',
  };
  return (
    <span
      onClick={onClick}
      style={{ ...base, ...style }}
      onMouseEnter={(e) => { if (interactive && !active) e.currentTarget.style.borderColor = 'var(--border-strong)'; }}
      onMouseLeave={(e) => { if (interactive && !active) e.currentTarget.style.borderColor = 'var(--border-hairline)'; }}
      {...rest}
    >
      {children}
    </span>
  );
}

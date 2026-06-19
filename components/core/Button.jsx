import React from 'react';

/**
 * Hive International — Button
 * Slate-led control with restrained gold emphasis. Primary uses the
 * gold fill (spend it sparingly); secondary is an outlined slate control;
 * ghost is text-only. No glow, no heavy scale on press.
 */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  iconLeft = null,
  iconRight = null,
  type = 'button',
  onClick,
  style,
  ...rest
}) {
  const sizes = {
    sm: { padding: '7px 14px', fontSize: '12px', gap: '7px' },
    md: { padding: '11px 22px', fontSize: '13px', gap: '8px' },
    lg: { padding: '15px 30px', fontSize: '15px', gap: '10px' },
  };

  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: sizes[size].gap,
    fontFamily: 'var(--font-body)',
    fontWeight: 'var(--weight-semibold)',
    fontSize: sizes[size].fontSize,
    letterSpacing: '0.04em',
    textTransform: 'uppercase',
    padding: sizes[size].padding,
    borderRadius: 'var(--radius-md)',
    border: '1px solid transparent',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    transition: 'background var(--duration-fast) var(--ease-standard), border-color var(--duration-fast) var(--ease-standard), color var(--duration-fast) var(--ease-standard), transform var(--duration-fast) var(--ease-standard)',
    lineHeight: 1,
    whiteSpace: 'nowrap',
    userSelect: 'none',
  };

  const variants = {
    primary: {
      background: 'var(--hive-gold)',
      color: 'var(--text-on-gold)',
    },
    secondary: {
      background: 'transparent',
      color: 'var(--text-strong)',
      borderColor: 'var(--border-strong)',
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-accent)',
    },
    danger: {
      background: 'transparent',
      color: 'var(--hive-danger)',
      borderColor: 'rgba(229,57,53,0.5)',
    },
  };

  const hoverByVariant = {
    primary: (e, on) => { e.currentTarget.style.background = on ? 'var(--hive-gold-bright)' : 'var(--hive-gold)'; },
    secondary: (e, on) => { e.currentTarget.style.borderColor = on ? 'var(--hive-gold)' : 'var(--border-strong)'; e.currentTarget.style.color = on ? 'var(--hive-gold)' : 'var(--text-strong)'; },
    ghost: (e, on) => { e.currentTarget.style.color = on ? 'var(--hive-gold-bright)' : 'var(--text-accent)'; },
    danger: (e, on) => { e.currentTarget.style.background = on ? 'rgba(229,57,53,0.10)' : 'transparent'; },
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      style={{ ...base, ...variants[variant], ...style }}
      onMouseEnter={(e) => { if (!disabled) hoverByVariant[variant](e, true); }}
      onMouseLeave={(e) => { if (!disabled) hoverByVariant[variant](e, false); }}
      onMouseDown={(e) => { if (!disabled) e.currentTarget.style.transform = 'translateY(1px)'; }}
      onMouseUp={(e) => { if (!disabled) e.currentTarget.style.transform = 'translateY(0)'; }}
      {...rest}
    >
      {iconLeft}
      {children}
      {iconRight}
    </button>
  );
}

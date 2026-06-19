import React from 'react';

/**
 * Hive International — Input
 * Slate text field with a hairline border that warms to gold on focus.
 * Optional label and helper/error text. Quiet and structured.
 */
export function Input({
  label,
  helper,
  error = false,
  type = 'text',
  id,
  value,
  defaultValue,
  placeholder,
  onChange,
  style,
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const fieldId = id || (label ? `inp-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  const borderColor = error ? 'var(--hive-danger)' : (focused ? 'var(--hive-gold)' : 'var(--border-strong)');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', ...style }}>
      {label && (
        <label htmlFor={fieldId} style={{
          fontFamily: 'var(--font-body)',
          fontSize: '11px',
          fontWeight: 'var(--weight-semibold)',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: 'var(--text-muted)',
        }}>{label}</label>
      )}
      <input
        id={fieldId}
        type={type}
        value={value}
        defaultValue={defaultValue}
        placeholder={placeholder}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '14px',
          color: 'var(--text-strong)',
          background: 'var(--surface-base)',
          border: `1px solid ${borderColor}`,
          borderRadius: 'var(--radius-sm)',
          padding: '10px 13px',
          outline: 'none',
          transition: 'border-color var(--duration-fast) var(--ease-standard)',
        }}
        {...rest}
      />
      {helper && (
        <span style={{
          fontFamily: 'var(--font-body)',
          fontSize: '11.5px',
          color: error ? 'var(--hive-danger)' : 'var(--text-muted)',
        }}>{helper}</span>
      )}
    </div>
  );
}

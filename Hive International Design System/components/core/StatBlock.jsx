import React from 'react';

/**
 * Hive International — StatBlock
 * The "By the Numbers" metric: a large gold Bebas numeral over an
 * uppercase label and supporting line. Optional gold left-divider for
 * use in multi-column stat rows.
 */
export function StatBlock({ value, label, detail, divider = false, align = 'left', style, ...rest }) {
  const wrap = {
    display: 'flex',
    flexDirection: 'column',
    textAlign: align,
    paddingLeft: divider ? '24px' : 0,
    borderLeft: divider ? '1px solid var(--hive-gold)' : 'none',
    ...style,
  };
  return (
    <div style={wrap} {...rest}>
      <span style={{
        fontFamily: 'var(--font-display)',
        fontSize: '58px',
        lineHeight: 0.9,
        letterSpacing: '0.02em',
        color: 'var(--hive-gold)',
      }}>{value}</span>
      <span style={{
        marginTop: '10px',
        fontFamily: 'var(--font-body)',
        fontSize: '13px',
        fontWeight: 'var(--weight-semibold)',
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        color: 'var(--text-strong)',
      }}>{label}</span>
      {detail && (
        <span style={{
          marginTop: '4px',
          fontFamily: 'var(--font-body)',
          fontSize: '12.5px',
          color: 'var(--text-muted)',
          lineHeight: 1.5,
        }}>{detail}</span>
      )}
    </div>
  );
}

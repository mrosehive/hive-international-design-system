/* @ds-bundle: {"format":3,"namespace":"HiveInternationalDesignSystem_54bd19","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"InfoBlock","sourcePath":"components/core/InfoBlock.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"StatBlock","sourcePath":"components/core/StatBlock.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"226554f30031","components/core/Badge.jsx":"01a40fccb60d","components/core/Button.jsx":"b2f92d3ce962","components/core/Card.jsx":"67750648663c","components/core/Eyebrow.jsx":"714aa73f3dda","components/core/InfoBlock.jsx":"ad6aa2c63f76","components/core/Input.jsx":"bb7090eb32cb","components/core/StatBlock.jsx":"fb7115436f35","components/core/Tag.jsx":"19b7cc1f655d","ui_kits/capability_site/Capabilities.jsx":"4040f2c7faaf","ui_kits/capability_site/ContactFooter.jsx":"b1698107e1f3","ui_kits/capability_site/Hero.jsx":"5d4871fa758b","ui_kits/capability_site/Numbers.jsx":"4e940c2fe2d7","ui_kits/capability_site/Overlays.jsx":"093405be9ac9","ui_kits/capability_site/SiteNav.jsx":"945ed889df22"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.HiveInternationalDesignSystem_54bd19 = window.HiveInternationalDesignSystem_54bd19 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Hive International — Avatar
 * Initials avatar on a charcoal disc with a hairline ring. Optional
 * image src. Quiet by default; gold ring for emphasis/active states.
 */
function Avatar({
  name = '',
  src,
  size = 40,
  ring = 'hairline',
  style,
  ...rest
}) {
  const initials = name.split(/\s+/).filter(Boolean).slice(0, 2).map(w => w[0].toUpperCase()).join('');
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
    ...style
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: base
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: size * 0.36,
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: '0.02em',
      color: 'var(--text-muted)'
    }
  }, initials));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Hive International — Badge
 * Compact status/category pill. Low-saturation, mission-credible.
 * `tone` maps to the semantic palette; gold ("accent") is the default
 * emphasis tone and should stay scarce.
 */
function Badge({
  children,
  tone = 'neutral',
  solid = false,
  style,
  ...rest
}) {
  const tones = {
    neutral: {
      fg: 'var(--text-muted)',
      bg: 'rgba(184,188,196,0.12)',
      bd: 'rgba(184,188,196,0.25)'
    },
    accent: {
      fg: 'var(--hive-gold)',
      bg: 'var(--hive-gold-soft)',
      bd: 'rgba(242,182,50,0.35)'
    },
    success: {
      fg: '#7Fce82',
      bg: 'rgba(76,175,80,0.14)',
      bd: 'rgba(76,175,80,0.35)'
    },
    danger: {
      fg: '#ef8a87',
      bg: 'rgba(229,57,53,0.14)',
      bd: 'rgba(229,57,53,0.35)'
    },
    info: {
      fg: '#9cc2e8',
      bg: 'rgba(91,155,213,0.14)',
      bd: 'rgba(91,155,213,0.35)'
    }
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
    border: `1px solid ${solid ? 'transparent' : t.bd}`
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      ...base,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Hive International — Button
 * Slate-led control with restrained gold emphasis. Primary uses the
 * gold fill (spend it sparingly); secondary is an outlined slate control;
 * ghost is text-only. No glow, no heavy scale on press.
 */
function Button({
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
    sm: {
      padding: '7px 14px',
      fontSize: '12px',
      gap: '7px'
    },
    md: {
      padding: '11px 22px',
      fontSize: '13px',
      gap: '8px'
    },
    lg: {
      padding: '15px 30px',
      fontSize: '15px',
      gap: '10px'
    }
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
    userSelect: 'none'
  };
  const variants = {
    primary: {
      background: 'var(--hive-gold)',
      color: 'var(--text-on-gold)'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--text-strong)',
      borderColor: 'var(--border-strong)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-accent)'
    },
    danger: {
      background: 'transparent',
      color: 'var(--hive-danger)',
      borderColor: 'rgba(229,57,53,0.5)'
    }
  };
  const hoverByVariant = {
    primary: (e, on) => {
      e.currentTarget.style.background = on ? 'var(--hive-gold-bright)' : 'var(--hive-gold)';
    },
    secondary: (e, on) => {
      e.currentTarget.style.borderColor = on ? 'var(--hive-gold)' : 'var(--border-strong)';
      e.currentTarget.style.color = on ? 'var(--hive-gold)' : 'var(--text-strong)';
    },
    ghost: (e, on) => {
      e.currentTarget.style.color = on ? 'var(--hive-gold-bright)' : 'var(--text-accent)';
    },
    danger: (e, on) => {
      e.currentTarget.style.background = on ? 'rgba(229,57,53,0.10)' : 'transparent';
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    style: {
      ...base,
      ...variants[variant],
      ...style
    },
    onMouseEnter: e => {
      if (!disabled) hoverByVariant[variant](e, true);
    },
    onMouseLeave: e => {
      if (!disabled) hoverByVariant[variant](e, false);
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = 'translateY(1px)';
    },
    onMouseUp: e => {
      if (!disabled) e.currentTarget.style.transform = 'translateY(0)';
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Hive International — Card
 * Charcoal panel on slate. 1px hairline + subtle shadow. Set
 * `accent` to add the signature 3px gold left-rule used on callouts,
 * info blocks and feature panels. `hexTexture` overlays the faint
 * honeycomb mesh for hero/feature cards (keep it off behind dense text).
 */
function Card({
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
    cursor: interactive ? 'pointer' : 'default'
  };
  const hex = hexTexture ? {
    position: 'absolute',
    inset: 0,
    zIndex: 0,
    backgroundImage: 'var(--hive-hex-mesh)',
    backgroundSize: '56px 96px',
    opacity: 0.08,
    pointerEvents: 'none'
  } : null;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      ...base,
      ...style
    },
    onMouseEnter: e => {
      if (interactive) {
        e.currentTarget.style.boxShadow = 'var(--shadow-md)';
        e.currentTarget.style.borderColor = 'var(--border-strong)';
      }
    },
    onMouseLeave: e => {
      if (interactive) {
        e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
        e.currentTarget.style.borderColor = 'var(--border-hairline)';
      }
    }
  }, rest), hex && /*#__PURE__*/React.createElement("div", {
    style: hex
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1
    }
  }, children));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Hive International — Eyebrow
 * The tracked uppercase micro-label used above headings, with the
 * signature thin gold rule beneath it. Pairs with Bebas section titles.
 */
function Eyebrow({
  children,
  rule = true,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: style
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '11px',
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--text-accent)'
    }
  }, children), rule && /*#__PURE__*/React.createElement("div", {
    style: {
      width: '40px',
      height: '2px',
      background: 'var(--hive-gold)',
      marginTop: '10px'
    }
  }));
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/InfoBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Hive International — InfoBlock
 * A titled panel with a 3px left-accent rule (gold by default, silver for
 * supporting notes). Used for guidance, callouts, and capability summaries.
 */
function InfoBlock({
  title,
  children,
  accent = 'gold',
  style,
  ...rest
}) {
  const accentColor = accent === 'silver' ? 'var(--hive-silver)' : 'var(--hive-gold)';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: 'var(--surface-card)',
      borderLeft: `3px solid ${accentColor}`,
      borderRadius: '0 var(--radius-md) var(--radius-md) 0',
      padding: '18px 22px',
      ...style
    }
  }, rest), title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '18px',
      letterSpacing: '0.04em',
      color: 'var(--text-strong)',
      marginBottom: '8px'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '13px',
      lineHeight: 1.65,
      color: 'var(--text-muted)'
    }
  }, children));
}
Object.assign(__ds_scope, { InfoBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/InfoBlock.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Hive International — Input
 * Slate text field with a hairline border that warms to gold on focus.
 * Optional label and helper/error text. Quiet and structured.
 */
function Input({
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
  const borderColor = error ? 'var(--hive-danger)' : focused ? 'var(--hive-gold)' : 'var(--border-strong)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '11px',
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    type: type,
    value: value,
    defaultValue: defaultValue,
    placeholder: placeholder,
    onChange: onChange,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '14px',
      color: 'var(--text-strong)',
      background: 'var(--surface-base)',
      border: `1px solid ${borderColor}`,
      borderRadius: 'var(--radius-sm)',
      padding: '10px 13px',
      outline: 'none',
      transition: 'border-color var(--duration-fast) var(--ease-standard)'
    }
  }, rest)), helper && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '11.5px',
      color: error ? 'var(--hive-danger)' : 'var(--text-muted)'
    }
  }, helper));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/StatBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Hive International — StatBlock
 * The "By the Numbers" metric: a large gold Bebas numeral over an
 * uppercase label and supporting line. Optional gold left-divider for
 * use in multi-column stat rows.
 */
function StatBlock({
  value,
  label,
  detail,
  divider = false,
  align = 'left',
  style,
  ...rest
}) {
  const wrap = {
    display: 'flex',
    flexDirection: 'column',
    textAlign: align,
    paddingLeft: divider ? '24px' : 0,
    borderLeft: divider ? '1px solid var(--hive-gold)' : 'none',
    ...style
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: wrap
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '58px',
      lineHeight: 0.9,
      letterSpacing: '0.02em',
      color: 'var(--hive-gold)'
    }
  }, value), /*#__PURE__*/React.createElement("span", {
    style: {
      marginTop: '10px',
      fontFamily: 'var(--font-body)',
      fontSize: '13px',
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--text-strong)'
    }
  }, label), detail && /*#__PURE__*/React.createElement("span", {
    style: {
      marginTop: '4px',
      fontFamily: 'var(--font-body)',
      fontSize: '12.5px',
      color: 'var(--text-muted)',
      lineHeight: 1.5
    }
  }, detail));
}
Object.assign(__ds_scope, { StatBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatBlock.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Hive International — Tag
 * Small squared chip for capabilities, NAICS codes, contract vehicles,
 * and filter keywords. Quieter and more rectangular than a Badge.
 */
function Tag({
  children,
  active = false,
  onClick,
  style,
  ...rest
}) {
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
    userSelect: 'none'
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    onClick: onClick,
    style: {
      ...base,
      ...style
    },
    onMouseEnter: e => {
      if (interactive && !active) e.currentTarget.style.borderColor = 'var(--border-strong)';
    },
    onMouseLeave: e => {
      if (interactive && !active) e.currentTarget.style.borderColor = 'var(--border-hairline)';
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// ui_kits/capability_site/Capabilities.jsx
try { (() => {
/* Hive International — Capabilities grid (UI kit surface) */
const CAPABILITIES = [{
  n: '01',
  title: 'Criminal Justice Advisory',
  tag: 'Advisory',
  body: 'Capacity-building for criminal justice institutions countering transnational organized crime.'
}, {
  n: '02',
  title: 'Digital Forensics',
  tag: 'Forensics',
  body: 'Evidence handling, examination workflows, and intelligence-informed lab modernization.'
}, {
  n: '03',
  title: 'Border Security & Targeting',
  tag: 'Border',
  body: 'Intelligence-led border security, customs targeting, and trade enforcement advisory.'
}, {
  n: '04',
  title: 'Intelligence Modernization',
  tag: 'Intel',
  body: 'Standing up intelligence-led operating models and analytic tradecraft for partner agencies.'
}, {
  n: '05',
  title: 'Investigations Support',
  tag: 'Investigations',
  body: 'Multi-jurisdictional investigation support, coordination, and case-management capability.'
}, {
  n: '06',
  title: 'Training & Capacity-Building',
  tag: 'Training',
  body: 'Field-delivered training for law enforcement, military, and public-safety practitioners.'
}];
function Capabilities({
  onSelect,
  activeTag,
  onFilter
}) {
  const {
    Card,
    Tag,
    Eyebrow
  } = window.HiveInternationalDesignSystem_54bd19;
  const tags = ['All', ...CAPABILITIES.map(c => c.tag)];
  const shown = activeTag && activeTag !== 'All' ? CAPABILITIES.filter(c => c.tag === activeTag) : CAPABILITIES;
  return /*#__PURE__*/React.createElement("section", {
    id: "capabilities",
    style: {
      background: 'var(--surface-base)',
      padding: '88px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      flexWrap: 'wrap',
      gap: '24px',
      marginBottom: '40px'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "What We Do"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '48px',
      letterSpacing: '0.04em',
      color: 'var(--text-strong)',
      margin: '14px 0 0'
    }
  }, "Operational Capabilities")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '8px',
      flexWrap: 'wrap'
    }
  }, tags.map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t,
    active: (activeTag || 'All') === t,
    onClick: () => onFilter(t)
  }, t)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '16px'
    }
  }, shown.map(c => /*#__PURE__*/React.createElement(Card, {
    key: c.n,
    interactive: true,
    padding: "28px",
    onClick: () => onSelect(c)
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '26px',
      color: 'var(--hive-gold)',
      letterSpacing: '0.04em'
    }
  }, c.n), /*#__PURE__*/React.createElement(Tag, null, c.tag)), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '23px',
      letterSpacing: '0.03em',
      color: 'var(--text-strong)',
      margin: '22px 0 10px'
    }
  }, c.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '13.5px',
      lineHeight: 1.65,
      color: 'var(--text-muted)',
      margin: 0
    }
  }, c.body), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '20px',
      fontFamily: 'var(--font-body)',
      fontSize: '11px',
      fontWeight: 600,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--text-accent)'
    }
  }, "View detail \u2192"))))));
}
window.Capabilities = Capabilities;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/capability_site/Capabilities.jsx", error: String((e && e.message) || e) }); }

// ui_kits/capability_site/ContactFooter.jsx
try { (() => {
/* Hive International — Contact footer (UI kit surface) */
function ContactFooter() {
  const cols = [{
    h: 'Capabilities',
    items: ['Criminal Justice Advisory', 'Digital Forensics', 'Border Security', 'Intelligence Modernization']
  }, {
    h: 'Firm',
    items: ['Approach', 'Engagements', 'Leadership', 'Careers']
  }, {
    h: 'Contract',
    items: ['GSA Schedule', 'Capability Statement', 'Past Performance', 'Vehicles']
  }];
  return /*#__PURE__*/React.createElement("footer", {
    id: "contact",
    style: {
      background: 'var(--surface-sunken)',
      borderTop: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '64px 40px 0',
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
      gap: '40px'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/hive_stacked_gold_charcoal.svg",
    alt: "Hive International",
    style: {
      height: '72px',
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '18px',
      fontFamily: 'var(--font-display)',
      fontSize: '15px',
      letterSpacing: '0.05em'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--hive-gold)'
    }
  }, "ADVISORY DEPTH."), ' ', /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)'
    }
  }, "OPERATIONAL RESULTS.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '14px',
      marginTop: '22px'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/badges/gsa_schedule_warmwhite.png",
    alt: "GSA Schedule",
    style: {
      height: '52px'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '10px',
      color: 'var(--text-muted)',
      alignSelf: 'center'
    }
  }, "GSA MAS 47QRAA25D004V"))), cols.map(col => /*#__PURE__*/React.createElement("div", {
    key: col.h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '11px',
      fontWeight: 600,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--text-accent)',
      marginBottom: '16px'
    }
  }, col.h), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: '11px'
    }
  }, col.items.map(it => /*#__PURE__*/React.createElement("li", {
    key: it
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '13px',
      color: 'var(--text-muted)',
      textDecoration: 'none'
    }
  }, it))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '40px',
      marginTop: '40px',
      borderTop: '1px solid var(--border-hairline)',
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: '12px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '11px',
      color: 'var(--text-muted)'
    }
  }, "UEI C6QCCKKD7MQ6 \xB7 CAGE 7K4T0 \xB7 GSA MAS 47QRAA25D004V"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '11px',
      color: 'var(--text-muted)',
      opacity: 0.7
    }
  }, "\xA9 2026 Hive International, LLC \xB7 hiveintl.com")));
}
window.ContactFooter = ContactFooter;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/capability_site/ContactFooter.jsx", error: String((e && e.message) || e) }); }

// ui_kits/capability_site/Hero.jsx
try { (() => {
/* Hive International — Hero (UI kit surface) */
function Hero({
  onRequest
}) {
  const {
    Button
  } = window.HiveInternationalDesignSystem_54bd19;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--surface-base)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      backgroundImage: 'url(../../assets/patterns/honeycomb-slate.png)',
      backgroundSize: '234px auto',
      opacity: 0.55,
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/globe_slate.svg",
    alt: "",
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      right: '-90px',
      top: '50%',
      transform: 'translateY(-50%)',
      height: '560px',
      opacity: 0.10,
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(90deg, var(--hive-deep-slate) 0%, rgba(20,27,34,0) 55%)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '110px 40px 96px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '720px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '11px',
      fontWeight: 600,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: 'var(--text-accent)'
    }
  }, "Global Security \xB7 Criminal Justice \xB7 Operational Advisory"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '48px',
      height: '2px',
      background: 'var(--hive-gold)',
      margin: '18px 0 26px'
    }
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '84px',
      lineHeight: 0.94,
      letterSpacing: '0.03em',
      color: 'var(--text-strong)',
      margin: 0
    }
  }, "ADVISORY DEPTH.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--hive-gold)'
    }
  }, "OPERATIONAL RESULTS.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '18px',
      fontWeight: 300,
      lineHeight: 1.6,
      color: 'var(--text-body)',
      margin: '28px 0 0',
      maxWidth: '600px'
    }
  }, "Hive International delivers embedded operational advisory support for criminal justice, investigations, digital forensics, and border security missions \u2014 across complex global environments."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '14px',
      marginTop: '36px'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: onRequest
  }, "Request a Briefing"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg"
  }, "Capability Statement")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '20px',
      marginTop: '48px'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/badges/gsa_schedule_gold.png",
    alt: "GSA Schedule",
    style: {
      height: '58px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '11px',
      color: 'var(--text-muted)',
      lineHeight: 1.8,
      paddingLeft: '20px',
      borderLeft: '1px solid var(--border-hairline)'
    }
  }, "GSA MAS 47QRAA25D004V", /*#__PURE__*/React.createElement("br", null), "UEI C6QCCKKD7MQ6 \xB7 CAGE 7K4T0")))));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/capability_site/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/capability_site/Numbers.jsx
try { (() => {
/* Hive International — By the Numbers band (UI kit surface) */
function Numbers() {
  const {
    StatBlock,
    Eyebrow
  } = window.HiveInternationalDesignSystem_54bd19;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--surface-sunken)',
      padding: '80px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      backgroundImage: 'url(../../assets/patterns/honeycomb.svg)',
      backgroundSize: '128px auto',
      opacity: 0.07,
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 'var(--container-max)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "By the Numbers"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '0',
      marginTop: '36px'
    }
  }, /*#__PURE__*/React.createElement(StatBlock, {
    value: "40+",
    label: "Countries Engaged",
    detail: "Cross-border operations"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    value: "1,200+",
    label: "Practitioners Trained",
    detail: "Law enforcement & military",
    divider: true
  }), /*#__PURE__*/React.createElement(StatBlock, {
    value: "6",
    label: "Capability Domains",
    detail: "From forensics to border",
    divider: true
  }), /*#__PURE__*/React.createElement(StatBlock, {
    value: "97%",
    label: "Client Retention",
    detail: "Repeat engagements",
    divider: true
  }))));
}
window.Numbers = Numbers;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/capability_site/Numbers.jsx", error: String((e && e.message) || e) }); }

// ui_kits/capability_site/Overlays.jsx
try { (() => {
/* Hive International — Overlays: capability detail + briefing request (UI kit) */
function Backdrop({
  children,
  onClose
}) {
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      background: 'rgba(10,14,18,0.72)',
      backdropFilter: 'blur(3px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: '100%',
      maxWidth: '520px'
    }
  }, children));
}
function CapabilityModal({
  cap,
  onClose
}) {
  const {
    Card,
    Tag,
    Eyebrow,
    Button
  } = window.HiveInternationalDesignSystem_54bd19;
  if (!cap) return null;
  return /*#__PURE__*/React.createElement(Backdrop, {
    onClose: onClose
  }, /*#__PURE__*/React.createElement(Card, {
    hexTexture: true,
    padding: "34px",
    style: {
      boxShadow: 'var(--shadow-lg)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, cap.tag), /*#__PURE__*/React.createElement("span", {
    onClick: onClose,
    style: {
      cursor: 'pointer',
      color: 'var(--text-muted)',
      fontSize: '20px',
      lineHeight: 1
    }
  }, "\xD7")), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '34px',
      letterSpacing: '0.03em',
      color: 'var(--text-strong)',
      margin: '18px 0 14px'
    }
  }, cap.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '14.5px',
      lineHeight: 1.7,
      color: 'var(--text-body)',
      margin: 0
    }
  }, cap.body), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '13.5px',
      lineHeight: 1.7,
      color: 'var(--text-muted)',
      margin: '14px 0 0'
    }
  }, "Engagements are scoped around measurable operational outcomes and delivered by embedded advisors with field-tested expertise. Hive coordinates across jurisdictions to build trusted practitioner ecosystems."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '12px',
      marginTop: '26px'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: onClose
  }, "Request a Briefing"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: onClose
  }, "Close"))));
}
function BriefingModal({
  open,
  onClose
}) {
  const {
    Card,
    Eyebrow,
    Button,
    Input
  } = window.HiveInternationalDesignSystem_54bd19;
  const [sent, setSent] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [err, setErr] = React.useState(false);
  React.useEffect(() => {
    if (open) {
      setSent(false);
      setEmail('');
      setErr(false);
    }
  }, [open]);
  if (!open) return null;
  const submit = () => {
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setErr(true);
      return;
    }
    setSent(true);
  };
  return /*#__PURE__*/React.createElement(Backdrop, {
    onClose: onClose
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "34px",
    style: {
      boxShadow: 'var(--shadow-lg)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Request a Briefing"), /*#__PURE__*/React.createElement("span", {
    onClick: onClose,
    style: {
      cursor: 'pointer',
      color: 'var(--text-muted)',
      fontSize: '20px',
      lineHeight: 1
    }
  }, "\xD7")), sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 0 4px'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '30px',
      letterSpacing: '0.03em',
      color: 'var(--text-strong)',
      margin: '0 0 10px'
    }
  }, "Request received."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '14px',
      color: 'var(--text-muted)',
      lineHeight: 1.6,
      margin: 0
    }
  }, "A Hive advisor will follow up at ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--hive-gold)'
    }
  }, email), " within one business day."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '24px'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: onClose
  }, "Done"))) : /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '20px',
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Full Name",
    placeholder: "First Last"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Work Email",
    type: "email",
    placeholder: "name@agency.gov",
    value: email,
    error: err,
    helper: err ? 'Enter a valid email address' : 'Government and partner addresses preferred',
    onChange: e => {
      setEmail(e.target.value);
      setErr(false);
    }
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Area of Interest",
    placeholder: "e.g. Border targeting, digital forensics"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '6px'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: submit
  }, "Submit Request")))));
}
window.CapabilityModal = CapabilityModal;
window.BriefingModal = BriefingModal;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/capability_site/Overlays.jsx", error: String((e && e.message) || e) }); }

// ui_kits/capability_site/SiteNav.jsx
try { (() => {
/* Hive International — Site Nav (UI kit surface) */
const DS = window.HiveInternationalDesignSystem_54bd19;
function SiteNav({
  onRequest
}) {
  const {
    Button
  } = DS;
  const links = ['Capabilities', 'Approach', 'Engagements', 'Contact'];
  const [open, setOpen] = React.useState(null);
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: 'rgba(20,27,34,0.92)',
      backdropFilter: 'blur(8px)',
      borderBottom: '1px solid var(--border-hairline)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 40px',
      height: '68px'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/hive_horizontal_gold_charcoal.svg",
    alt: "Hive International",
    style: {
      height: '34px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '34px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '30px'
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: '#' + l.toLowerCase(),
    onMouseEnter: () => setOpen(l),
    onMouseLeave: () => setOpen(null),
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '12px',
      fontWeight: 600,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      textDecoration: 'none',
      color: open === l ? 'var(--hive-gold)' : 'var(--text-muted)',
      transition: 'color var(--duration-fast) var(--ease-standard)'
    }
  }, l))), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    onClick: onRequest
  }, "Request Briefing")));
}
window.SiteNav = SiteNav;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/capability_site/SiteNav.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.InfoBlock = __ds_scope.InfoBlock;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.StatBlock = __ds_scope.StatBlock;

__ds_ns.Tag = __ds_scope.Tag;

})();

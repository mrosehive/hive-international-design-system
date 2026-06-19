/* Hive International — By the Numbers band (UI kit surface) */
function Numbers() {
  const { StatBlock, Eyebrow } = window.HiveInternationalDesignSystem_54bd19;
  return (
    <section style={{ position: 'relative', overflow: 'hidden', background: 'var(--surface-sunken)', padding: '80px 40px' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(../../assets/patterns/honeycomb.svg)', backgroundSize: '128px auto', opacity: 0.07, pointerEvents: 'none' }} />
      <div style={{ position: 'relative', maxWidth: 'var(--container-max)', margin: '0 auto' }}>
        <Eyebrow>By the Numbers</Eyebrow>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0', marginTop: '36px' }}>
          <StatBlock value="40+" label="Countries Engaged" detail="Cross-border operations" />
          <StatBlock value="1,200+" label="Practitioners Trained" detail="Law enforcement & military" divider />
          <StatBlock value="6" label="Capability Domains" detail="From forensics to border" divider />
          <StatBlock value="97%" label="Client Retention" detail="Repeat engagements" divider />
        </div>
      </div>
    </section>
  );
}
window.Numbers = Numbers;

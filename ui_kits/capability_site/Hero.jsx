/* Hive International — Hero (UI kit surface) */
function Hero({ onRequest }) {
  const { Button } = window.HiveInternationalDesignSystem_54bd19;
  return (
    <section style={{ position: 'relative', overflow: 'hidden', background: 'var(--surface-base)' }}>
      {/* faint hex texture */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'url(../../assets/patterns/honeycomb-slate.png)', backgroundSize: '234px auto',
        opacity: 0.55, pointerEvents: 'none',
      }} />
      {/* oversized globe watermark */}
      <img src="../../assets/logos/globe_slate.svg" alt="" aria-hidden="true" style={{
        position: 'absolute', right: '-90px', top: '50%', transform: 'translateY(-50%)',
        height: '560px', opacity: 0.10, pointerEvents: 'none',
      }} />
      {/* depth wash */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(90deg, var(--hive-deep-slate) 0%, rgba(20,27,34,0) 55%)',
        pointerEvents: 'none',
      }} />

      <div style={{ position: 'relative', maxWidth: 'var(--container-max)', margin: '0 auto', padding: '110px 40px 96px' }}>
        <div style={{ maxWidth: '720px' }}>
          <div style={{
            fontFamily: 'var(--font-body)', fontSize: '11px', fontWeight: 600,
            letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-accent)',
          }}>Global Security · Criminal Justice · Operational Advisory</div>
          <div style={{ width: '48px', height: '2px', background: 'var(--hive-gold)', margin: '18px 0 26px' }} />

          <h1 style={{
            fontFamily: 'var(--font-display)', fontSize: '84px', lineHeight: 0.94,
            letterSpacing: '0.03em', color: 'var(--text-strong)', margin: 0,
          }}>
            ADVISORY DEPTH.<br /><span style={{ color: 'var(--hive-gold)' }}>OPERATIONAL RESULTS.</span>
          </h1>

          <p style={{
            fontFamily: 'var(--font-body)', fontSize: '18px', fontWeight: 300, lineHeight: 1.6,
            color: 'var(--text-body)', margin: '28px 0 0', maxWidth: '600px',
          }}>
            Hive International delivers embedded operational advisory support for criminal justice,
            investigations, digital forensics, and border security missions — across complex global environments.
          </p>

          <div style={{ display: 'flex', gap: '14px', marginTop: '36px' }}>
            <Button variant="primary" size="lg" onClick={onRequest}>Request a Briefing</Button>
            <Button variant="secondary" size="lg">Capability Statement</Button>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginTop: '48px' }}>
            <img src="../../assets/badges/gsa_schedule_gold.png" alt="GSA Schedule" style={{ height: '58px' }} />
            <div style={{
              fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-muted)',
              lineHeight: 1.8, paddingLeft: '20px', borderLeft: '1px solid var(--border-hairline)',
            }}>
              GSA MAS 47QRAA25D004V<br />UEI C6QCCKKD7MQ6 · CAGE 7K4T0
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
window.Hero = Hero;

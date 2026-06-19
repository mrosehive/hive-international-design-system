/* Hive International — Contact footer (UI kit surface) */
function ContactFooter() {
  const cols = [
    { h: 'Capabilities', items: ['Criminal Justice Advisory', 'Digital Forensics', 'Border Security', 'Intelligence Modernization'] },
    { h: 'Firm', items: ['Approach', 'Engagements', 'Leadership', 'Careers'] },
    { h: 'Contract', items: ['GSA Schedule', 'Capability Statement', 'Past Performance', 'Vehicles'] },
  ];
  return (
    <footer id="contact" style={{ background: 'var(--surface-sunken)', borderTop: '1px solid var(--border-hairline)' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '64px 40px 0', display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: '40px' }}>
        <div>
          <img src="../../assets/logos/hive_stacked_gold_charcoal.svg" alt="Hive International" style={{ height: '72px', display: 'block' }} />
          <div style={{ marginTop: '18px', fontFamily: 'var(--font-display)', fontSize: '15px', letterSpacing: '0.05em' }}>
            <span style={{ color: 'var(--hive-gold)' }}>ADVISORY DEPTH.</span>{' '}
            <span style={{ color: 'var(--text-muted)' }}>OPERATIONAL RESULTS.</span>
          </div>
          <div style={{ display: 'flex', gap: '14px', marginTop: '22px' }}>
            <img src="../../assets/badges/gsa_schedule_warmwhite.png" alt="GSA Schedule" style={{ height: '52px' }} />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--text-muted)', alignSelf: 'center' }}>GSA MAS 47QRAA25D004V</span>
          </div>
        </div>
        {cols.map((col) => (
          <div key={col.h}>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-accent)', marginBottom: '16px' }}>{col.h}</div>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '11px' }}>
              {col.items.map((it) => (
                <li key={it}><a href="#" style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--text-muted)', textDecoration: 'none' }}>{it}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '40px', marginTop: '40px', borderTop: '1px solid var(--border-hairline)', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-muted)' }}>UEI C6QCCKKD7MQ6 · CAGE 7K4T0 · GSA MAS 47QRAA25D004V</span>
        <span style={{ fontFamily: 'var(--font-body)', fontSize: '11px', color: 'var(--text-muted)', opacity: 0.7 }}>© 2026 Hive International, LLC · hiveintl.com</span>
      </div>
    </footer>
  );
}
window.ContactFooter = ContactFooter;

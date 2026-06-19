/* Hive International — Site Nav (UI kit surface) */
const DS = window.HiveInternationalDesignSystem_54bd19;

function SiteNav({ onRequest }) {
  const { Button } = DS;
  const links = ['Capabilities', 'Approach', 'Engagements', 'Contact'];
  const [open, setOpen] = React.useState(null);
  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: 'rgba(20,27,34,0.92)',
      backdropFilter: 'blur(8px)',
      borderBottom: '1px solid var(--border-hairline)',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 40px', height: '68px',
    }}>
      <img src="../../assets/logos/hive_horizontal_gold_charcoal.svg" alt="Hive International" style={{ height: '34px' }} />
      <div style={{ display: 'flex', alignItems: 'center', gap: '34px' }}>
        <div style={{ display: 'flex', gap: '30px' }}>
          {links.map((l) => (
            <a key={l} href={'#' + l.toLowerCase()}
              onMouseEnter={() => setOpen(l)} onMouseLeave={() => setOpen(null)}
              style={{
                fontFamily: 'var(--font-body)', fontSize: '12px', fontWeight: 600,
                letterSpacing: '0.12em', textTransform: 'uppercase', textDecoration: 'none',
                color: open === l ? 'var(--hive-gold)' : 'var(--text-muted)',
                transition: 'color var(--duration-fast) var(--ease-standard)',
              }}>{l}</a>
          ))}
        </div>
        <Button variant="primary" size="sm" onClick={onRequest}>Request Briefing</Button>
      </div>
    </nav>
  );
}
window.SiteNav = SiteNav;

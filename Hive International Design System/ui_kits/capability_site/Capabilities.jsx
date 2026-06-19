/* Hive International — Capabilities grid (UI kit surface) */
const CAPABILITIES = [
  { n: '01', title: 'Criminal Justice Advisory', tag: 'Advisory', body: 'Capacity-building for criminal justice institutions countering transnational organized crime.' },
  { n: '02', title: 'Digital Forensics', tag: 'Forensics', body: 'Evidence handling, examination workflows, and intelligence-informed lab modernization.' },
  { n: '03', title: 'Border Security & Targeting', tag: 'Border', body: 'Intelligence-led border security, customs targeting, and trade enforcement advisory.' },
  { n: '04', title: 'Intelligence Modernization', tag: 'Intel', body: 'Standing up intelligence-led operating models and analytic tradecraft for partner agencies.' },
  { n: '05', title: 'Investigations Support', tag: 'Investigations', body: 'Multi-jurisdictional investigation support, coordination, and case-management capability.' },
  { n: '06', title: 'Training & Capacity-Building', tag: 'Training', body: 'Field-delivered training for law enforcement, military, and public-safety practitioners.' },
];

function Capabilities({ onSelect, activeTag, onFilter }) {
  const { Card, Tag, Eyebrow } = window.HiveInternationalDesignSystem_54bd19;
  const tags = ['All', ...CAPABILITIES.map((c) => c.tag)];
  const shown = activeTag && activeTag !== 'All'
    ? CAPABILITIES.filter((c) => c.tag === activeTag)
    : CAPABILITIES;

  return (
    <section id="capabilities" style={{ background: 'var(--surface-base)', padding: '88px 40px' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '24px', marginBottom: '40px' }}>
          <div>
            <Eyebrow>What We Do</Eyebrow>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '48px', letterSpacing: '0.04em', color: 'var(--text-strong)', margin: '14px 0 0' }}>
              Operational Capabilities
            </h2>
          </div>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {tags.map((t) => (
              <Tag key={t} active={(activeTag || 'All') === t} onClick={() => onFilter(t)}>{t}</Tag>
            ))}
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
          {shown.map((c) => (
            <Card key={c.n} interactive padding="28px" onClick={() => onSelect(c)}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '26px', color: 'var(--hive-gold)', letterSpacing: '0.04em' }}>{c.n}</span>
                <Tag>{c.tag}</Tag>
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '23px', letterSpacing: '0.03em', color: 'var(--text-strong)', margin: '22px 0 10px' }}>{c.title}</h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '13.5px', lineHeight: 1.65, color: 'var(--text-muted)', margin: 0 }}>{c.body}</p>
              <div style={{ marginTop: '20px', fontFamily: 'var(--font-body)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-accent)' }}>
                View detail →
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Capabilities = Capabilities;

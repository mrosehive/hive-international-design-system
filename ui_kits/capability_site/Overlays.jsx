/* Hive International — Overlays: capability detail + briefing request (UI kit) */
function Backdrop({ children, onClose }) {
  return (
    <div onClick={onClose} style={{
      position: 'fixed', inset: 0, zIndex: 100,
      background: 'rgba(10,14,18,0.72)', backdropFilter: 'blur(3px)',
      display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px',
    }}>
      <div onClick={(e) => e.stopPropagation()} style={{ width: '100%', maxWidth: '520px' }}>{children}</div>
    </div>
  );
}

function CapabilityModal({ cap, onClose }) {
  const { Card, Tag, Eyebrow, Button } = window.HiveInternationalDesignSystem_54bd19;
  if (!cap) return null;
  return (
    <Backdrop onClose={onClose}>
      <Card hexTexture padding="34px" style={{ boxShadow: 'var(--shadow-lg)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <Eyebrow>{cap.tag}</Eyebrow>
          <span onClick={onClose} style={{ cursor: 'pointer', color: 'var(--text-muted)', fontSize: '20px', lineHeight: 1 }}>×</span>
        </div>
        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '34px', letterSpacing: '0.03em', color: 'var(--text-strong)', margin: '18px 0 14px' }}>{cap.title}</h3>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '14.5px', lineHeight: 1.7, color: 'var(--text-body)', margin: 0 }}>{cap.body}</p>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '13.5px', lineHeight: 1.7, color: 'var(--text-muted)', margin: '14px 0 0' }}>
          Engagements are scoped around measurable operational outcomes and delivered by embedded advisors with
          field-tested expertise. Hive coordinates across jurisdictions to build trusted practitioner ecosystems.
        </p>
        <div style={{ display: 'flex', gap: '12px', marginTop: '26px' }}>
          <Button variant="primary" onClick={onClose}>Request a Briefing</Button>
          <Button variant="ghost" onClick={onClose}>Close</Button>
        </div>
      </Card>
    </Backdrop>
  );
}

function BriefingModal({ open, onClose }) {
  const { Card, Eyebrow, Button, Input } = window.HiveInternationalDesignSystem_54bd19;
  const [sent, setSent] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [err, setErr] = React.useState(false);
  React.useEffect(() => { if (open) { setSent(false); setEmail(''); setErr(false); } }, [open]);
  if (!open) return null;

  const submit = () => {
    if (!/^\S+@\S+\.\S+$/.test(email)) { setErr(true); return; }
    setSent(true);
  };

  return (
    <Backdrop onClose={onClose}>
      <Card padding="34px" style={{ boxShadow: 'var(--shadow-lg)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <Eyebrow>Request a Briefing</Eyebrow>
          <span onClick={onClose} style={{ cursor: 'pointer', color: 'var(--text-muted)', fontSize: '20px', lineHeight: 1 }}>×</span>
        </div>
        {sent ? (
          <div style={{ padding: '20px 0 4px' }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '30px', letterSpacing: '0.03em', color: 'var(--text-strong)', margin: '0 0 10px' }}>Request received.</h3>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>
              A Hive advisor will follow up at <span style={{ color: 'var(--hive-gold)' }}>{email}</span> within one business day.
            </p>
            <div style={{ marginTop: '24px' }}><Button variant="secondary" onClick={onClose}>Done</Button></div>
          </div>
        ) : (
          <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <Input label="Full Name" placeholder="First Last" />
            <Input label="Work Email" type="email" placeholder="name@agency.gov"
              value={email} error={err}
              helper={err ? 'Enter a valid email address' : 'Government and partner addresses preferred'}
              onChange={(e) => { setEmail(e.target.value); setErr(false); }} />
            <Input label="Area of Interest" placeholder="e.g. Border targeting, digital forensics" />
            <div style={{ marginTop: '6px' }}><Button variant="primary" size="lg" onClick={submit}>Submit Request</Button></div>
          </div>
        )}
      </Card>
    </Backdrop>
  );
}
window.CapabilityModal = CapabilityModal;
window.BriefingModal = BriefingModal;

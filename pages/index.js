import Navbar from '../components/Navbar';
import FeedbackForm from '../components/FeedbackForm';

const STATS = [
  { value: '2 min', label: 'to complete' },
  { value: '100%', label: 'confidential' },
  { value: 'Live', label: 'on dashboard' },
];

export default function Home() {
  return (
    <div style={s.page}>
      <Navbar />
      <main style={s.main}>

        <div style={s.left}>
          <div style={s.pill}>Course Evaluation</div>
          <h1 style={s.h1}>Your feedback shapes<br />better learning</h1>
          <p style={s.sub}>Help faculty understand what is working and where courses can improve. Every submission counts.</p>

          <div style={s.statsRow}>
            {STATS.map(({ value, label }) => (
              <div key={label} style={s.stat}>
                <div style={s.statVal}>{value}</div>
                <div style={s.statLabel}>{label}</div>
              </div>
            ))}
          </div>

          <div style={s.divider} />

          <div style={s.note}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, marginTop: 1 }}>
              <circle cx="8" cy="8" r="7" stroke="#8B5CF6" strokeWidth="1.5"/>
              <path d="M8 5v4M8 11v.5" stroke="#8B5CF6" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <span style={s.noteText}>Submissions are visible to faculty on the dashboard. Identify yourself only if you wish to.</span>
          </div>
        </div>

        <div style={s.right}>
          <div style={s.formCard}>
            <div style={s.formHeader}>
              <div style={s.formTitle}>Submit Feedback</div>
              <div style={s.formSub}>All fields are required</div>
            </div>
            <FeedbackForm />
          </div>
        </div>

      </main>
    </div>
  );
}

const s = {
  page: { minHeight: '100vh', background: '#F7F6F3' },
  main: { maxWidth: 1160, margin: '0 auto', padding: '72px 32px 80px', display: 'grid', gridTemplateColumns: '5fr 6fr', gap: 56, alignItems: 'start' },
  left: { paddingTop: 6 },
  pill: { display: 'inline-flex', alignItems: 'center', gap: 6, background: '#F5F3FF', color: '#7C3AED', fontSize: 12, fontWeight: 600, padding: '5px 13px', borderRadius: 20, marginBottom: 22, border: '1px solid #DDD6FE' },
  h1: { fontSize: 42, fontWeight: 800, lineHeight: 1.12, letterSpacing: '-1.5px', color: '#0F0F0F', marginBottom: 18 },
  sub: { fontSize: 16, color: '#5C5C5C', lineHeight: 1.65, marginBottom: 36, maxWidth: 380 },
  statsRow: { display: 'flex', gap: 0, marginBottom: 36, background: '#fff', borderRadius: 12, border: '1px solid #EBEBEB', overflow: 'hidden' },
  stat: { flex: 1, padding: '16px 20px', borderRight: '1px solid #EBEBEB', textAlign: 'center' },
  statVal: { fontSize: 22, fontWeight: 800, color: '#0F0F0F', letterSpacing: '-0.5px', marginBottom: 2 },
  statLabel: { fontSize: 12, color: '#8C8C8C', fontWeight: 500 },
  divider: { height: 1, background: '#EBEBEB', marginBottom: 24 },
  note: { display: 'flex', gap: 10, alignItems: 'flex-start' },
  noteText: { fontSize: 13, color: '#7C7C7C', lineHeight: 1.6 },
  right: {},
  formCard: { background: '#fff', border: '1px solid #EBEBEB', borderRadius: 20, overflow: 'hidden', boxShadow: '0 8px 40px rgba(0,0,0,0.07)' },
  formHeader: { padding: '28px 28px 0', marginBottom: 24 },
  formTitle: { fontSize: 20, fontWeight: 700, color: '#0F0F0F', letterSpacing: '-0.3px', marginBottom: 4 },
  formSub: { fontSize: 13, color: '#A1A1AA' },
};
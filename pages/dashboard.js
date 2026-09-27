import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import FeedbackCard from '../components/FeedbackCard';
import { fetchAllFeedback } from '../services/api';
import { calculateAverageRating, getRatingBreakdown } from '../utils/formatters';

const RATING_OPTIONS = [
  ['ALL','All Ratings'], ['5','5 — Excellent'], ['4','4 — Very Good'],
  ['3','3 — Satisfactory'], ['2','2 — Marginal'], ['1','1 — Unsatisfactory'],
];

export default function Dashboard() {
  const [feedbackList, setFeedbackList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [ratingFilter, setRatingFilter] = useState('ALL');

  useEffect(() => { load(); }, []);

  const load = async () => {
    setIsLoading(true); setErrorMsg('');
    try { setFeedbackList(await fetchAllFeedback()); }
    catch (err) { setErrorMsg(err.message || 'Failed to load data.'); }
    finally { setIsLoading(false); }
  };

  const filtered = feedbackList.filter(item =>
    (ratingFilter === 'ALL' || String(item.rating) === ratingFilter) &&
    [item.subject, item.studentName, item.comment].some(f => f.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const breakdown = getRatingBreakdown(feedbackList);
  const highCount = (breakdown[5] || 0) + (breakdown[4] || 0);
  const satisfactionPct = feedbackList.length ? Math.round((highCount / feedbackList.length) * 100) : 0;

  const metrics = [
    { label: 'Total Submissions', value: feedbackList.length, unit: 'entries',  accent: '#8B5CF6', lightBg: '#F5F3FF' },
    { label: 'Average Rating',    value: calculateAverageRating(feedbackList), unit: '/ 5.0',   accent: '#059669', lightBg: '#ECFDF5' },
    { label: 'High Satisfaction', value: `${satisfactionPct}%`, unit: 'rated 4–5', accent: '#D97706', lightBg: '#FFFBEB' },
    { label: 'Showing Now',       value: filtered.length, unit: 'filtered',   accent: '#4F46E5', lightBg: '#EEF2FF' },
  ];

  return (
    <div style={s.page}>
      <Navbar />
      <main style={s.main}>

        <div style={s.header}>
          <div>
            <h1 style={s.h1}>Evaluations Dashboard</h1>
            <p style={s.sub}>Aggregated metrics and individual submissions</p>
          </div>
          <button onClick={load} disabled={isLoading} style={{ ...s.refreshBtn, opacity: isLoading ? 0.6 : 1 }}>
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" style={{ marginRight: 6 }}>
              <path d="M11.5 6.5A5 5 0 1 1 6.5 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M8.5 1.5l-2 2 2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {isLoading ? 'Updating...' : 'Refresh'}
          </button>
        </div>

        <div style={s.metrics}>
          {metrics.map(({ label, value, unit, accent, lightBg }) => (
            <div key={label} style={s.metricCard}>
              <div style={{ ...s.metricIcon, background: lightBg, color: accent }}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <rect x="2" y="2" width="6" height="6" rx="1.5" fill="currentColor" opacity="0.7"/>
                  <rect x="10" y="2" width="6" height="6" rx="1.5" fill="currentColor" opacity="0.4"/>
                  <rect x="2" y="10" width="6" height="6" rx="1.5" fill="currentColor" opacity="0.4"/>
                  <rect x="10" y="10" width="6" height="6" rx="1.5" fill="currentColor" opacity="0.7"/>
                </svg>
              </div>
              <span style={s.metricLabel}>{label}</span>
              <div style={s.metricRow}>
                <span style={{ ...s.metricVal, color: accent }}>{value}</span>
                <span style={s.metricUnit}>{unit}</span>
              </div>
            </div>
          ))}
        </div>

        <div style={s.toolbar}>
          <div style={s.searchBox}>
            <svg style={s.searchIcon} width="15" height="15" viewBox="0 0 16 16" fill="none">
              <circle cx="6.5" cy="6.5" r="5" stroke="#B0B0B0" strokeWidth="1.5"/>
              <path d="M10.5 10.5L14 14" stroke="#B0B0B0" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <input type="text" placeholder="Search student, subject, or keyword..."
              value={searchQuery} onChange={e => setSearchQuery(e.target.value)} style={s.searchInput} />
          </div>
          <select value={ratingFilter} onChange={e => setRatingFilter(e.target.value)} style={s.select}>
            {RATING_OPTIONS.map(([v, l]) => <option key={v} value={v}>{l}</option>)}
          </select>
        </div>

        {errorMsg && <div style={s.errorBox}>{errorMsg}</div>}

        {isLoading ? (
          <div style={s.empty}>Loading entries...</div>
        ) : filtered.length === 0 ? (
          <div style={s.empty}>No records match the selected filters.</div>
        ) : (
          filtered.map(item => <FeedbackCard key={item.id} feedback={item} />)
        )}

      </main>
    </div>
  );
}

const s = {
  page: { minHeight: '100vh', background: '#F7F6F3' },
  main: { maxWidth: 1160, margin: '0 auto', padding: '48px 32px 64px' },
  header: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 28 },
  h1: { fontSize: 28, fontWeight: 800, color: '#0F0F0F', marginBottom: 4, letterSpacing: '-0.6px' },
  sub: { fontSize: 14, color: '#7C7C7C' },
  refreshBtn: { display: 'flex', alignItems: 'center', background: '#fff', border: '1px solid #EBEBEB', color: '#3D3D3D', padding: '8px 16px', borderRadius: 9, fontSize: 13.5, fontWeight: 600, cursor: 'pointer', marginTop: 4 },
  metrics: { display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14, marginBottom: 24 },
  metricCard: { background: '#fff', border: '1px solid #EBEBEB', borderRadius: 14, padding: '20px 20px 18px', display: 'flex', flexDirection: 'column', gap: 6 },
  metricIcon: { width: 36, height: 36, borderRadius: 9, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 4 },
  metricLabel: { fontSize: 12.5, fontWeight: 500, color: '#8C8C8C' },
  metricRow: { display: 'flex', alignItems: 'baseline', gap: 5 },
  metricVal: { fontSize: 30, fontWeight: 800, letterSpacing: '-1px', lineHeight: 1 },
  metricUnit: { fontSize: 12, color: '#B0B0B0', fontWeight: 500 },
  toolbar: { display: 'flex', gap: 10, marginBottom: 18 },
  searchBox: { flex: 1, position: 'relative', display: 'flex', alignItems: 'center' },
  searchIcon: { position: 'absolute', left: 13, pointerEvents: 'none' },
  searchInput: { width: '100%', padding: '10px 14px 10px 38px', border: '1px solid #E4E4E7', borderRadius: 9, fontSize: 14, color: '#0F0F0F', background: '#fff', fontFamily: 'inherit' },
  select: { padding: '10px 14px', border: '1px solid #E4E4E7', borderRadius: 9, fontSize: 14, color: '#0F0F0F', background: '#fff', minWidth: 165, cursor: 'pointer', fontFamily: 'inherit' },
  errorBox: { background: '#FEF2F2', color: '#991B1B', border: '1px solid #FECACA', borderRadius: 9, padding: '14px 18px', fontSize: 13.5, marginBottom: 16 },
  empty: { background: '#fff', border: '1.5px dashed #E4E4E7', borderRadius: 12, padding: '56px 32px', textAlign: 'center', color: '#B0B0B0', fontSize: 14, fontWeight: 500 },
};
import { formatDate } from '../utils/formatters';

const RATING_CONFIG = {
  5: { label: 'Excellent',      bg: '#F0FDF4', color: '#15803D', dot: '#22C55E' },
  4: { label: 'Very Good',      bg: '#ECFDF5', color: '#059669', dot: '#34D399' },
  3: { label: 'Satisfactory',   bg: '#FFFBEB', color: '#B45309', dot: '#F59E0B' },
  2: { label: 'Marginal',       bg: '#FFF7ED', color: '#C2410C', dot: '#FB923C' },
  1: { label: 'Unsatisfactory', bg: '#FEF2F2', color: '#B91C1C', dot: '#F87171' },
};

const AVATAR_COLORS = ['#7C3AED','#4F46E5','#0369A1','#059669','#B45309','#C2410C'];
const getColor = (name) => AVATAR_COLORS[(name?.charCodeAt(0) || 0) % AVATAR_COLORS.length];

export default function FeedbackCard({ feedback }) {
  if (!feedback) return null;
  const { studentName, subject, rating, comment, createdAt } = feedback;
  const cfg = RATING_CONFIG[Math.round(Number(rating))] ?? RATING_CONFIG[3];
  const avatarColor = getColor(studentName);

  return (
    <div style={s.card}>
      <div style={s.header}>
        <div style={s.left}>
          <div style={{ ...s.avatar, background: avatarColor }}>
            {(studentName || 'A')[0].toUpperCase()}
          </div>
          <div>
            <div style={s.name}>{studentName || 'Anonymous'}</div>
            <div style={s.subject}>{subject || 'General Course'}</div>
          </div>
        </div>
        <div style={{ ...s.badge, background: cfg.bg, color: cfg.color }}>
          <span style={{ ...s.dot, background: cfg.dot }} />
          {rating}/5 &middot; {cfg.label}
        </div>
      </div>

      <p style={s.comment}>{comment}</p>

      <div style={s.footer}>
        <span style={s.date}>{formatDate(createdAt)}</span>
      </div>
    </div>
  );
}

const s = {
  card: { background: '#fff', border: '1px solid #EBEBEB', borderRadius: 14, padding: '20px 22px', marginBottom: 12 },
  header: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 14, gap: 12 },
  left: { display: 'flex', alignItems: 'center', gap: 12 },
  avatar: { width: 38, height: 38, borderRadius: '50%', color: '#fff', fontWeight: 700, fontSize: 15, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 },
  name: { fontSize: 14.5, fontWeight: 700, color: '#0F0F0F', marginBottom: 3 },
  subject: { fontSize: 12, color: '#6B6B6B', background: '#F4F4F5', padding: '2px 9px', borderRadius: 5, display: 'inline-block', fontWeight: 500 },
  badge: { display: 'flex', alignItems: 'center', gap: 6, padding: '5px 12px', borderRadius: 20, fontSize: 12.5, fontWeight: 600, flexShrink: 0, whiteSpace: 'nowrap' },
  dot: { width: 7, height: 7, borderRadius: '50%', flexShrink: 0 },
  comment: { fontSize: 14, color: '#3D3D3D', lineHeight: 1.7, margin: '0 0 16px', paddingLeft: 2 },
  footer: { borderTop: '1px solid #F2F2F2', paddingTop: 12, display: 'flex', justifyContent: 'flex-end' },
  date: { fontSize: 12, color: '#ADADAD', fontWeight: 500 },
};
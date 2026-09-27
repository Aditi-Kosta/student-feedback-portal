import { useState } from 'react';
import { submitFeedback } from '../services/api';

const RATINGS = [
  ['5', 'Excellent'], ['4', 'Very Good'], ['3', 'Satisfactory'],
  ['2', 'Marginal'], ['1', 'Unsatisfactory'],
];

const validate = ({ studentName, subject, comment }) => {
  const e = {};
  if (!studentName.trim()) e.studentName = 'Name is required.';
  if (!subject.trim()) e.subject = 'Subject is required.';
  if (!comment.trim()) e.comment = 'Comment is required.';
  else if (comment.trim().length < 10) e.comment = 'Must be at least 10 characters.';
  else if (comment.length > 500) e.comment = 'Cannot exceed 500 characters.';
  return e;
};

export default function FeedbackForm({ onSuccess }) {
  const [form, setForm] = useState({ studentName: '', subject: '', rating: '5', comment: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);
  const [serverMsg, setServerMsg] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setStatus('loading');
    try {
      await submitFeedback({ ...form, studentName: form.studentName.trim(), subject: form.subject.trim(), comment: form.comment.trim(), rating: Number(form.rating) });
      setStatus('success');
      setForm({ studentName: '', subject: '', rating: '5', comment: '' });
      onSuccess?.();
    } catch (err) {
      setStatus('error');
      setServerMsg(err.message || 'Submission failed.');
    }
  };

  const charCount = form.comment.length;

  return (
    <form onSubmit={handleSubmit} style={s.form}>
      {status === 'success' && (
        <div style={s.banner.success}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="7" fill="#22C55E"/><path d="M5 8l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          Feedback submitted successfully.
        </div>
      )}
      {status === 'error' && (
        <div style={s.banner.error}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="7" fill="#EF4444"/><path d="M8 5v4M8 11v.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/></svg>
          {serverMsg}
        </div>
      )}

      <Field label="Student Full Name" error={errors.studentName}>
        <input name="studentName" value={form.studentName} onChange={handleChange}
          placeholder="e.g. Aditi Kosta" style={inp(!!errors.studentName)} disabled={status === 'loading'} />
      </Field>

      <div style={s.row}>
        <Field label="Subject / Course" error={errors.subject} flex={2}>
          <input name="subject" value={form.subject} onChange={handleChange}
            placeholder="e.g. Web Programming" style={inp(!!errors.subject)} disabled={status === 'loading'} />
        </Field>
        <Field label="Rating" flex={1}>
          <select name="rating" value={form.rating} onChange={handleChange}
            style={inp(false)} disabled={status === 'loading'}>
            {RATINGS.map(([v, l]) => <option key={v} value={v}>{v} — {l}</option>)}
          </select>
        </Field>
      </div>

      <Field
        label="Feedback Comment" error={errors.comment}
        aside={<span style={{ fontSize: 12, color: charCount > 450 ? '#D97706' : '#B0B0B0' }}>{charCount}/500</span>}
      >
        <textarea name="comment" rows={5} value={form.comment} onChange={handleChange}
          placeholder="Describe course quality, teaching methods, areas for improvement..."
          style={{ ...inp(!!errors.comment), resize: 'vertical', lineHeight: 1.65 }}
          disabled={status === 'loading'} />
      </Field>

      <button type="submit" disabled={status === 'loading'} style={{ ...s.btn, opacity: status === 'loading' ? 0.65 : 1 }}>
        {status === 'loading' ? 'Submitting...' : 'Submit Feedback'}
      </button>
    </form>
  );
}

function Field({ label, error, aside, flex, children }) {
  return (
    <div style={{ marginBottom: 18, display: 'flex', flexDirection: 'column', flex }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 7 }}>
        <label style={{ fontSize: 13, fontWeight: 600, color: '#2D2D2D' }}>{label}</label>
        {aside}
      </div>
      {children}
      {error && <span style={{ fontSize: 12, color: '#DC2626', marginTop: 5 }}>{error}</span>}
    </div>
  );
}

const inp = (hasErr) => ({
  width: '100%', padding: '10px 13px',
  border: `1.5px solid ${hasErr ? '#FCA5A5' : '#E4E4E7'}`,
  borderRadius: 9, fontSize: 14, color: '#0F0F0F',
  background: hasErr ? '#FFF8F8' : '#FAFAF8',
  fontFamily: 'inherit',
});

const s = {
  form: { padding: '0 28px 28px', display: 'flex', flexDirection: 'column' },
  row: { display: 'flex', gap: 12 },
  banner: {
    success: { display: 'flex', alignItems: 'center', gap: 8, background: '#F0FDF4', color: '#166534', border: '1px solid #BBF7D0', borderRadius: 9, padding: '11px 14px', fontSize: 13.5, marginBottom: 18 },
    error:   { display: 'flex', alignItems: 'center', gap: 8, background: '#FEF2F2', color: '#991B1B', border: '1px solid #FECACA', borderRadius: 9, padding: '11px 14px', fontSize: 13.5, marginBottom: 18 },
  },
  btn: { background: 'linear-gradient(135deg,#8B5CF6,#4F46E5)', color: '#fff', border: 'none', padding: '13px 0', borderRadius: 10, fontSize: 15, fontWeight: 700, cursor: 'pointer', letterSpacing: '-0.2px', marginTop: 4 },
};
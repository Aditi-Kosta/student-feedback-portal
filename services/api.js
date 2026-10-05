// TOGGLE THIS SWITCH TO CONNECT TO BACKEND WHEN MERGING
const USE_REAL_BACKEND = true;
const API_URL = process.env.NEXT_PUBLIC_API_URL;

const MOCK_DELAY = 600;

let mockDatabase = [
  { id: '1', studentName: 'Aditi Kosta', subject: 'Web Programming', rating: 5, comment: 'Excellent coursework structure and hands-on laboratory exercises.', createdAt: '2026-09-25T10:00:00Z' },
  { id: '2', studentName: 'Aarya Gaikwad', subject: 'Database Systems', rating: 4, comment: 'Well organized lectures, but additional practical examples would be helpful.', createdAt: '2026-09-26T14:30:00Z' },
];

const isOffline = () => typeof window !== 'undefined' && !navigator.onLine;
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const fetchAllFeedback = async () => {
  if (isOffline()) throw new Error('Network offline. Please check your internet connection.');

  if (USE_REAL_BACKEND) {
    const res = await fetch(`${API_URL}/api/feedback`);
    if (!res.ok) throw new Error(`Server returned status code ${res.status}`);
    return res.json();
  }

  await delay(MOCK_DELAY);
  return [...mockDatabase];
};

export const submitFeedback = async (payload) => {
  if (isOffline()) throw new Error('Network offline. Submission failed.');

  if (!payload.studentName || !payload.subject || !payload.rating || !payload.comment) {
    throw new Error('Invalid payload: Missing required fields.');
  }

  if (USE_REAL_BACKEND) {
    const res = await fetch(`${API_URL}/api/feedback`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err.message || 'Failed to submit feedback.');
    }

    return res.json();
  }

  await delay(MOCK_DELAY);
  const newEntry = {
    id: String(Date.now()),
    ...payload,
    createdAt: new Date().toISOString()
  };

  mockDatabase.unshift(newEntry);
  return newEntry;
};
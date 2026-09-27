const DATE_FORMAT = new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

export const formatDate = (isoString) => {
  if (!isoString) return 'N/A';
  const date = new Date(isoString);
  return isNaN(date) ? 'Invalid Date' : DATE_FORMAT.format(date);
};

export const calculateAverageRating = (feedbackList = []) => {
  if (!feedbackList.length) return '0.0';
  const total = feedbackList.reduce((sum, item) => sum + (Number(item.rating) || 0), 0);
  return (total / feedbackList.length).toFixed(1);
};

export const getRatingBreakdown = (feedbackList = []) =>
  feedbackList.reduce((acc, item) => {
    const r = Math.round(Number(item.rating));
    if (r in acc) acc[r]++;
    return acc;
  }, { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 });

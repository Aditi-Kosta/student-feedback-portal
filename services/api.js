const USE_REAL_BACKEND = false;

const MOCK_DELAY = 300;

let mockDatabase = [
  {
    id: '1',
    studentName: 'Aarya G',
    subject: 'WP',
    rating: 5,
    comment: 'Understanding of the subject is good',
    createdAt: '2026-10-01T14:45:34Z',
  },
  {
    id: '2',
    studentName: 'Aditi Kosta',
    subject: 'Web Programming',
    rating: 5,
    comment: 'Excellent coursework structure and practical exercises.',
    createdAt: '2026-10-01T15:00:00Z',
  },
  {
    id: '3',
    studentName: 'Aarya Gaikwad',
    subject: 'Database Systems',
    rating: 4,
    comment: 'Lectures are well organized, but more practical examples would help.',
    createdAt: '2026-10-01T15:05:00Z',
  },
  {
    id: '4',
    studentName: 'Rahul Sharma',
    subject: 'Data Structures',
    rating: 5,
    comment: 'The concepts were explained clearly and the coding examples were useful.',
    createdAt: '2026-10-01T15:10:00Z',
  },
  {
    id: '5',
    studentName: 'Sneha Patil',
    subject: 'Artificial Intelligence',
    rating: 4,
    comment: 'Good explanation of AI concepts and algorithms.',
    createdAt: '2026-10-01T15:15:00Z',
  },
  {
    id: '6',
    studentName: 'Rohan Mehta',
    subject: 'Web Programming',
    rating: 3,
    comment: 'The topics are useful but some concepts need more detailed explanation.',
    createdAt: '2026-10-01T15:20:00Z',
  },
  {
    id: '7',
    studentName: 'Priya Shah',
    subject: 'Database Systems',
    rating: 5,
    comment: 'Practical SQL sessions were very helpful for understanding the subject.',
    createdAt: '2026-10-01T15:25:00Z',
  },
  {
    id: '8',
    studentName: 'Karan Joshi',
    subject: 'Data Structures',
    rating: 4,
    comment: 'Good balance between theory and programming exercises.',
    createdAt: '2026-10-01T15:30:00Z',
  },
  {
    id: '9',
    studentName: 'Neha Desai',
    subject: 'Machine Learning',
    rating: 5,
    comment: 'The practical demonstrations made the ML concepts easier to understand.',
    createdAt: '2026-10-01T15:35:00Z',
  },
  {
    id: '10',
    studentName: 'Aditya Kulkarni',
    subject: 'Computer Networks',
    rating: 4,
    comment: 'The lectures are informative and the diagrams help in understanding concepts.',
    createdAt: '2026-10-01T15:40:00Z',
  },
  {
    id: '11',
    studentName: 'Isha More',
    subject: 'Artificial Intelligence',
    rating: 3,
    comment: 'The subject is interesting but some topics are quite difficult to understand.',
    createdAt: '2026-10-01T15:45:00Z',
  },
  {
    id: '12',
    studentName: 'Vivek Singh',
    subject: 'Database Systems',
    rating: 5,
    comment: 'Excellent practical sessions and clear explanations of SQL queries.',
    createdAt: '2026-10-01T15:50:00Z',
  },
  {
    id: '13',
    studentName: 'Ananya Rao',
    subject: 'Data Structures',
    rating: 4,
    comment: 'The faculty explains algorithms clearly with useful examples.',
    createdAt: '2026-10-01T15:55:00Z',
  },
  {
    id: '14',
    studentName: 'Omkar Patil',
    subject: 'Machine Learning',
    rating: 5,
    comment: 'Hands-on implementation was very useful and improved my understanding.',
    createdAt: '2026-10-01T16:00:00Z',
  },
  {
    id: '15',
    studentName: 'Riya Shah',
    subject: 'Web Programming',
    rating: 4,
    comment: 'Good practical work and useful assignments throughout the course.',
    createdAt: '2026-10-01T16:05:00Z',
  },
  {
    id: '16',
    studentName: 'Akash Verma',
    subject: 'Computer Networks',
    rating: 3,
    comment: 'The content is useful, but more practical demonstrations would be helpful.',
    createdAt: '2026-10-01T16:10:00Z',
  },
  {
    id: '17',
    studentName: 'Meera Joshi',
    subject: 'Web Programming',
    rating: 2,
    comment: 'The practical sessions are useful, but the pace of teaching is sometimes too fast.',
    createdAt: '2026-10-01T16:15:00Z',
  },
  {
    id: '18',
    studentName: 'Arjun Nair',
    subject: 'Database Systems',
    rating: 1,
    comment: 'The concepts are difficult to follow and more explanation is needed.',
    createdAt: '2026-10-01T16:20:00Z',
  },
  {
    id: '19',
    studentName: 'Tanvi Shah',
    subject: 'Data Structures',
    rating: 2,
    comment: 'Some algorithms are explained well, but the practical sessions could be improved.',
    createdAt: '2026-10-01T16:25:00Z',
  },
  {
    id: '20',
    studentName: 'Yash Gupta',
    subject: 'Machine Learning',
    rating: 1,
    comment: 'The subject is interesting, but I found the lectures difficult to understand.',
    createdAt: '2026-10-01T16:30:00Z',
  },
  {
    id: '21',
    studentName: 'Simran Khan',
    subject: 'Computer Networks',
    rating: 2,
    comment: 'More practical demonstrations and real-world examples would be helpful.',
    createdAt: '2026-10-01T16:35:00Z',
  },
  {
    id: '22',
    studentName: 'Aditi Kosta',
    subject: 'Machine Learning',
    rating: 4,
    comment: 'Good explanation of concepts with useful practical examples.',
    createdAt: '2026-10-01T16:40:00Z',
  },
  {
    id: '23',
    studentName: 'Arya',
    subject: 'Database Systems',
    rating: 4,
    comment: 'Well structured lectures and helpful practical sessions.',
    createdAt: '2026-10-01T16:45:00Z',
  },
];

const delay = (ms) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const fetchAllFeedback = async () => {
  if (USE_REAL_BACKEND) {
    const res = await fetch('/api/feedback');

    if (!res.ok) {
      throw new Error(`Server returned status code ${res.status}`);
    }

    return await res.json();
  }

  await delay(MOCK_DELAY);

  return [...mockDatabase];
};

export const submitFeedback = async (payload) => {
  if (
    !payload.studentName ||
    !payload.subject ||
    !payload.rating ||
    !payload.comment
  ) {
    throw new Error('All fields are required.');
  }

  if (USE_REAL_BACKEND) {
    const res = await fetch('/api/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(
        err.message || 'Failed to submit feedback.'
      );
    }

    return await res.json();
  }

  await delay(MOCK_DELAY);

  const newEntry = {
    id: String(Date.now()),
    studentName: payload.studentName,
    subject: payload.subject,
    rating: Number(payload.rating),
    comment: payload.comment,
    createdAt: new Date().toISOString(),
  };

  mockDatabase.unshift(newEntry);

  return newEntry;
};
const express = require('express');
const cors = require('cors');

const db = require('./db');

const app = express();

app.use(cors());
app.use(express.json());


// GET ALL FEEDBACK
app.get('/api/feedback', (req, res) => {

    const sql = `
        SELECT 
            id,
            studentName,
            subject,
            rating,
            comment,
            createdAt
        FROM feedback
        ORDER BY createdAt DESC
    `;

    db.query(sql, (err, results) => {

        if (err) {
            console.error(err);
            return res.status(500).json({
                message: 'Failed to fetch feedback'
            });
        }

        res.json(results);
    });
});


// SUBMIT FEEDBACK
app.post('/api/feedback', (req, res) => {

    const {
        studentName,
        subject,
        rating,
        comment
    } = req.body;

    if (!studentName || !subject || !rating || !comment) {
        return res.status(400).json({
            message: 'All fields are required'
        });
    }

    const sql = `
        INSERT INTO feedback
        (studentName, subject, rating, comment)
        VALUES (?, ?, ?, ?)
    `;

    const values = [
        studentName,
        subject,
        rating,
        comment
    ];

    db.query(sql, values, (err, result) => {

        if (err) {
            console.error(err);

            return res.status(500).json({
                message: 'Failed to submit feedback'
            });
        }

        res.status(201).json({
            id: result.insertId,
            studentName,
            subject,
            rating,
            comment,
            message: 'Feedback submitted successfully'
        });
    });
});


// START SERVER
const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Backend server running at http://localhost:${PORT}`);
});
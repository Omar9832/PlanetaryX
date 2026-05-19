import express from 'express';
import db from '../db.js';

const router = express.Router();

// GET /users/:id -> fetch user info by ID
router.get('/:id', (req, res) => {
  const userId = req.params.id;

  db.get('SELECT email FROM users WHERE id = ?', [userId], (err, row) => {
    if (err) return res.status(500).json({ error: 'Server error' });
    if (!row) return res.status(404).json({ error: 'User not found' });
    
    // Return only email, never the password
    res.status(200).json({ email: row.email });
  });
});

export default router;

import bcrypt from 'bcrypt';
import express from 'express';
import db from '../db.js';

const router = express.Router();

router.post('/', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) return res.status(400).json({ error: 'Email and password required' });

  db.get('SELECT * FROM users WHERE email = ?', [email], async (err, row) => {
    if (err) return res.status(500).json({ error: 'Database error' });
    if (!row) return res.status(400).json({ error: 'Invalid email or password' });

    const match = await bcrypt.compare(password, row.password);
    if (!match) return res.status(400).json({ error: 'Invalid email or password' });

    res.json({ message: 'Login successful', userId: row.id });
  });
});



export default router;


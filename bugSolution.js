const express = require('express');
const app = express();
app.get('/users/:id', async (req, res) => {
  const userId = req.params.id;
  try {
    // ... database query to fetch user data ...
    const user = await db.query('SELECT * FROM users WHERE id = $1', [userId]);
    if (!user) {
      return res.status(404).send('User not found');
    }
    res.json(user);
  } catch (error) {
    console.error('Database error:', error);
    res.status(500).send('Database error');
  }
});
const express = require('express');
const multer = require('../middleware/upload');
const User = require('../models/User');

const router = express.Router();

// Create or Update User Profile
router.post('/profile', async (req, res) => {
  const { name, email } = req.body;

  try {
    const user = await User.findOneAndUpdate(
      { email },
      { name },
      { new: true, upsert: true }
    );
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: 'Error updating profile' });
  }
});

// Upload Avatar
router.post('/avatar', multer.single('avatar'), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }

  const { email } = req.body;

  try {
    const user = await User.findOneAndUpdate(
      { email },
      { avatar: `/uploads/${req.file.filename}` },
      { new: true }
    );
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: 'Error uploading avatar' });
  }
});

module.exports = router;

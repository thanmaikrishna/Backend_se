const express = require('express');
const Annotation = require('../models/Annotation');

const router = express.Router();

// Add Annotation
router.post('/', async (req, res) => {
  const { userId, videoId, timestamp, text } = req.body;

  try {
    const annotation = new Annotation({ userId, videoId, timestamp, text });
    await annotation.save();
    res.json(annotation);
  } catch (err) {
    res.status(500).json({ error: 'Error adding annotation' });
  }
});

// Get Annotations by Video
router.get('/:videoId', async (req, res) => {
  const { videoId } = req.params;

  try {
    const annotations = await Annotation.find({ videoId }).sort({ timestamp: 1 });
    res.json(annotations);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching annotations' });
  }
});

module.exports = router;

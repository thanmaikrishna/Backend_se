const mongoose = require('mongoose');

const AnnotationSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  videoId: { type: String, required: true },
  timestamp: { type: Number, required: true },
  text: { type: String, required: true },
});

module.exports = mongoose.model('Annotation', AnnotationSchema);

const express = require('express');
const userRoutes = require('./user');
const annotationRoutes = require('./annotation');

const router = express.Router();

router.use('/users', userRoutes);
router.use('/annotations', annotationRoutes);

module.exports = router;

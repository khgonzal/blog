const app = require('express');
const router = app.Router();

// Route files
const category = require('./category/index.js')
const post = require('./post/index.js')

// Routes
router.use('/', category);
router.use('/', post);

module.exports = router;
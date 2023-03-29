const app = require('express');
const router = app.Router();
const category = require('./category/index.js')
const post = require('./post/index.js')
router.use('/', category);
router.use('/', post);

module.exports = router;
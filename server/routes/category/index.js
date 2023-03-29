const app = require('express');
const router = app.Router();

const { Category } = require('../../models/category.js')

router.post('/category', async (req, res) => {
  const newCategory = new Category({
    name: req.body.name,
  });
  const insertCategory = await newCategory.save();
  return res.status(201).json(insertCategory);
});

module.exports = router;


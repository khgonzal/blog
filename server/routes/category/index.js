const app = require('express');
const router = app.Router();

const { Category } = require('../../models/category.js')

router.post('/categories', async (req, res) => {
  const newCategory = new Category({
    name: req.body.name,
  });
  const insertCategory = await newCategory.save();
  return res.status(201).json(insertCategory);
});

router.get('/categories', async (req, res) => {
  const allCategories = await Category.find();
  return res.status(200).json(allCategories);
});

module.exports = router;


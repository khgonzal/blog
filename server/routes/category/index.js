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

router.put('/categories', async (req, res) => {
  const updatedCategory = await Category.findOneAndUpdate({_id: req.body._id}, {name: req.body.name}, {new: true});
  return res.status(200).json(updatedCategory);
});

router.get('/categories', async (req, res) => {
  const allCategories = await Category.find();
  return res.status(200).json(allCategories);
});

router.delete('/categories', async (req, res) => {
  const deletedCategory = await Category.findByIdAndDelete(req.body._id, {new: true});
  return res.status(200).json(deletedCategory);
});

module.exports = router;


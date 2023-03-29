const app = require('express');
const router = app.Router();

const { Posts } = require('../../models/posts.js');

router.post('/posts', async (req, res) => {
  const newPost = new Posts({
    title: req.body.title,
    subtitle: req.body.subtitle,
    body: req.body.body,
    image: req.body.image,
    category: req.body.category,
  });
  const insertPost = await newPost.save();
  return res.status(201).json(insertPost);
});

module.exports = router;


const app = require('express');
const router = app.Router();
const aws = require('aws-sdk');
const multer = require('multer');
const multers3 = require('multer-s3');
const dotenv = require('dotenv');

dotenv.config();

const { Posts } = require('../../models/posts.js');

const s3 = new aws.S3({
  accessKeyId: process.env.AWS_ACESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

const upload = () => {
  return multer({
    storage: multers3({
      s3,
      bucket: process.env.AWS_BUCKET_NAME,
      metadata: function (req, file, cb) {
        cb(null, { fieldName: file.fieldname });
      },
      key: function (req, file, cb) {
        cb(null, `image-${Date.now()}.jpeg`);
      },
    }),
  });
};

router.post('/posts', upload().single('image'), async (req, res) => {
    const newPost = new Posts({
      title: req.body.title,
      subtitle: req.body.subtitle,
      body: req.body.body,
      image: req.file.location,
      category: req.body.category,
    });

    const insertPost = await newPost.save();
    return res.status(201).json(insertPost);
});

router.get('/posts', async (req, res) => {
  try {
    const allPosts = await Posts.find();
    return res.status(200).json(allPosts);
  } catch (err) {
    throw new Error(err)
  }
});

router.get('/posts/:categoryId', async (req, res) => {
  try {
    const categoryId = req.params.categoryId;
    const posts = await Posts.find({ category: categoryId }).populate('category');
    return res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

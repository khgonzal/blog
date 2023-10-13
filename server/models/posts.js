const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  category: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
  }],
});

const Posts = mongoose.model('Posts', PostSchema);

module.exports = { Posts };

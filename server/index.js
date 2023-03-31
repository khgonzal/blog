const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const router = require('./routes/index.js')
var cors = require('cors')

dotenv.config();

mongoose.connect(process.env.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('connected', () => {
  console.log('db connected');
});

db.on('disconnected', () => {
  console.log('db disconnected');
});1

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors())

app.use('/', router)

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Magic happens on port ${PORT}`));

module.exports = { db };

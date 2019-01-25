
const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./routes/userRouter');

const app = express();

app.use(userRouter);
app.use(bikeRouter);
app.use(bodyParser.json());

const { NODE_ENV } = process.env;
let urlPath = '';

switch (NODE_ENV) {
  case 'development':
    urlPath = 'mongodb://localhost:27017/stlnBikeApp';
    break;
  case 'production':
    urlPath = 'mongodb://xxx:27017/stlnBikeApp';
    break;
}

mongoose.Promise = global.Promise;
mongoose.connect(urlPath, { useNewUrlParser: true });

mongoose.connection.on('connected', function () {
  console.log(`Connected to ${urlPath}`);
});

app.listen(3000, () => {
  console.log('Server has started at port 3000');
});

module.exports = { app };



const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./routes/userRouter');
const bikeRouter = require('./routes/bikeRouter');

const app = express();

app.use(bodyParser.json());
app.use(userRouter);
app.use(bikeRouter);

const { NODE_ENV } = process.env;
const hostLocal = 'mongodb://localhost:27017/';
const dataBase = 'stlnBikeApp';
let urlPath = '';
let port = 3001;

switch (NODE_ENV) {
  case 'production':
    urlPath = `mongodb://xxx:27017/${dataBase}`;
    break;
  case 'development':
    urlPath = `${hostLocal}${dataBase}`;
    break;
  case 'test':
    urlPath = `${hostLocal}stlnBikeAppTest`;
    port = 3002;
    break;
}

mongoose.Promise = global.Promise;
mongoose.connect(urlPath, { useNewUrlParser: true });

mongoose.connection.on('connected', function () {
  console.log(`Connected to ${urlPath}`);
});

app.listen(port, () => {
  console.log(`Server has started at port ${port}`);
});

module.exports = { app };


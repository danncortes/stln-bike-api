
const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./routes/userRouter');

const app = express();

app.use(userRouter);
app.use(bodyParser.json());

const { NODE_ENV } = process.env;
let urlPath = 'mongodb://localhost:27017/stlnBikeApp';
let port = 3000;

switch (NODE_ENV) {
  case 'production':
    urlPath = 'mongodb://xxx:27017/stlnBikeApp';
    break;
  case 'test':
    port = 3001;
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


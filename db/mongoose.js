const mongoose = require('mongoose');

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

module.exports = { mongoose };
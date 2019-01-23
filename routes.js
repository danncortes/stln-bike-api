const express = require('express');
const { user } = require('./api/user');

const app = express();

app.get('/users', (req, res) => {
  user.fetch(res);
});

module.exports = { app };
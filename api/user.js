const express = require('express');
const bodyParser = require('body-parser');

const { User } = require('../models/user');

const app = express();
app.use(bodyParser.json());

app.get('/users', (req, res) => {
  User.find().then(users => {
    res.send({ users })
  }, err => {
    res.status(400).send(err)
  })
});

app.listen(3000, () => {
  console.log('Server has started at port 3000');
});

module.export = { app };



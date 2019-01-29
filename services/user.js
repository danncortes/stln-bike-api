const User = require('../models/user');
const { ObjectID } = require('mongodb');

const user = {
  fetchAll: (req, res) => {
    User.find().then(users => {
      res.send({ users })
    }, err => {
      res.status(400).send(err)
    })
  },
  fetch: (req, res) => {
    const { id } = req.params;
    User.findById(id).then(user => {
      res.send({ user })
    }, err => {
      res.status(400).send(err)
    })
  },
  create: () => {
  },
  update: (req, res) => {
    console.log('​req -->', req.body.idn)
    const { id } = req.params;

    if (!ObjectID.isValid(id)) {
      res.status(404).send();
    }

    User.findById(id).then(user => {
      if (!user) {
        res.status(404).send();
      }
      res.send({ user });
    }, err => {
      res.status(400).send(err)
    })
  },
  remove: (req, res) => {
    const { id } = req.params;
    User.findByIdAndRemove(id).then(user => {
      res.send({ user })
    }, err => {
      res.status(400).send(err)
    });
  }
}

module.exports = user;
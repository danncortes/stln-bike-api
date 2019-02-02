const User = require('../models/user');
const { ObjectID } = require('mongodb');

const fetchAll = (req, res) => {
  User.find().then(users => {
    res.send({ users })
  }, err => {
    res.status(400).send(err)
  })
};

const fetch = (req, res) => {
  const { id } = req.params;

  if (!ObjectID.isValid(id)) {
    res.status(404).send();
  }

  User.findById(id).then(user => {
    res.send({ user })
  }, err => {
    res.status(400).send(err)
  })
};

const update = (req, res) => {
  const { id } = req.params;

  if (!ObjectID.isValid(id)) {
    res.status(404).send();
  }
  const newUser = req.body;

  User.findByIdAndUpdate(id, { $set: newUser }, { new: true })
    .then(user => {
      res.send({ user });
    }, err => {
      res.status(400).send(err)
    })
};

const remove = (req, res) => {
  const { id } = req.params;
  User.findByIdAndRemove(id).then(user => {
    res.send({ user })
  }, err => {
    res.status(400).send(err)
  });
}

const create = (req, res) => {

}

module.exports = {
  fetchAll,
  fetch,
  create,
  update,
  remove,
};
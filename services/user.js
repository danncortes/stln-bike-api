const User = require('../models/user');

const user = {
  fetch: (req, res) => {
    User.find().then(users => {
      res.send({ users })
    }, err => {
      res.status(400).send(err)
    })
  },
  create: () => {

  },
  update: () => {
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
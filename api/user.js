const { User } = require('../models/user');

const user = {
  fetch: (res) => {
    User.find().then(users => {
      res.send({ users })
    }, err => {
      res.status(400).send(err)
    })
  },
  create: () => {},
  update: () => {},
  delete: () => {}
}

module.exports = { user };
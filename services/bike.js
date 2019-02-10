const Bike = require('../models/bike');
const { ObjectID } = require('mongodb');

const fetchAll = (req, res) => {
  Bike.find().then(bikes => {
    res.send({ bikes })
  }, err => {
    res.status(400).send(err)
  })
};

const fetch = (req, res) => {
  const { id } = req.params;

  if (!ObjectID.isValid(id)) {
    res.status(404).send();
  }

  Bike.findById(id).then(bike => {
    res.send({ bike })
  }, err => {
    res.status(400).send(err)
  })
}


const fetchByUser = (req, res) => {
  const { userId } = req.params;

  if (!ObjectID.isValid(userId)) {
    res.status(404).send();
  }

  Bike.find({ userId: userId }).then(bike => {
    res.send({ bike })
  }, err => {
    res.status(400).send(err)
  })
}

const create = () => { }
const update = () => { }
const remove = () => { }

module.exports = {
  fetchAll,
  fetch,
  fetchByUser,
  create,
  update,
  remove,
};
const express = require('express');
const bike = require('../services/bike');

const bikeRouter = express();

bikeRouter.get('/bikes', bike.fetchAll);
bikeRouter.get('/bike/:id', bike.fetch);
bikeRouter.get('/userBike/:userId', bike.fetchByUser);
bikeRouter.post('/bike', bike.create);
bikeRouter.post('/bike/:id', bike.update);
// userRouter.delete('/user/:id', user.remove);

module.exports = bikeRouter;
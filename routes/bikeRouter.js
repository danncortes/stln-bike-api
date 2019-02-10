const express = require('express');
const bike = require('../services/bike');

const bikeRouter = express();

bikeRouter.get('/bikes', bike.fetchAll);
bikeRouter.get('/bike/:id', bike.fetch);
bikeRouter.get('/userBike/:userId', bike.fetchByUser);
// userRouter.delete('/user/:id', user.remove);
// userRouter.post('/user/:id', user.update);

module.exports = bikeRouter;
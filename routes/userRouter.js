const express = require('express');
const user = require('../services/user');

const userRouter = express();

userRouter.get('/users', user.fetchAll);
userRouter.get('/user/:id', user.fetch);
userRouter.delete('/user/:id', user.remove);
userRouter.post('/user/:id', user.update);

module.exports = userRouter;
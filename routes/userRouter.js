const express = require('express');
const user = require('../services/user');

const userRouter = express();

userRouter.get('/users', user.fetch);
userRouter.delete('/user/:id', user.remove);

module.exports = userRouter;
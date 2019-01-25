const mongoose = require('mongoose');

const userSquema = mongoose.Schema({
  fullName: {
    type: String,
    required: true
  },
  idn: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

// const user = new User({
//   fullName: 'Daniel',
//   idn: '1127597664',
//   phone: 3043613543,
//   email: 'danncortes@gmail.com',
//   password: 'admin',
// });

// user.save().then(res => {
//   console.log('User Created!')
// }, (err) => {
//   console.log(err)
// });

module.exports = mongoose.model('User', userSquema);




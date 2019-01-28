const request = require('supertest');
const User = require('../models/user');
const { app } = require('../server');

const users = [
  {
    fullName: 'Daniel Cortes',
    idn: '12345',
    phone: 123456789,
    email: 'danncortes@gmail.com',
    password: 'admin'
  },
  {
    fullName: 'Omar Petro',
    idn: '67890',
    phone: 987654321,
    email: 'dann@gmail.com',
    password: 'nimda'
  }
];

// beforeEach((done) => {
//   User.remove({}).then(() => {
//     User.insertMany(users);
//   }).then(() => done());
// })

describe('GET /user', () => {
  it('Should fetch Users', (done) => {
    console.log('aja')
    request(app).get('/users').then((response) => {
      expect(response.statusCode).toBe(200);
      // .expect((res) => {
      //   expect(res.body.users.length).toEqual(2);
      // })
      done();
    })
  })
})
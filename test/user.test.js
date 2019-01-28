const request = require('supertest');
const expect = require('chai').expect
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

beforeEach((done) => {
  User.deleteMany({})
    .then(() => {
      User.insertMany(users);
    }).then(() => done());
})

describe('GET /user', () => {
  it('Should fetch Users', (done) => {
    request(app)
      .get('/users')
      .expect(200)
      .expect((res) => {
        expect(res.body.users.length).to.equal(2);
      })
      .end(done);
  })
})
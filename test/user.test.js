const request = require('supertest');
const expect = require('chai').expect
const User = require('../models/user');
const { app } = require('../server');

const users = [
  {
    _id: "5c55c9c19aca681a0bfb3111",
    fullName: "Daniel Cortes x",
    idn: "12345",
    phone: 123456789,
    email: "danncortess@gmail.com",
    password: "admin",
    __v: 0
  },
  {
    _id: "5c55c9c19aca681a0bfb3112",
    fullName: "Omar Petro x",
    idn: "67890",
    phone: 987654321,
    email: "dann@gmail.com",
    password: "nimda",
    __v: 0
  }
];

beforeEach((done) => {
  User.deleteMany({})
    .then(() => {
      User.insertMany(users);
    }).then(() => done());
})

describe('Users', () => {
  it('GET "/users" Should fetch Users', (done) => {
    request(app)
      .get('/users')
      .expect(200)
      .expect((res) => {
        expect(res.body.users.length).to.equal(2);
      })
      .end(done);
  });

  it('GET "/user/:id" Should fetch User', (done) => {
    request(app)
      .get('/user/5c55c9c19aca681a0bfb3111')
      .expect(200)
      .expect((res) => {
        expect(res.body.user.email).to.equal('danncortess@gmail.com');
      })
      .end(done);
  });

  it('POST "/user/:id" Should update User', (done) => {
    request(app)
      .post('/user/5c55c9c19aca681a0bfb3112')
      .send({
        email: 'dannxx@gmail.com'
      })
      .expect(200)
      .expect((res) => {
        expect(res.body.user.email).to.equal('dannxx@gmail.com');
      })
      .end(done);
  });

  it('DELETE "/user/:id" Should delete User', (done) => {
    const id = '5c55c9c19aca681a0bfb3112';
    request(app)
      .delete(`/user/${id}`)
      .expect(200)
      .expect((res) => {
        expect(res.body.user._id).to.equal(users[1]._id);
      })
      .end((err, res) => {
        if (err) return done(err);

        User.findById(id).then(user => {
          console.log(user)
          expect(user).to.be.null;
          done();
        }).catch(e => done(e))
      });
  })
})
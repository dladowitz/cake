//https://davidbeath.com/posts/testing-http-responses-in-nodejs.html

var expect = require('Chai').expect;
var request = require('request');


describe('locations index page', function(){
  beforeEach(function(){
    console.log("Run before each individual spec")
  })

  it('GET /locations should exist', function (done) {
    request.get('http://localhost:3000/locations', function (err, res, body){
      expect(res.statusCode).to.equal(200);
      expect(res.body).to.contain('Locations')
      done();
    });
  });
})

describe('location show page', function(){
  it('GET /locations/1 should exist', function (done) {
    request.get('http://localhost:3000/locations/1', function (err, res, body){
      expect(res.statusCode).to.equal(200);
      expect(res.body).to.contain('wants to give you something')
      done();
    });
  });
})


describe('location_signups confirmation page', function(){
  it('GET /locations_signups/confirmation should exist', function (done) {
    request.get('http://localhost:3000/location_signups/confirmation', function (err, res, body){
      expect(res.statusCode).to.equal(200);
      expect(res.body).to.contain('Thanks! A confirmation e-mail is coming your way')
      done();
    });
  });
})


//
describe('location_signup create page', function(){
  it('POST /locations/1 should redirect', function (done) {
    request.post({url:'http://localhost:3000/location_signups/1', form: {email:'david@ladowitz.com', birthday: ''}}, function (err, res, body){
      expect(res.statusCode).to.equal(302);
      done();
    });
  });
})
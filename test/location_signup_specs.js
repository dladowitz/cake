var should = require('chai').should()
var request = require('request');

describe('location_signups confirmation page', function(){
  it('GET /locations_signups/confirmation should exist', function (done) {
    request.get('http://localhost:3000/location_signups/confirmation', function (err, res, body){
      res.statusCode.should.equal(200);
      res.body.should.contain('Thanks! A confirmation e-mail is coming your way')
      done();
    });
  });
})

describe('location_signup create page', function(){
  it('POST /locations/1 should redirect', function (done) {
    request.post({url:'http://localhost:3000/location_signups/1', form: {email:'david@ladowitz.com', birthday: ''}}, function (err, res, body){
      res.statusCode.should.equal(302);
      done();
    });
  });
})
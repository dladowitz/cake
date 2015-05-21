//http://chaijs.com/guide/styles/#should
//https://davidbeath.com/posts/testing-http-responses-in-nodejs.html

//var expect = require('Chai').expect;
var should = require('chai').should()
var request = require('request');


describe('home page', function(){
  beforeEach(function(){
    console.log("Run before each individual spec")
  })

  it('GET / should exist', function (done) {
    request.get('http://localhost:3000/', function (err, res, body){
      res.statusCode.should.equal(200);
      res.body.should.contain('Welcome')
      res.body.should.contain('<a href="/locations">Check out all our locations</a>')
      done();
    });
  });
})

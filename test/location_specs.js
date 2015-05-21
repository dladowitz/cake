//http://chaijs.com/guide/styles/#should
//https://davidbeath.com/posts/testing-http-responses-in-nodejs.html


//Not really working http://chaijs.com/plugins/chai-jq
//var expect    = require("chai");
//var plugin  = require("chai-jq");
//expect.use(plugin);
//
//describe('locations index page', function(){
//  beforeEach(function(){
//    console.log("Run before each individual spec")
//  })
//
//  it('GET /locations should exist', function (done) {
//    request.get('http://localhost:3000/locations', function (err, res, body){
//      expect(res.body).to.have.$attr("class", "location-list")
//      done();
//    });
//  });
//})



var should = require('chai').should()
var request = require('request');

describe('locations index page', function(){
  beforeEach(function(){
    console.log("Run before each individual spec")
  })

  it('GET /locations should exist', function (done) {
    request.get('http://localhost:3000/locations', function (err, res, body){
      res.statusCode.should.equal(200);
      res.body.should.contain('Locations')
      done();
    });
  });
})

describe('location show page', function(){
  it('GET /locations/1 should exist', function (done) {
    request.get('http://localhost:3000/locations/1', function (err, res, body){

      //How come this isnt being set on the route
      console.log(res.test)
      //console.log(res.request.path)
      res.statusCode.should.equal(200);
      res.body.should.contain('wants to give you something')
      done();
    });
  });
})
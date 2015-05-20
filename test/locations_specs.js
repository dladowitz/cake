////http://webapplog.com/test-driven-development-in-node-js-with-mocha/
// Not working for some reason. Not sure why. Moving to Chai and Request

//var request = require('superagent');
//var expect  = require('expect.js');
//
//before(function(){
//  console.log("Run once before entire test suite")
//})
//
//describe('locations', function(){
//  beforeEach(function(){
//    console.log("Run before each individual spec")
//  })
//
//  it("has /locations", function(done){
//    request.get('localhost:3000').end(function(res){
//      console.log("<<<<<<<<<<<<<<<<<<<<<<<")
//      console.log("Response: " + res)
//      expect(res).to.exist
//      expect(res.status).to.equal(200)
//      expect(res.body).to.contain('All Locations')
//      done();
//    })
//  })
//})

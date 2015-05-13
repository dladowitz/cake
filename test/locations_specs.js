var request = require('superagent');
var expect  = require('expect.js');

before(function(){
  console.log("Run once before entire test suite")
})

describe('locations', function(){
  beforeEach(function(){
    console.log("Run before each individual spec")
  })

  it('has /locations in page', function(){
    request.get('localhost:3000/place').end(function(res){
      // I should break things
      // expect(res).to.exist
      // expect(res.status).to.equal(200)
      // expects(rest.body).to.contain('All Locations')
      // console.log(other)
      expect(200).to.equal(300)
    })
  })
})

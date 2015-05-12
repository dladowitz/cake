var express = require('express');
var router = express.Router();

/* GET locations page. */
router.get('/', function(req, res, next) {
  // note the 'req added to db.query'
  req.db.query('SELECT * FROM locations;', [], function(err, result){
    if (err) {
      err.explanation = "Not able to select from Locations";
      response.status(500).send(err);
    } else {
      res.render('locations/index', { locations: result.rows });
    }
  });
});

// GET location page
router.get('/:id', function(req, res, next){
  var location_id = req.params["id"];
  req.db.query('SELECT * FROM locations WHERE id = $1;', [location_id], function(err, result){
    if (err) {
      err.explanation = "Not able to find location";
      response.status(500).send(err);
    } else {
      console.log(result.rows[0])
      res.render('locations/show', { location: result.rows[0] });
    }
  });
});


module.exports = router;

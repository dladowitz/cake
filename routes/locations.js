var express = require('express');
var router = express.Router();

/* GET locations page. */
router.get('/', function(req, res, next) {

  // note the 'req added to db.query'
  req.db.query('SELECT name FROM locations;', [], function(err, result){
    if (err) {
      err.explanation = "Not able to select from Locations";
      response.status(500).send(err);
    } else {
      res.render('locations/index', { locations: result.rows });
    }
  })
});

module.exports = router;

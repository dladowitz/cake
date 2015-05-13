var express = require('express')
var router = express.Router()


// POST location_signups show page
router.post('/:id', function(req, res, next){
  var locationId = req.params["id"]
  var user = {}
  console.log("-- Form Values--")
  console.log(req.body)
  console.log("--------\n")

  // What is the best way to handle multiple sql queries? This seems, ungood.
  req.db.query('Select * FROM users WHERE email = $1;', [req.body["email"]], function(err, result){

    if(result.rows.length > 0){
      user = result.rows[0]
      console.log(user.email + " is already in the system")
      console.log("Not creating a new user\n")
      req.db.query('INSERT INTO location_signups(location_id, user_id) VALUES($1, $2);', [locationId, user.id], function(err, result){
        if (err) {
          err.explanation = "Not able to create location signup";
          response.status(500).send(err);
        } else {
          console.log("-- Location Signup Created --")
          console.log("user_id: " + user.id)
          console.log("location_id: " + locationId)
          console.log(("--------\n"))
          res.render("location_signups/confirmation")
        }
      });

    } else {
      console.log("New User...Creating....\n")

      req.db.query('INSERT INTO users(email, birthday) VALUES($1, $2);', [req.body["email"], req.body["birthday"]], function(err, result){
        if (err) {
          err.explanation = "Not able to create user";
          response.status(500).send(err);
        } else {
          req.db.query('SELECT * FROM users WHERE email = $1', [req.body["email"]], function(err, result){
            user = result.rows[0]
            console.log("-- User Created --")
            console.log("id:" + user.id)
            console.log("email:" + user.email)
            console.log("birtday:" + user.birthday)
            console.log(("--------\n"))

            // createLocationSignup(params, function(err, result){
            //   if err
            //   otherwise yay
            // })
            req.db.query('INSERT INTO location_signups(location_id, user_id) VALUES($1, $2);', [locationId, user.id], function(err, result){
              if (err) {
                err.explanation = "Not able to create location signup";
                response.status(500).send(err);
              } else {
                console.log("-- Location Signup Created --")
                console.log("user_id: " + user.id)
                console.log("location_id: " + locationId)
                console.log(("--------\n"))
                res.render("location_signups/confirmation")
              }
            });
          })
        }
      });

    }
  });
});

// Tried creating a function, bad things happened.
// This is what I get for trying to be DRY
// function createLocationSignup(req, location_id, user, callback){
//   req.db.query('INSERT INTO location_signups(location_id, user_id) VALUES($1, $2);', [location_id, user.id], function(err, result){
//     if (err) {
//       err.explanation = "Not able to create location signup";
//       response.status(500).send(err);
//     } else {
//       console.log("-- Location Signup Created --\n")
//     }
        // callback(err, result)
//   });
// }
module.exports = router;

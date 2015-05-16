// environment variables
var mandrillKey = process.env["MANDRILL_KEY"];

var express     = require('express')
var fs          = require('fs')
var router      = express.Router()
var mandrill     = require('mandrill-api/mandrill');

//// Mandril TODO: move to mailer.js file
var mandrill_client = new mandrill.Mandrill(mandrillKey);


// only for testing - delete
router.get('/confirmation', function(req, res, next){
  req.db.query('Select * From locations;', [], function(err, result){
    var locations = result.rows
    res.render("location_signups/confirmation", { locations: locations, email: 'david@ladowitz.com'});
  })


})

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

          res.redirect("location_signups/confirmation?email=" + user.email);

          locationSignupConfirmationEmail(user.email)
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

            // Do this instead
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

                res.render("location_signups/confirmation", { email: user.email});

                locationSignupConfirmationEmail(user.email)
              }
            });
          })
        }
      });

    }
  });
});

function locationSignupConfirmationEmail(recipient){
  var messageText = ""

  fs.readFile(__dirname + "/../mail_templates/location_signup_confirmation_email.html", function(error, data) {
    if(error){
      console.log(error)
    } else {
      messageText = data.toString()
      console.log("Confirmation Email Sent to: " + recipient)
      console.log(messageText);

      var message = {
        "html": messageText,
        "subject": "Thanks for Signing Up with Cake",
        "from_email": "no-reply@cake.com",
        "from_name": "Cake",
        "to": [{email: recipient}]
      }
      // <<<<<<<<uncomment>>>>>>>>>>>>>>>
      // sendEmail(message)
    }
  });
 }

 // send mail through mandrill
 function sendEmail(message){
   mandrill_client.messages.send({"message": message, "async": true }, function(result) {
       console.log(result);
   }, function(e) {
       // Mandrill returns the error as an object with name and message keys
       console.log('A mandrill error occurred: ' + e.name + ' - ' + e.message);
   });
  }
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

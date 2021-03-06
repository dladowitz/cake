// environment variables
var conString   = process.env["DATABASE_URL"];

// modules
var express      = require('express');
var path         = require('path');
var favicon      = require('serve-favicon');
var logger       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var pg           = require('pg');


// route definitions
var routes           = require('./routes/index');
var users            = require('./routes/users');
var locations        = require('./routes/locations')
var location_signups = require('./routes/location_signups')


// database connection
var db;
pg.connect(conString, function(err, client){
  if(err){
    console.log("!!!!!!! Problem connecting to database!!!!!!!")
    console.log("Maybe the DB isn't running? Error: " + err)
  } else {
    console.log("Database connected to: " + conString )
    db = client;
  }
})

// app setup
var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// set environment mode. Default is development when nothing is set.
if(process.env.MODE){
  app.set('env', process.env.MODE)
}

// middleware
// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(__dirname + '/public'));


app.use(function(req,res,next){
  req.db = db;
  next();
});


// route setup
app.use('/', routes);
app.use('/users', users);
app.use('/locations', locations);
app.use('/location_signups', location_signups)


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});




module.exports = app;

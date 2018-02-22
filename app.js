var config = require("./config/dev");
var databaseConnection = require('./model/db');
var compression = require('compression');
var express = require('express');
var paginationLinks = require('./middleware/pagination');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var MongoClient = require("mongodb").MongoClient;

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();
var database;

MongoClient.connect('mongodb://' + config.database.user+ ':' + config.database.password + '@ds237808.mlab.com:37808/eatsdulwich-sandbox', (err, client) => {
  if (err) return console.log(err)
  database = client.db('eatsdulwich-sandbox') // whatever your database name is
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(compression())
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
//app.use(paginationLinks);

app.use('/', index);
app.use('/users', users);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  res.render('404')
  //next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);

  res.render('error');
});



module.exports = app;

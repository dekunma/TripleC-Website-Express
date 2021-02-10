var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var teamRouter = require('./routes/team')
var projectRouter = require('./routes/project')
var newsLetterRouter = require('./routes/newsletter')
var contactRouter = require('./routes/contact')
var sponsorRouter = require('./routes/sponsor')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'public', 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

//set static files directory
app.use(express.static(path.join(__dirname, 'assets')))

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/team', teamRouter)
app.use('/project', projectRouter)
app.use('/newsletter', newsLetterRouter)
app.use('/contact', contactRouter)
app.use('/sponsor', sponsorRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error.html');
});

module.exports = app;

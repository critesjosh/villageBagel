'use strict';

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);


//app.use(express.static('public'))

// [START hello_world]
// Say hello!
app.get('/', (req, res) => {
  res.sendFile(process.cwd() + '/public/templates/index.html');
});
app.get('/our_company', (req, res) => {
  res.sendFile(process.cwd() + '/public/templates/our_company.html');
});
app.get('/contact', (req, res) => {
  res.sendFile(process.cwd() + '/public/templates/contact.html');
});
app.get('/sample_menu', (req, res) => {
  res.sendFile(process.cwd() + '/public/templates/sample_menu.html');
});
app.get('/backdoor_bagels', (req, res) => {
  res.sendFile(process.cwd() + '/public/templates/backdoor_bagels.html');
});
app.get('/order', (req, res) => {
  res.sendFile(process.cwd() + '/public/templates/order.html');
});
// [END hello_world]

if (module === require.main) {
  // [START server]
  // Start the server
  const server = app.listen(process.env.PORT || 8080, () => {
    const port = server.address().port;
    console.log(`App listening on port ${port}`);
  });
  // [END server]
}

module.exports = app;

var express = require('express'); // adding the express to the project
var app = express();//executing the express module to access its functionality
var morgan = require('morgan');
var path = require('path');
var html = require('html').renderFile;

var bodyParser = require('body-parser');

app.set('view engine', 'html');

/*database setup ==============
*/

app.use(morgan('dev'));//logging all the requests
app.use(bodyParser.urlencoded({'extended':'true','limit' : '50mb'})); // parse application/x-www-form-urlencoded
app.use(bodyParser.json({'limit':'50mb'})); // parse application/json
app.use(express.static(path.join(__dirname, '/app/public')));

module.exports = app;
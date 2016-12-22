const express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended : false }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use(logger('dev'));

app.use('/', express.static(__dirname));
console.log(__dirname);
//app.use('/assets', express.static(__dirname + '/public'));

const server = app.listen(port);
console.log(`Listening in port ${port}`);
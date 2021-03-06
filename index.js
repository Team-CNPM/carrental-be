var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cors = require('cors');
var cookieParser = require('cookie-parser');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var vitriRouter = require('./routes/vitri');
var xeRouter = require('./routes/xe');
var payRouter = require('./routes/thanhtoan');
var thuexeRouter = require('./routes/thuexe');
var app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/location', vitriRouter);
app.use('/car',xeRouter);
app.use('/carrent',thuexeRouter);
app.use('/payment',payRouter);

app.listen(process.env.PORT || 5000);

module.exports = app;
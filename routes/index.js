var express = require('express');
var mysql = require('mysql2');
var router = express.Router();

const conn = mysql.createPool({
  host: "eu-cdbr-west-02.cleardb.net",
  user: "b8b9ab2a962b71",
  password: "286b5614",
  database: "heroku_3eabc80d1ec81f0",
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

module.exports = router;

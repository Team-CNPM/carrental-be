var express = require('express');
var mysql = require('mysql2');
var router = express.Router();
router.get('/carRental', function(req,res,next){
    res.send("MainPage");
});
module.exports = router;
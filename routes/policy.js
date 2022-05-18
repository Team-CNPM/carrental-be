var express = require('express');
var mysql = require('mysql2');
var router = express.Router();
var dbconn = require('./dbcon');

var con = mysql2.createConnection({
    host: "containers-us-west-41.railway.app",
    user: "root",
    password: "WlEb6IE9QBDw1VZvB0Bz",
    database: "railway",
    port: 5895,
});

router.get('/', function(req, res, next){
    con.connect(function(err){
      if (err) throw err;
      var sql = `SELECt * FROM DIEUKHOAN`;
      con.query(sql,function(err, result){
        if(err) throw err;
        res.json(result[0]);
      });
    });
});

router.post('/createPolicy',function(req,res,next){
    con.connect(function(err){
        if(err) throw err;
        var dieukhoan = req.body.dieukhoan;
        var sql = `INSERT INTO DIEUKHOAN (DIEUKHOAN)
        VALUES (${dieukhoan})`;
        con.query(sql, function(err, result){
            if(err) throw err;
            res.send(result);
        });
    });
});

router.put('/updatePolicy',function(req, res, next){
    con.connect(function(err){
        if(err) throw err;
        var dieukhoan = req.body.dieukhoan;
        var sql = `UPDATE DIEUKHOAN SET DIEUKHOAN = ${dieukhoan}`;
        con.query(sql, function(err, result){
            if(err) throw err;
            res.send(result);
        });
    });
});

router.get('/detailPolicy/:id', function(req,res,next){
    con.connect(function(err){
        if(err) throw err;
        var id = req.params.id;
        var sql = `SELECT * FROM DIEUKHOAN WHERE DIEUKHOANID = ${id}`;
        con.query(sql, function(err,result){
            if (err) throw err;
            res.send(result);
        });
    });
});

router.delete('/deletePolicy/:id',function(req,res,next){
    con.connect(function(err){
        if(err) throw err;
        var id = req.params.id;
        var sql = `DELETE FROM DIEUKHOAN WHERE DIEUKHOANID = ${id}`;
        con.query(sql, function(err, result){
            if(err) throw err;
            res.send(result);
        });
    });
});
module.exports = router;
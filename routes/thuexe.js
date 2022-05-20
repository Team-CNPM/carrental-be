var express = require('express');
var mysql = require('mysql2');
var router = express.Router();

var con = mysql.createConnection({
    host: "containers-us-west-41.railway.app",
    user: "root",
    password: "WlEb6IE9QBDw1VZvB0Bz",
    database: "railway",
    port: 5895,
});

router.get('/',function(req,res,next){
    con.connect(function(err){
        if (err) throw err;
        var sql = `SELECT * FROM THUEXE`
        con.query(sql, function(err,result){
            if(err) throw err;
            res.json(result[0]);
        });
    });
});

router.post('/createRent',function(req,res,next){
    con.connect(function(err){
        if(err) throw err;
        var sql = `INSERT INTO THUEXE`;
        con.query(sql, function(err,result){
            if(err) throw err;
            res.send(result);
        });
    });
});

router.put('',function(req,res,next){})

router.get('/detailRent/:id',function(req,res,next){
    con.connect(function(err){
        if(err) throw err;
        var id = req.params.id;
        var sql = `SELECT * FROM THUEXE WHERE THUEXEID = ${id}`;
        con.query(sql,function(err,result){
            if(err) throw err;
            res.json(result);
        });
    });
});

module.exports = router;
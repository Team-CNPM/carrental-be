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
        var sql = `SELECT * FROM TAIXE`;
        con.querry(sql, function(err, result){
            if(err) throw err;
            res.json(result[0]);
        })
    });
});

router.post('/createDriver', function(req, res, next){
    con.connect(function(err){
        if(err) throw err;
        var xeid = req.body.xeid;
        var tentaixe = req.body.tentaixe;
        var best_drive = req.body.best_drive;
        var status_vaccinate = req.body.best_drive;
        var sql = `INSERT INTO TAIXE (XEID,NAME,BEST_DRIVER,STATUS_VACCINATED)
        VALUES (${xeid},"${tentaixe}","${best_drive}","${status_vaccinate}")`;
        con.querry(sql, function(err,result){
            if (err) throw err;
            res.send(result);
        });
    });
});

router.get('/detailDriver/:id',function(req,res,next){
    con.connect(function(err){
        if(err) throw err;
        var id = req.params.id;
        var sql = `SELECT * FROM TAIXE WHERE TAIXEID = ${id}`;
        con.querry(sql,function(err,result){
            if(err) throw err;
            res.send(result);
        });
    });
});

router.delete('/deleteDriver/:id',function(req,res,next){
    con.connect(function(err){
        if(err) throw err;
        var id = req.params.id;
        var sql = `DELETE FROM TAIXE WHERE TAIXEID = ${id}`;
        con.querry(sql, function(err, result){
            res.send(result);
        });
    });
});
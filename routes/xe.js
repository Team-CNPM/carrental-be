var express = require('express');
var mysql = require('mysql2');
var router = express.Router();

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
      con.query("Select * From XE",function(err, result){
        if(err) throw err;
        res.json(result[0]);
      });
    });
});

router.post('/createCar',function(req,res,next){
    con.connect(function(err){
        if(err) throw err;
        var xeid = req.body.xeid;
        var tenxe = req.body.tenxe;
        var vitriid = req.body.vitriid;
        var giaxe = req.body.giaxe;
        var hinhxe = req.body.hinhxe;
        var mauxe = req.body.mauxe;
        var loaixe = req.body.loaixe;
        var soghe = req.body.soghe;
        var sohanhly = req.body.sohanhly;
        var diachivanphong = req.body.diachivanphong;
        var sql = `INSERT INTO XE (XEID,VITRIID,TENXE,GIAXE,HINHXE,MAUXE,LOAIXE,SOGHE,SOHANHLY,DIACHIVANPHONG) VALUES (${xeid},${vitriid},"${tenxe}",${giaxe}
        ,"${hinhxe}","${mauxe}","${loaixe}",${soghe},${sohanhly},"${diachivanphong}")`;
        con.query(sql, function(err,result){
            if(err) throw err;
            res.send(result);
        });
    });
});

router.get('/detailCar/:id',function(req,res,next){
    con.connect(function(err){
        if (err) throw err;
        var id = req.params.id;
        var sql = `SELECT * FROM XE WHERE XEID = ${id}`;
        con.query(sql, function(err,result){
            if(err) throw err;
            res.send(result);
        });
    });
});

router.put('/putCar/:id',function(req,res,next){
    con.connect(function(err){
        if (err) throw err;
        var id = req.params.id;
        var vitriid = req.body.vitriid;
        var tenxe = req.body.tenxe;
        var hinhxe = req.body.hinhxe;
        var mauxe = req.body.mauxe;
        var loaixe = req.body.loaixe;
        var soghe = req.body.soghe;
        var sohanhly = req.body.sohanhly;
        var diachivanphong = req.body.diachivanphong;
        var sql = `UPDATE XE SET XEID = ${id},
        VITRIID = ${vitriid},TENXE = "${tenxe}", HINHXE = "${hinhxe}", MAUXE = "${mauxe}", LOAIXE = "${loaixe}"
        SOGHE = ${soghe}, SOHANHLY = ${sohanhly}, DIACHIVANPHONG = ${diachivanphong}`;
        con.query(sql, function(err,result){
            if (err) throw err;
            res.send(result);
        });
    });
});

router.delete('/deleteCar/:id',function(req,res,next){
    con.connect(function(err){
        if(err) throw err;
        var id = req.params.id;
        var sql = `DELETE FROM XE WHERE XEID = ${id}`;
        con.query(sql, function(err,result){
            if(err) throw err;
            res.send(result);
        });
    });
});
module.exports = router;
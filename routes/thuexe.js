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
            res.json(result);
        });
    });
});

router.post('/createRent',function(req,res,next){
    con.connect(function(err){
        if(err) throw err;
        var thuexeid = req.body.thuexeid;
        var xeid = req.body.xeid;
        var gia = req.body.gia;
        var noilay = req.body.noilay;
        var noitra = req.body.noitra;
        var ngaylay = req.body.ngaylay;
        var ngaytra = req.body.ngaytra;
        var giolay = req.body.giolay;
        var giotra = req.body.giotra;
        var userid = req.body.userid;
        var voucherid = req.body.voucherid;
        var comboid = req.body.comboid;
        var sql = `INSERT INTO THUEXE (THUEXEID, XEID, GIA, NOILAY, NOITRA, NGAYLAY, NGAYTRA, GIOLAY, GIOTRA, USERID, VOUCHERID,COMBOID)
        VALUES (${thuexeid},${xeid},${gia},'${noilay}','${noitra}','${ngaylay}',
        '${ngaytra}','${giolay}','${giotra}','${userid}',''${voucherid},'${comboid}' );`;
        con.query(sql, function(err,result){
            if(err) throw err;
            res.send(result);
        });
    });
});

router.put('/UpdateRent',function(req,res,next){
    con.connect(function(err){
        if (err) throw err;
        var thuexeid = req.body.thuexeid;
        var xeid = req.body.xeid;
        var gia = req.body.gia;
        var noilay = req.body.noilay;
        var noitra = req.body.noitra;
        var ngaylay = req.body.ngaylay;
        var ngaytra = req.body.ngaytra;
        var giolay = req.body.giolay;
        var giotra = req.body.giotra;
        var userid = req.body.userid;
        var voucherid = req.body.voucherid;
        var comboid = req.body.comboid;
        var sql = `UPDATE THUEXE 
        SET XEID = ${xeid}, GIA =${gia}, NOILAY= '${noilay}', NOITRA= '${noitra}', NGAYLAY='${ngaylay}', NGAYTRA='${ngaytra}', GIOLAY='${giolay}', GIOTRA='${giotra}', 
        USERID='${userid}', VOUCHERID='${voucherid}', COMBOID='${comboid}', 
        WHERE THUEXEID = ${thuexeid};`;
        con.query(sql, function(err,result){
            if(err) throw err;
            res.send(result);
        })
    })
})

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

router.delete('/deleteRent/:id',function(req,res,next){
    con.connect(function(err){
        if(err) throw err;
        var id = req.params.id;
        var sql = `DELETE FROM THUEXE WHERE THUEXEID = ${id}`;
        con.query(sql,function(err,result){
            if(err) throw err;
            res.json(result);
        });
    });
});

module.exports = router;
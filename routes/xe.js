var express = require('express');
var mysql = require('mysql2');
var router = express.Router();

const conn = mysql.createPool({
    host: "eu-cdbr-west-02.cleardb.net",
    user: "b8b9ab2a962b71",
    password: "286b5614",
    database: "heroku_3eabc80d1ec81f0",
  });

//Trang index của xe
router.get('/', function(req,res,next){
    let sql = `SELECT * FROM xe`;
    conn.query(sql, function(err, result){
        if (err) throw err;
        res.json(result);
    });
});
//Trang chi tiết xe theo id
router.get('/detail/:id',function(req,res,next){
    let id = req.params.id;
    let sql = `SELECT * FROM xe WHERE XEID=${id};`;
    conn.query(sql, function(err, result){
        if (err) throw err;
        res.json(result);
    });
});
router.get('/create',function(req,res,next){
    res.send();
});
router.post('/create',function(req,res,next){
    let id=req.body.id;
    let carName = req.body.carName;
    let carPrice = req.body.carPrice;
    let carImage = req.body.carImage;
    let carModel = req.body.carModel;
    let carType = req.body.carType;
    let carSeat = req.body.carSeat;
    let carLuggage = req.body.carLuggage;
    let officeAddress = req.body.officeAddress;
    let location = req.body.location;
    let partner = req.body.partner;
    let sql = `INSERT INTO xe (XEID, TENXE, GIAXE, HINHXE, MAUXE, LOAIXE, SOGHE, SOHANHLY, DIACHIVANPHONG, VITRIID, PARTNERID)
    VALUES (${id},${carName},${carPrice},${carImage},${carModel},${carType},${carSeat},${carLuggage},${officeAddress},${location},${partner});`
    conn.query(sql, function(err,result){
        if (err) throw err;
        res.json(result);
    });
});
router.get('/update/:id',function(req,res,next){
    let id = req.params.id;
    let sql = `SELECT * FROM xe WHERE XEID=${id};`
    conn.query(sql, function(err, result){
        res.json(result);
    });
});
router.put('/update/:id', function(req,res, next){
    let id=req.body.id;
    let newcarName = req.body.carName;
    let newcarPrice = req.body.carPrice;
    let newcarImage = req.body.carImage;
    let newcarModel = req.body.carModel;
    let newcarType = req.body.carType;
    let newcarSeat = req.body.carSeat;
    let newcarLuggage = req.body.carLuggage;
    let newofficeAddress = req.body.officeAddress;
    let newlocation = req.body.location;
    let newpartner = req.body.partner;
    let sql = `UPDATE xe SET TENXE = ${newcarName}, GIAXE = ${newcarPrice}, HINHXE = ${newcarImage}, MAUXE = ${newcarModel},
    LOAIXE = ${newcarType}, SOGHE = ${newcarSeat}, SOHANHLY = ${newcarLuggage}, DIACHIVANPHONG = ${newofficeAddress}, 
    PARTNERID = ${newpartner}, VITRIID = ${newlocation}
    WHERE XEID = ${id};`
    conn.query(sql, function(err,result){
        if (err) throw err;
        res.json(result);
    });
});
module.exports = router;
var express = require('express');
var mysql2 = require('mysql2');
var router = express.Router();

var con = mysql2.createConnection({
  host: "containers-us-west-41.railway.app",
  user: "root",
  password: "WlEb6IE9QBDw1VZvB0Bz",
  database: "railway",
  port: 5895,
});

// Chuyển tới trang index của location (Trang hiện danh sách)
router.get('/', function(req, res, next){
  con.connect(function(err){
    if (err) throw err;
    var sql = `Select * From VITRI`
    con.query(sql,function(err, result){
      if(err) throw err;
      res.json(result[0]);
    });
  });
});
  //Thực hiện tạo 1 location mới
  router.post('/create', function(req, res,next){
    var id = req.body.id;
    var country = req.body.country;
    var province = req.body.province;
    var city = req.body.city;
    var sql = `INSERT INTO VITRI (COUNTRY, PROVINCE, CITY) VALUES ("${country}","${province}","${city}")`;
    con.query(sql,function(err,result){
      if(err) throw err;
      res.send(result);
    });
  });
  //Chuyển tới trang chi tiết theo id
  router.get('/detail/:id', function(req,res,next){
    var sql = `select * from VITRI where VITRIID = ${req.params.id}`;
    con.query(sql,function(err, result){
      if(err) throw err;
      res.json(result);
    });
  });
  //Cập nhật thuộc tính theo id trong bảng
  router.put('/update/:id', function(req,res,next){
    let id = req.params.id;
    let newCountry = req.body.country;
    let newProvince = req.body.province;
    let newCity = req.body.city;
    let sql = `UPDATE VITRI SET COUNTRY = "${newCountry}", PROVINCE = "${newProvince}", CITY="${newCity}" WHERE VITRIID =${id}`;
    con.query(sql,function(err,result){
      res.json(result);
    });
  });
  //Chuyển tới trang xóa chứa trong tin cột của id
  router.get('/delete/:id', function(req,res,next){
    var sql = `SELECT * FROM VITRI WHERE VITRIID = ${req.params.id}`;
    con.query(sql,function(err,result){
      if (err) throw err;
    res.send(result);
    });
  });
  //Xóa 1 cột theo id trong bảng location
  router.delete('/delete/:id', function(req,res,next){
    let id = req.params.id;
    var sql = `DELETE FROM VITRI WHERE VITRIID = ${id}`;
    con.query(sql, function(err, result){
        if (err) throw err;
        res.send(result);
      });
  });


module.exports = router;
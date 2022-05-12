var express = require('express');
var mysql = require('mysql2');
var router = express.Router();

//Tạo connect đến mysql
const conn = mysql.createConnection({
  host: "eu-cdbr-west-02.cleardb.net",
  user: "b8b9ab2a962b71",
  password: "286b5614",
  database: "heroku_3eabc80d1ec81f0",
});
// Chuyển tới trang index của location (Trang hiện danh sách)
router.get('/', function(req, res, next){
    conn.connect(function(err){
      if (err) throw err;
      console.log("Connect");
      conn.query("Select * From vitri",function(err, result){
        if(err) throw (err);
        res.json(result);
      });
    });
  });
  //Chuyển tới trang tạo location mới
  router.get('/create',function(req,res,next){
    res.render('carInput');
  });
  //Thực hiện tạo 1 location mới
  router.post('/create', function(req, res,next){
    var id = req.body.id;
    var country = req.body.country;
    var province = req.body.province;
    var city = req.body.city;
    var sql = `INSERT INTO vitri (VITRIID, COUNTRY, PROVINCE, CITY) VALUES (${id},${country},${province},${city})`;
    conn.query(sql,function(err,result){
      if(err) throw err;
      res.send(result);
    });
  });
  //Chuyển tới trang chi tiết theo id
  router.get('/detail/:id', function(req,res,next){
    var sql = `select * from vitri where VITRIID = ${req.params.id}`;
    conn.query(sql,function(err, result){
      if(err) throw err;
      console.log("Select Success");
      res.json(result);
    });
  });
  //Chuyển tới trang có thuộc tính của id trong bảng
  router.get('/update/:id', function(req,res,next){
    res.json('change page');
  });
  //Cập nhật thuộc tính theo id trong bảng
  router.put('/update/:id', function(req,res,next){
    let id = req.params.id;
    let newCountry = req.body.country;
    let newProvince = req.body.province;
    let newCity = req.body.city;
    let sql = `UPDATE vitri SET COUNTRY = ${newCountry}, PROVINCE = ${newProvince}, CITY=${newCity} WHERE VITRIID =${id}`;
    conn.query(sql,function(err,result){
      res.json(result);
    });
  });
  //Chuyển tới trang xóa chứa trong tin cột của id
  router.get('/delete/:id', function(req,res,next){
    var sql = `SELECT * FROM vitri WHERE VITRIID = ${req.params.id}`;
    conn.query(sql,function(err,result){
      if (err) throw err;
    res.send(result);
    });
  });
  //Xóa 1 cột theo id trong bảng location
  router.delete('/delete/:id', function(req,res,next){
    let id = req.params.id;
    var sql = `DELETE FROM vitri WHERE VITRIID = ${req.params.id}`;
      conn.query(sql, function(err, result){
        if (err) throw err;
        res.send(result);
      });
  });


module.exports = router;
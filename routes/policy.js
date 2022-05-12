var express = require('express');
var mysql = require('mysql2');
var router = express.Router();

const conn = mysql.createConnection({
    host: "eu-cdbr-west-02.cleardb.net",
    user: "b8b9ab2a962b71",
    password: "286b5614",
    database: "heroku_3eabc80d1ec81f0",
  });
/*Thuộc về bảng điều khoản*/
//Trang chính của bảng điều khoản
router.get('/',function(req,res,next){
    let sql = `select DIEUKHOAN from dieukhoan`;
    conn.query(sql, function(err,result){
        if(err) throw err;
        res.json(result);
    });
});
//Chuyển trang chi tiết điều khoản theo id
router.get('/:id',function(req,res,next){
    let id = req.params.id;
    let sql = `select DIEUKHOAN FROM dieukhoan WHERE DIEUKHOANID = ${id}`;
    conn.query(sql,function(err, result){
        if(err) throw err;
        res.json(result);
    });
});
//Chuyển sang trang tạo của bảng điều khoản
router.get('/create', function(req, res, next){
    res.json('Change PAGE');
});
  
//Tạo điều khoản
router.post('/create',function(req,res, next){
    let Policy = req.body.Policy;
    let sql = `insert into dieukhoan (DIEUKHOAN) VALUES (${Policy})`;
    conn.connect(sql,function(err,result){
      if(err) throw err;
      res.json(result);
    });
});

//Chuyển sang trang cập nhật điều khoản theo id
router.get('/update/:id', function(req,res,next){
    let id = req.params.id;
    let sql = `select DIEUKHOAN from dieukhoan WHERE DIEUKHOANID = ${id}`;
    conn.query(sql,function(err, result){
        if(err) throw err;
        res.json(result);
    });
});

// Cập nhật điều khoản theo id
router.put('/update/:id', function(req,res, next){
    let Policy = req.body.Policy;
    let id = req.params.id;
    let sql = `UPDATE dieukhoan SET DIEUKHOAN = ${Policy} WHERE DIEUKHOANID = ${id}`;
    conn.query(sql,function(err, result){
        if (err) throw err;
        res.json(result);
    });
});

//Xóa 1 điều khoản theo id
router.delete('/delete/:id',function(req,res,next){
    let id = req.params.id;
    let sql = `DELETE FROM dieukhoan WHERE DIEUKHOANID = ${id}`;
    conn.query(sql,function(err, result){
        if (err) throw err;
        res.json(result);
    });
});
module.exports = router;
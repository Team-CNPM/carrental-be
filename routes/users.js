var express = require('express');
const { MongoClient } = require('mongodb');
var router = express.Router();

/* GET users listing. */
/*router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});*/

// Các địa chỉ và trang cho khách hàng
//Get danh sách xe
/*router.get('/Car',function(req,res,next){
  MongoClient.connect(uri, function(err,db){
    if (err) throw err;
    var dbo = db.db("CarRentalDatabase");
    dbo.collection("Cars").find({}).toArray(function(err,result){
      if(err) throw err;
      res.send(result);
      db.close();
    });
  });
});*/

//

module.exports = router;
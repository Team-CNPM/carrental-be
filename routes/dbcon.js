var mysql = require('mysql2');
dbConnectionInfo = {
    host: "eu-cdbr-west-02.cleardb.net",
    user: "b8b9ab2a962b71",
    password: "286b5614",
    database: "heroku_3eabc80d1ec81f0",
  };
  
  //For mysql single connection
  var dbconnection = mysql.createConnection(
          dbConnectionInfo
  ); 
  
   dbconnection.connect(function (err) {
      if (!err) {
          console.log("Database is connected ... nn");
      } else {
          console.log("Error connecting database ... nn");
      }
  });
  var dbconnection = mysql.createPool(
    dbConnectionInfo
  );
  
  // Attempt to catch disconnects 
  dbconnection.on('connection', function (connection) {
    console.log('DB Connection established');
  
    connection.on('error', function (err) {
      console.error(new Date(), 'MySQL error', err.code);
    });
    connection.on('close', function (err) {
      console.error(new Date(), 'MySQL close', err);
    });
  
  });
module.exports = dbconnection;
var express = require('express');
var mysql = require('mysql2');
var nodemailer = require('nodemailer');
var Stripe = require('stripe')('sk_test_51L4SfVCPHb2K90y8muJwShCtijcV7sOES3Ji8QYfQ0i0AyjNQvg0l6kxZz9VuZAhBYImlOLshf5FpaNV607hhSJr00nA2ZFfkt');
var router = express.Router();

var ten='tant89372@gmail.com';
var ten2= 'diep20106@gmail.com';
var con = mysql.createConnection({
    host: "containers-us-west-41.railway.app",
    user: "root",
    password: "WlEb6IE9QBDw1VZvB0Bz",
    database: "railway",
    port: 5895,
});

var transporter = nodemailer.createTransport({
    service: "gmail",
    port: 465,
    auth: {
      user: ten,
      pass: "Admin@123",
    },
    tls: {
      rejectUnauthorized: false,
    },
  });
  router.post("/", async (req, res) => {
    let status, error;
    console.log("run");
    const {
      token,
      amount,
    } = req.body;
    try {
      await Stripe.charges
        .create({
          source: token.id,
          amount,
          currency: "usd",
        })
        .then((charge) => {
              var mailOptions = {
                from: ten,
                to: ten2,
                subject: "Hóa Đơn Điện Tử",
                text: "Success"
              };
  
              transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                  console.log(error);
                } else {
                  console.log("Email sent: " + info.response);
                }
              });
            
          status = "success";
        });
    } catch (error) {
      console.log(error);
      status = "Failure";
    }
    res.json({ error, status });
  });
module.exports = router;
var express = require('express');
var router = express.Router();
// const userModel = require("./users");

/* GET home page. */
//  router.get('/', function(req, res, ) {
  res.render("index");
 // });

router.get('/', function(req, res, ) {
     req.session.ban = true;
  res.render("index");
 // const createduser = await userModel.create({
   // username: "harsh",
   // age: 25,
   // name: "harsh"
 //   });
 // res.send("createduser");
});

router.get("/checkban", function(req, res){
  console.log(req.session);
  res.send("welcome to pinkcity");
});



module.exports = router;
 
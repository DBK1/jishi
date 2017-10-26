var express = require('express');
var router = express.Router();
var fs=require("fs");
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
  router.post('/dbk', function(req, res, next) {
    res.header("Access-Control-Allow-Origin","*");
    
    res.send({data1:req.body.a1,data2:req.body.a1});
    fs.writeFile("public/dbk.txt",req.body.a1+":"+req.body.b1,function (err) {
      // res.render('index');
      fs.readFile("public/dbk.txt","utf-8",function (err,data) {
        var num=parseInt(data.split(":")[0]);
        var num2=parseInt(data.split(":")[1]);
        res.send({data1:num,data2:num2})
      })
    })
 });

module.exports = router;

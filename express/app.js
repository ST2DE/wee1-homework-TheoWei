var express = require('express');
var app = express();

app.get('/about_me',function(req,res){
  var name = req.query.name;
  res.send("<html><head><body>Hello "+name+" !</body></head></html>")
})



app.listen(3000);
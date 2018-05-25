var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

var engine = require('ejs-locals');
app.engine('ejs',engine);
app.set('views','./views');
app.set('view engine','ejs');

app.get('/about_me',function(req,res){
  res.render('index');
})

app.get('/about_me/',function(req,res){
  
  var name = req.query.name;
  res.render('index2',{'name':name});
})



app.listen(3000);

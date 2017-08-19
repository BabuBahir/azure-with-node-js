var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var azuresql = require('./sqlAzure.js'); 

 

//To parse URL encoded data
app.use(bodyParser.urlencoded({ extended: false }))

//To parse json data
app.use(bodyParser.json())

app.set('view engine', 'ejs');
app.set('views','./views');
app.use('/static', express.static('public'));


app.get('/', function(req, res){
   res.render("getData");
});

app.listen(3000);


/////////////////////////////////////////////////

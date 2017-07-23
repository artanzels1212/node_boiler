var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

//==== set viewes -----
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));
//=========midddlewares======
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
//======static==========
app.use(express.static(path.join(__dirname,'public')));

//=====routes=========
app.get('/', function(req, res){
	res.render('index');
});


//=========LISTEN==8080====

app.listen(8080, function(){
	console.log("app running on 8080");
});
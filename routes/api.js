var Cleverbot = require('../lib/cleverbot');/*first implement the connection to cleverbot webservice*/
var bodyParser = require('body-parser');
var CBots = new Cleverbot
	,name = 'Ametbot'
	,express = require('express');
	
var app = express();

app.use(bodyParser.json('application/json'));

app.post('/message/', function(req,res){
	if (typeof(req.body.message)!= 'undefined'){
		var message = req.body.message;
		CBots.write(message, function callback(answer){
			return res
			.status(201)
			.json(answer);
		})
	}
	else{
		return res
			.status(400)
			.send('your request is wrong');
	}
})

module.exports=app;

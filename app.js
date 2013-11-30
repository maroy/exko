var express = require('express');
var app = express();

app.get('/', function(req,res) {
	res.send('Index');
});

app.listen(3000);
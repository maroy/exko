var express = require('express');
var app = express();

app.get('/', function(req,res) {
	res.send('Index');
});

app.get('/api/items', function(req,res) {
	res.json(['Item One', 'Item Two', 'Item Three']);
});

app.use(express.static(__dirname + '/public'));

app.listen(3000);
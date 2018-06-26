const e = require('express');
const eh = require('express-handlebars');

var app = e();

console.log('Starting server...');

app.engine('handlebars', eh({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function(request, response) {
	response.render('home');
});

app.listen(8000);
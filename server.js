const e = require('express');
const eh = require('express-handlebars');

const PORT = process.env.PORT;

var app = e();

console.log('Starting server...');

app.engine('handlebars', eh({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function(request, response) {
	response.render('home');
});

app.listen(PORT || 8000);

const e = require('express');
const eh = require('express-handlebars');
var axios = require('axios');

const PORT = process.env.PORT;

var app = e();

console.log('Starting server...');

app.engine('handlebars', eh({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(e.static('.'));


app.get('/', function(request, response) {
	response.render('index');
});

app.listen(PORT || 8000);

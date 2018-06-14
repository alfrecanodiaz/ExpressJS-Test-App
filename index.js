var express = require('express');
var app = express();

var web_routes = require('./app/routes/web.js');
var api_routes = require('./app/routes/api.js');

//first parameter is group route
//it will be called like /express/home
app.use('/web', web_routes);
app.use('/api', api_routes);

app.listen(3000);
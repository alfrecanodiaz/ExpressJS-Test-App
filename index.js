var express = require('express');
var app = express();

var web_routes = require('./app/routes/web.js');
var api_routes = require('./app/routes/api.js');

//Middleware function to log request protocol
app.use('/web', function(req, res, next) {
    console.log("A request for things received at {web} " + Date.now());
    next();
 });

 app.use('/api', function(req, res, next) {
    console.log("A request for things received at {api} " + Date.now());
    next();
 });

//first parameter is group route
//it will be called like /express/home
app.use('/web', web_routes);
app.use('/api', api_routes);

//default not found route error
app.get('*', function(req, res) {
    res.send('Sorry, this is an invalid URL.');
});

app.listen(3000);
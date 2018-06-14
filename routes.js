var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.send("Home");
});

router.get('/dashboard', function(req, res) {
    res.send("Dashboard");
});

router.post('/dashboard', function(req, res) {
    res.send("Called POST method");
});

//export this router to use in index.js
//both index.js and routes.js should be in same directory
module.exports = router;
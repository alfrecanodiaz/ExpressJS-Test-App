var express = require('express');
var router = express.Router();

router.get('/page/:id', function(req, res) {
    res.send("The id you specified is " + req.params.id);
});

router.get('/page/:name/:id', function(req, res) {
    res.send("name: " + req.params.name + " id: " + req.params.id);
});

//export this router to use in index.js
//both index.js and routes.js should be in same directory
module.exports = router;
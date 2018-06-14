var express = require('express');
var router = express.Router();

router.get('/form', function(req, res) {
    res.send("Called Form Method");
});

//export this router to use in index.js
//both index.js and routes.js should be in same directory
module.exports = router;
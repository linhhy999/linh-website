var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resoughgfhgfhgfhgfhgfhgrce');
});

router.get('/sdsd', function(req, res, next) {
    res.send('linh');
});

module.exports = router;
var express = require('express');
var router = express.Router();
var userModel = require('../model/user')
    /* GET home page. */

router.get('/', function(req, res, next) {
    res.render('index', { loginfail: false });
});

router.post('/', function(req, res, next) {
    if (req.body.typee == "LogIn")
        if (userModel.checkPassword(req.body.username, req.body.password))
            res.render('newsfeed');
        else
            res.render('index/', { loginfail: true, errText: "Đăng nhập thất bại" ,textColor: 'color:red'});
    else {
        if (req.body.password && req.body.password == req.body.confirmpassword && userModel.createUser(req.body.username, req.body.password))
        res.render('index/', { loginfail: true, errText: "Đăng ký thành công" ,textColor:'color:green'});
        else
            res.render('index/', { loginfail: true, errText: "Đăng ký thất bại" ,textColor:'color:red'});
    }
});

router.get('/sdsd', function(req, res, next) {
    res.send('nam');
});

module.exports = router;
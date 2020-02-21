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
            res.render('index', { loginfail: true, errText: "The username or password you entered isn't correct. Try entering it again." ,textColor: 'color:red'});
    else {
        var validMess=userModel.validUsername(req.body.username)
        if (req.body.password !== req.body.confirmpassword)
            res.render('index', { loginfail: true, errText: "Password are not matching" ,textColor:'color:red'});
        else if (!validMess.isValid) 
            res.render('index', { loginfail: true, errText: validMess.mess ,textColor:'color:red'});
        else if (!userModel.createUser(req.body.username,req.body.password))
            res.render('index', { loginfail: true, errText: "Oops! This username has already been taken." ,textColor:'color:red'});
        else
            res.render('index', { loginfail: true, errText: validMess.mess ,textColor:'color:green'});
    }
});

router.get('/sdsd', function(req, res, next) {
    res.send('nam');
});

module.exports = router;
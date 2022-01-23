const express = require('express');
const app = express();
require('dotenv').config();
const bodyParser = require('body-parser');

htmlPath = __dirname + '/views/index.html';
assetsPath = __dirname + '/public';

app.enable('trust proxy');
app.use('/public', express.static(assetsPath));
app.use(
    function(req, res, next) {
        let str = req.method + " " + req.path + " - " + req.ip;
        console.log(str);
        next();
    }
)
app.use(bodyParser.urlencoded({ extended: false }));

app.get(
    '/',
    function(req, res) {
        res.sendFile(htmlPath);
    }
);

app.get(
    '/json',
    function(req, res) {
        if(process.env.MESSAGE_STYLE === "uppercase"){
            res.json({"message": "HELLO JSON"});
        }
        else{
            res.json({"message": "Hello json"});
        }
    }
);

app.get(
    '/now',
    function(req, res, next) {
    req.time = new Date().toString();
    next();
    }, function(req, res) {
        res.send({time: req.time});
});

app.get(
    '/:word/echo',
    function(req, res) {
        res.json({echo: req.params.word});
    });

app.get(
    '/:word/echo',
    function(req, res) {
        res.json({echo: req.params.word});
    });

app.route('/name').get(
    function(req, res) {
        res.json({name: req.query.first + ' ' + req.query.last});
    }).post(
    function(req, res) {
        res.json({name: req.body.first + ' ' + req.body.last});
    });









































 module.exports = app;

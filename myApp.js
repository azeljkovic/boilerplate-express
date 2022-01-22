var express = require('express');
var app = express();
require('dotenv').config()

htmlPath = __dirname + '/views/index.html';
assetsPath = __dirname + '/public';


app.use('/public', express.static(assetsPath));

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








































 module.exports = app;

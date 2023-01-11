var express = require('express');
var app = express();
app.get('/', function (req, res) {
res.send("hello bhaaru_siva .....hh.");
});
app.get('/page1', function (req, res) {
    res.send("hello bhaaru_siva .....hh.adada");
    });
app.listen(5000);
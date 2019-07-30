var express = require('express');
var app = express();
var http = require('http');


app.post('/api/login', function (req, res) {
    var email = req.body.email;
    var senha = req.body.senha;

    res.status(200).send([{
        'email': email,
        'senha': senha
    }]);
});

app.get('/api/get',function(req,res){
    res.status(200).send();
});

app.listen(3000);
http.createServer(app).listen(process.env.PORT || 8080);
console.log('A api esta no ar');

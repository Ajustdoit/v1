var express = require('express');//引入express模块
var app = express();

//定义方法
app.get('/cfapi', function (req, res) {
    res.send('HellowWorld')
});

var mysql = require('mysql');
var connection = mysql.createConnection({
    host: '192.168.3.119',
    port: '3306',
    user: 'root',
    password: 'haoli',
    database: 'test'
});
connection.connect();
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    if (error) throw error;
    console.log(results);
});


//响应接口
app.get('/cfapi/list/product', function (req, res) {
//数据
    let result = {
        err: 0,
        msg: 'ok',
        data: {
            "name": "huawei",
            "price": "1999",
            "title": "huawei huawei huawei",
            "id": "1"
        }
    };
    res.send(result)
});


//定义端口，此处所用为3000端口，可自行更改
var server = app.listen(3000, function () {
    console.log('runing 3000...');
});

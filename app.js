var http = require('http');

var app = http.createServer(function(req, res){
    console.log('get the reqest.')
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write('<head><meta charset="utf-8"/></head>');
    res.write('<h1>你是不是傻</h1>');
    res.end();
}).listen(3002,'172.18.77.43',function(){
    console.log('Server is created at port 3002.');
});
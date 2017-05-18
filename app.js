var http = require('http');

var app = http.createServer(function(req, res){
    console.log('get the reqest.')
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write('<h1>你是不是傻</h1>');
    res.end();
}).listen(3002,'119.23.254.236',function(){
    console.log('Server is created at port 3002.');
});
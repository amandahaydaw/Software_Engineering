const http = require("http");
const fs=require("fs")
const url = require("url");
const addrress = 'http://localhost:8080/';
var q = url.parse(`${addrress}${__filename}`, true);

http.createServer(function(req,res){
    fs.readFile('./html/website.html', function(err, page) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(page);
    res.end();

    });
}).listen(8080);

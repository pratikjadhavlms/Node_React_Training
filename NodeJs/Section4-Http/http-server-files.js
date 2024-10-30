const http = require('http');
const fs = require('fs');

http.createServer((req, res)=>{
    console.log(req.method);

    if(req.url === '/'){
        fs.readFile('sample.html', 'utf8', (err, data)=>{
            res.writeHead(200, {'Content-type': 'text/html'});
            res.end(data);
        })
    }
    else{
        res.writeHead(404, {'Content-type': 'text/plain'});
        res.end('404 Page not found');
    }
}).listen(4001);
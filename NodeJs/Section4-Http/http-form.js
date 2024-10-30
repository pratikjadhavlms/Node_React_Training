const http = require('http');
const fs = require('fs');

http.createServer((req, res)=>{
    let body = '';

    if(req.method === 'GET'){
        fs.readFile('./http-form.html', 'utf8', (err, data)=>{
            if(err) throw err;
            res.writeHead(200, {'Content-type': 'text/html'});
            res.write(data);
            res.end();
        })
    }else if(req.method === 'POST'){
        req.on('data', (data)=>{
            body += data;
        })

        req.on('end', ()=>{
            res.writeHead(200, {'Content-Type': 'Text/html'});
            res.write(body, ()=>{
                res.end();
            })
        })
    }else{
        res.writeHead(404, {'Content-type': 'text/plain'});
        res.end('404 Page not found');
    }
}).listen(4001);

console.log('Server is running on port 4001');
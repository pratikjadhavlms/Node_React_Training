const https = require('https');
const http = require('http');
const fs = require('fs');

const url = 'https://jsonplaceholder.typicode.com/posts';

http.createServer((req, serverRes)=>{

    if(req.method === 'GET' && req.url === '/posts'){
        https.get(url, (httpRes) => {
            httpRes.on('data', data => {
                httpRes.setEncoding('utf8');
                // console.log(data);
                serverRes.write(data);
            })

            httpRes.on('end', ()=> {
                serverRes.end();
                console.log('Data fetched successfully');
            })
        })
    }
    else{
        serverRes.writeHead(404, {'Content-type': 'text/plain'});
        serverRes.end('404 Page not found');
    }
}).listen(4001);
console.log('Server is running on port 4001');
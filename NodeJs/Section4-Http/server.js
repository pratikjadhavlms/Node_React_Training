const http = require('http');

const server = http.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type':'text/html'});

    res.end('<h1>Welcome to the server<h1>');
})

server.listen(4001);

console.log('Server is running on port 4001');
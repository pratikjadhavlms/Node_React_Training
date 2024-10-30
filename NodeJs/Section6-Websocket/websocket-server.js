const websocketServer = require('ws').Server;
const wss = new websocketServer({port: 4141});

wss.on('connection', (ws)=>{

    ws.on('message', (message)=>{

        wss.clients.forEach((client)=>{
            client.send(message);
        })
        
        console.log(message.toString('utf8'));
    })

    console.log('we are connected');
})
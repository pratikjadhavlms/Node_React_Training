const ws = new WebSocket('ws://localhost:4141');

// ws.onmessage = (payload)=>{
//     console.log(payload);
// }

// ws.onmessage = (event) => {
//     const reader = new FileReader();
//     reader.onload = () => {
//         console.log(reader.result);
//     };
//     reader.readAsText(event.data);
//     displayMessage(event.data);
// };

ws.onmessage = (event) => {
    if (typeof event.data === 'string') {
        console.log(event.data);
        displayMessage(event.data);
    } else {
        const reader = new FileReader();
        reader.onload = () => {
            console.log(reader.result);
            displayMessage(reader.result);
        };
        reader.readAsText(event.data);
    }
};

ws.onopen = ()=>{
    console.log('Connection open');
    displayTitle('Connected to the server');
}

ws.onclose = ()=>{
    console.log('Connection closed');
    displayTitle('Disconnected from the server');
}

displayTitle = (title)=>{
    document.querySelector('h2').innerText = title;
}

displayMessage = (message)=>{
    let h2 = document.createElement('h2');
    h2.innerText = message;
    document.querySelector('div.messages').appendChild(h2);
}

document.forms[0].onsubmit = ()=>{
    let input = document.getElementById('message').value;

    // console.log(input);
    ws.send(input);
}
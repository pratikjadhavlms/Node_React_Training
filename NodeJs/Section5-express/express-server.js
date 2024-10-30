const express = require('express');
const app = express();

const port = process.env.PORT || 9999;

app.get('/', (req, res)=>{
    res.send('Welcome to the homepage');
})

app.get('/about', (req, res)=>{
    res.send('The about page');
})

app.listen(port);
console.log(`Server is running on port ${port}`);

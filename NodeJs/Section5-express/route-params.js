const express = require('express');
const app = express();

app.get('/', (req,res)=>{
    res.send('Welcome to the homepage');
})

app.get('/posts/:id', (req, res)=>{
    res.send(`Post id is ${req.params.id}`); // http://localhost:9999/posts/1
})

app.get('/posts/:id/category/:category_id', (req, res)=>{
    res.send(`<p>Post id is ${req.params.id}<p>
        <p>Category id is ${req.params.category_id}<p>`); // http://localhost:9999/posts/1/category/2
})

app.listen(9999);
console.log('Server is running on port 9999');
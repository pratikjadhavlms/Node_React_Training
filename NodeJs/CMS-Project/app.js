const express = require('express');
const app = express();
const path = require('path');
const { engine } = require('express-handlebars');

app.use(express.static(path.join(__dirname, 'public')));

//set view engine
app.engine('handlebars', engine({defaultLayout: 'home'}));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

//load routes
const home = require('./routes/home/index');
const admin = require('./routes/admin/index');
const posts = require('./routes/admin/posts');

//use routes
app.use('/', home);
app.use('/admin', admin);
app.use('/admin/posts', posts);

app.listen(4500, () => {
    console.log('Server is running on port 4500');
});

const mongoose = require('mongoose');
const User = require('./models/User');

mongoose.connect('mongodb://localhost:27017/mongoose');

mongoose.connection
.once('open', ()=>{
    console.log('Connection has been made');
})
.on('error', (error)=>{
    console.log('Connection error: could not connect', error);
});

const newUser = new User.User({
    firstName: 'John',
    lastName: 'Doe',
    isActive: 1
});

newUser.save().then(()=>{
    console.log('User has been saved', newUser);
})
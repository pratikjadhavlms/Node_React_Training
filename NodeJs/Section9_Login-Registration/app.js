const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const User = require('./models/User');
const bcrypt = require('bcryptjs');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect('mongodb://localhost:27017/login');

mongoose.connection
    .once('open', () => {
        console.log('Connected to the database');
    })
    .on('error', (error) => {
        console.log('Connection error: could not connect to database', error);
    });
  
app.post('/register', (req,res)=>{
    const newUser = new User();
    newUser.email = req.body.email;
    newUser.password = req.body.password;

    bcrypt.genSalt(10, (err, salt)=>{
        bcrypt.hash(newUser.password, salt, (err, hash)=>{
            if(err) return err;

            newUser.password = hash;

            newUser.save().then( userSaved=>{
                res.send('User saved');
            }).catch( err=>{
                res.send('User not saved' + err);
            })

        })
    })
})    

app.post('/login', (req, res)=>{
    User.findOne({email: req.body.email}).then(user=>{
        if(user){
            bcrypt.compare(req.body.password, user.password, (err, matched)=>{
                if(err) return err;

                if(matched){
                    res.send('User has been able to login');
                }else{
                    res.send('User has not been able to login');
            }})
        }
    })
})

app.listen(4111, ( )=>{
    console.log('Server is running on port 4111');
})

const mongoose = require('mongoose');
const User = require('./models/User');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = 4444 || process.env.PORT;

mongoose.connect('mongodb://localhost:27017/mongoose');

mongoose.connection
    .once('open', () => {
        console.log('Connected to the database');
    })
    .on('error', (error) => {
        console.log('Connection error: could not connect to database', error);
    });

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.get('/users', (req, res) => {
    User.find({}).then(users => {
        res.status(200).send(users);
    }).catch(error => {
        console.error('Error finding users:', error);
        res.status(404).send('Could not find users');
    })
})

app.post('/users', (req, res) => {
    const newUser = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        isActive: req.body.isActive
    });
    console.log('New User :', newUser);

    newUser.save().then((savedUser) => {
        console.log('User has been saved', savedUser);
        res.send(`User has been saved ${savedUser}`);
    }).catch((error) => {
        console.error('Error saving user:', error);
        res.status(404).send('User could not be saved');
    })
})

app.patch('/users/:id', (req, res) => {
    const id = req.params.id;
    const firstName = req.body.firstName;

    User.findByIdAndUpdate(id, { $set: { firstName: firstName } }, { new: true })
        .then(savedUser => {
            res.send('User saved by patch');
        });
});

app.put('/users/:id', (req, res)=>{

    User.findOne({_id: req.params.id}).then(user=>{
        user.firstName = req.body.firstName;
        user.lastName = req.body.lastName;

        user.save().then(userSaved=>{
            res.send(userSaved);

        }).catch(err=>console.log(err));
    });
 
});


app.delete('/users/:id', (req, res)=>{

    User.findByIdAndRemove(req.params.id).then(userRemoved=>{

        res.send(`User ${userRemoved.firstName} removed`);

    });

});



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}); 
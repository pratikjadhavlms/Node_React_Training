// const mongoClient = require('mongodb').MongoClient;

// mongoClient.connect('mongodb://localhost:27017/', function (err, client) {
//     if (err) console.log('Error occurred while connecting to MongoDB');

//     console.log('Successfully connected');

//     // const db = client.db('animals');

    

//     //Creating
//     // db.collection('mammals').insertOne({
//     //     name: 'Whale'
//     // }, (err, result) => {
//     //     if (err) { return console.log(err); }

//     //     console.log('inserted');
//     // })

//     //Reading
//     // db.collection('mammals').find().toArray(function (err, result) {
//     //     if (err) throw err;
//     //     console.log(result);
//     // });

//     // // Update 
//     // db.collection(mammals).findOneandUpdate({ name: 'Whale' },
//     //     { $set: { name: 'Elephant' } }).then(result => {
//     //         console.log(result);
//     //     }).catch(err => {
//     //         console.log(err);
//     //     });
    
//     // // Delete
//     // db.collection(mammals).findOneandDelete({ name: 'Elephant' }).then(result => {
//     //     console.log(result);
//     // }).catch(err => {
//     //     console.log(err);
//     // });

//     // db.collection('mammals').deleteMany({ name: 'Elephant' }, (err, result) => {
//     //     if (err) return console.log(err);
//     //     console.log('deleted');
//     // });

//     // db.collection('mammals').deleteOne({ name: 'Elephant' }, (err, result) => {
//     //     if (err) return console.log(err);
//     //     console.log('deleted');
//     // });

// });





const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/');

mongoose.connection
.once('open', ()=>{
    console.log('Connection has been made');
})
.on('error', (error)=>{
    console.log('Connection error: could not connect', error);
});
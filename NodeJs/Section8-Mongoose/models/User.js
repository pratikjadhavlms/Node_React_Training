const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName:{
        type: String,
        required: true,
        mongoose: 3,
        trim: true
    },
    lastName:{
        type: String,
        required: true,
        mongoose: 3,
        trim: true
    },
    isActive:{
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model('users', userSchema);
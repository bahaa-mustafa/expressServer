const mongoose = require('mongoose');
const { Schema } = mongoose;

const postSchema = new Schema({
    userName:{
        type: String,
        require:true
    },
    password:{
        type: String,
        require:true
    }
});

const User = mongoose.model('User', postSchema);

module.exports = User;
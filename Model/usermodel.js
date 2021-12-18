const mongoose = require('mongoose');

// const { model } = require('mongoose');

const userSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    date_of_birth:Date,
    school: String
})

const usermodel = mongoose.model('users', userSchema);

module.exports = usermodel;
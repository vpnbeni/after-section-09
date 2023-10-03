/* eslint-disable prettier/prettier */
const mongoose = require('mongoose');
// name ,email, photo, password, passwordConfirm
const validator = require('validator');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A user must have a name'],
        trim: true
        // maxlength: [40, 'A user name must have less or equal then 40 characters'],
        // minlength: [10, 'A user name must have more or equal then 10 characters']
        // validate: [validator.isAlpha, 'Tour name must only contain characters']
    },
    email: {
        type: String,
        required: [true, 'User email'],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, 'Enter a valid email address']
    },
    photo: { 
        type: String
    },
    password: {
        type: String,
        required: [true, 'Please enter a password'],
        minlength: 8
    },
    passwordConfirm: {
        type: String,
        required: [true, 'please confirm your password']
    }
});
const User = mongoose.model('User', userSchema);

module.exports = User;

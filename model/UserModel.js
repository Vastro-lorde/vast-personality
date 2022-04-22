/ This is the model for the Hospitals which are the users.

// importing mongoose
const mongoose = require('mongoose');

// created the Schema for the User using .Schema() method in the mongoose class object creator that's why its mongoose.Schema.
const UserSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        required: ['true', "please input your email"],
    },
    password: {
        type: String,
        required: ['true', "please input your password"]
    },
    Gender: {
        type: String,
        enum: {
            values: ['male', 'female', 'other'],
            message: "gender can either be 'male','female' or 'other'!",
        }
    },
    PlaceOfBirth: {
        type: String
    },
    LonLatOfBirth: {
        type: String
    },
    DayOfBirth: {
        type: String
    },
    MonthOfBirth: {
        type: String
    },
    YearOfBirth: {
        type: String
    },
    HourOfBirth: {
        type: String
    },
    MinuteOfBirth: {
        type: String
    },
    SecondOfBirth: {
        type: String
    }

});

// creates the User using the mongoose model() method which takes in the name of the model and the Schema(in our case userSchema)
const User = mongoose.model('User', hospitalSchema)

// Exporting the User model.
module.exports = User;
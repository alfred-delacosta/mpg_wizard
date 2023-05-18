const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String,
        required: [true, 'An email address is required.']
    },
    password: {
        type: String,
        required: [true, 'A password is required.']
    }
}, {timestamps: true});

userSchema.virtual('fullName').get(function() {
    return this.firstName + " " + this.lastName;
});

module.exports = mongoose.model('User', userSchema);
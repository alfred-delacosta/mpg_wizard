const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const { JWT_ACCESS_SECRET, JWT_REFRESH_SECRET } = process.env;

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

userSchema.methods.generateJwt = function() {
    const expiresIn = '2d';

    return jwt.sign({
        sub: this.id
    }, JWT_ACCESS_SECRET, { expiresIn });
}

userSchema.methods.generateRefreshToken = function() {
    const expiresIn = '14d';

    return jwt.sign({
        sub: this.id,
    }, JWT_REFRESH_SECRET, { expiresIn });
}

module.exports = mongoose.model('User', userSchema);
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
    const expiresIn = '15m';

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

userSchema.methods.generatePasswordResetJWT = function() {
    const secret = this.password + "-" + this.createdAt;
    const expiresIn = '4h';

    return jwt.sign({
        sub: this.id
    }, secret, { expiresIn });
};

userSchema.methods.getPasswordResetSecret = function() {
    return this.password + "-" + this.createdAt;
};

module.exports = mongoose.model('User', userSchema);
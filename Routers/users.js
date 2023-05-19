const express = require('express');
const User = require('../Models/User');
const passport = require('passport');
const router = express.Router();
const argon2 = require('argon2');
const { setRefreshToken } = require('../Auth/RefreshTokenUtils');
const { PASSWORD_HASHING_SECRET } = process.env;

router.post("/register", async function(req, res, next) {
    try {
        let user = new User(req.body);

        // Hash password
        user.password = await argon2.hash(user.password, {secret: Buffer.from(PASSWORD_HASHING_SECRET)});

        let result = await user.save();

        const accessToken = result.generateJwt();
        const refreshToken = result.generateRefreshToken();

        setRefreshToken(res, refreshToken);

        res.send({ user: result, jwt: accessToken });
    } catch (error) {
        res.status(400).send(error);
    }
})

router.post("/login", async function(req, res) {
    try {
        let user = await User.findOne({ email: req.body.email });

        if (user == null) {
            res.status(400).send({ msg: "No user found with that email"})
        } 
        else {
            const match = await argon2.verify(user.password, req.body.password, {secret: Buffer.from(PASSWORD_HASHING_SECRET)});
            if (match) {
                setRefreshToken(res, user.generateRefreshToken());
                const accessToken = user.generateJwt();

                res.status(200).send({ id: user.id, accessToken });
            }
            else {
                res.status(400).send( {msg: 'Invalid email and password combination.' })
            }
        }
    } catch (error) {
        res.status(400).send(error);
    }
})

router.get("/forgotPassword", function(req, res) {
    // TODO Finish this
    res.send("Still needs to be done.");
})

router.get("/resetPassword.:jwt", function(req, res) {
    // TODO Finish this
})

router.post("/refresh", async function(req, res) {
    const refreshToken = req.cookies.refreshToken;

    if (refreshToken) {
        res.send(refreshToken);
    }
    else {
        res.status(401).send({ msg: 'You are not authorized.'})
    }
})

router.get("/protected", passport.authenticate('jwt', { session: false }), function(req, res) {
    res.send("You are authenticated!");
})

module.exports = router;
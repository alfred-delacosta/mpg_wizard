const express = require('express');
const User = require('../Models/User');
const router = express.Router();
const bcrypt = require('bcrypt');
const saltRounds = 10;
const { setRefreshToken } = require('../Auth/RefreshTokenUtils');

router.post("/register", async function(req, res, next) {
    try {
        let user = new User(req.body);

        // Hash password
        user.password = await bcrypt.hash(user.password, saltRounds);

        let result = await user.save();

        const accessToken = result.generateJwt();
        const refreshToken = result.generateRefreshToken();

        setRefreshToken(res, refreshToken);

        res.send({ user: result, jwt: accessToken });
    } catch (error) {
        res.status(400).send(error);
    }
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

module.exports = router;
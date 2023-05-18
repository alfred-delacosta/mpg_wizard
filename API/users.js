const express = require('express');
const User = require('../Models/User');
const router = express.Router();
const bcrypt = require('bcrypt');
const saltRounds = 10;

router.get("/register", async function(req, res, next) {
    try {
        let user = new User(req.body);

        // Hash password
        user.password = await bcrypt.hash(user.password, saltRounds);

        let result = await user.save();

        res.send(result);
    } catch (error) {
        res.status(400).send(error);
    }
})
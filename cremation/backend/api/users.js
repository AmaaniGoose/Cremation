const express = require('express');
const router = express.Router();

const User = require('../models/user');


router.get('/', (req, res) => {
    User.find()
    .then(users => res.json(users))
    .catch(err => console.log(err))
});

router.post('/', (req, res) => {
    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        cremate: req.body.cremate
    });
    newUser.save()
        .then(() => res.json({
            message: "Created account successfully"
        }))
        .catch(err => res.status(400).json({
            "error": err,
            "message": "Error creating account"
        }))
});
module.exports = router;
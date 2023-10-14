const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/user.js');
const jwt = require('jsonwebtoken');

app.use(express.json());
app.use(cors());

const secretKey = "123445s"

mongoose.connect('mongodb+srv://durgakrishnavamsi:3IWxDX2YftNq6Kel@cluster0.dwerdfq.mongodb.net/')

app.get("/", (req, res) => {
    res.send("Server is Working Fine")
})

app.post("/register", async (req, res) => {
    const {username, password} = req.body;

    const user = await User.create({username, password})

    res.json(user);

})

app.post("/login", async (req, res) => {
    const {username, password} = req.body;
    const user = await User.findOne({username});

    console.log(user);

    if(user.password === password) {
        jwt.sign({username, id : user._id}, secretKey, {}, (err, token) => {
            res.status(200).json({msg : "logged in successfully", token : token})
        })
    }
    else {
        res.status(400).json({msg : "Log in Failed ..."})
    }


})

app.listen(4000, () => console.log("Server is listening to port 4000"));
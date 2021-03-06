//Waiter, takes orders too kitchen/models
const express = require('express')
const router = express.Router()
const burger = require('../models/burger.js')


router.get('/', function (req,res) {
    res.render("index")
})

router.post("/api/burgers", function (req,res) {
    console.log("this is req.body", req.body)
    burger.insertOne(req.body.newBurger, function (result) {
        console.log(result)
    })
})

module.exports = router;
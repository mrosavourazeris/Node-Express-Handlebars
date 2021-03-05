//Waiter, takes orders too kitchen/models
const express = require('express')
const router = express.Router()



const burger = require('../models/burger.js')

router.get('/', function (req,res) {
    res.render("index")
})

module.exports = router;
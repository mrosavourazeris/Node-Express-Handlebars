//Waiter, takes orders too kitchen/models
const express = require('express')
const router = express.Router()
const burger = require('../models/burger.js')



router.get("/", function (req,res) {
    burger.selectAll(function(data) {
        const allBurgers = {
            burgers: data
        };
        res.render("index",allBurgers)
    })
})

router.post("/api/burgers", function (req,res) {
    burger.insertOne(req.body.newBurger, function (result) {
        console.log(result)
    })
})

router.put("/api/burgers/:id", function (req,res) {
    const condition = req.params.id;
    burger.updateOne(req.body.devoured, condition, function (result){
        if (result.changedRows == 0)  {
            return res.status(404).end
        } else {
            res.status(200).end
        }
    })
})




module.exports = router;
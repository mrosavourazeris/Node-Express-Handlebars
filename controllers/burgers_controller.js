//Waiter, takes orders too kitchen/models
const express = require('express')
const router = express.Router()
const burger = require('../models/burger.js')



router.get("/", function (req,res) {
    burger.selectAll(function(data) {
        const allBurgers = {
            burgers: data
        };
        // console.log("These are all burgers", allBurgers)
        res.render("index",allBurgers)
    })
})

router.post("/api/burgers", function (req,res) {
    // console.log("this is req.body", req.body)
    burger.insertOne(req.body.newBurger, function (result) {
        console.log(result)
    })
})

router.put("/api/burgers/:id", function (req,res) {
    // console.log(typeof(req.body.devoured))
    // console.log("this is req.body", typeof(parseInt(req.params.id)))
    // console.log("put works")
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
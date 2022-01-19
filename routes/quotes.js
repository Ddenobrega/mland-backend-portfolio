const express = require('express')
const router = require("express").Router();
const discord = require("../discord/index")
const addToDb = require("../db/models/quote")
const db = require("../db/db")

//router request data parser
router.use(express.json())

//database query function
function queryDb(){
    addToDb.count().exec(function (err, count){
        var random = Math.floor(Math.random() * count)

        //  send to discord api
        addToDb.findOne().skip(random).exec(function (err, result){
            discord.Send(result.quote, result.author)
        })
    })
}

//main post request
router.post("/", async(req, res) => {
    req.headers = {
        "Content-Type": "application/json"
    }
    if(req.body.quote != '' && req.body.quote.includes("@everyone") == false && req.body.quote.includes("@here") == false && req.body.author.includes("@everyone") == false && req.body.author.includes("@here") == false){
        console.log(`post request recv from ${req.body.author}`)
        const result = new addToDb({
            quote:  req.body.quote.toString(),
            author: req.body.author.toString()
        })
        result.save()
        res.sendStatus(200)
    }
    else{
        res.sendStatus(400)
    }
})

// #cult-quotes message interval
setInterval(queryDb, 30000)

module.exports = router

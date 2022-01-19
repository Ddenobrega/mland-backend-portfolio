const router = require("express").Router()
const express = require("express")
const axios = require("axios")

// data parser
router.use(express.json())


// Ip lookup Information
async function getInfo(ip){
    const url = `https://ipapi.co/${ip}/json`
    const result = await axios.post(url).then(response => response)
    .then(data => data).catch(err => err)
    parsedResult = result.data 
    return parsedResult

}

// ip post handler 
router.post("/ip", async (req, res) => {
    res.header('Content-Type', 'application/json')
    await getInfo(req.body.ip).then(result => res.send(result))

})

module.exports = router
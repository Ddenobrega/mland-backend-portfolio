const axios = require('axios')
const discord = require("./bot")
const general = require('./randomMessageGeneral')

function timer() {
    var second = 1000
    var minute = second * 60;
    var hour = minute * 60;
    var maxTime = hour
    var randTime = Math.floor(Math.random() * (maxTime - second + 1 ) + second );
    return(randTime)
}


setInterval(() => {
    const genUrl = process.env.WEBHOOK_GENERAL
    axios.post(genUrl, {content: general.send()});
}, timer())  



async function Send(quote, author){ 
    
    const url = process.env.WEBHOOK
    const parsed ="**" + quote + "**  ~ *" + author + "*"
    axios.post(url, {content: parsed})

} 
var returns = { Send }

module.exports = returns;
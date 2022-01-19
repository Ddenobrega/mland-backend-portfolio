const db = require("../db")

const quoteSchema = new db.Schema({
    quote: {
        type: String
    },
    author: {
        type: String
    }
})

const Quote = db.model("quote", quoteSchema);
module.exports = Quote;
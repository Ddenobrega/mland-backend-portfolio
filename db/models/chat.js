const db = require("../db")

const generalSchema= new db.Schema({ 
    message : {
        type: String
    }
})

const General = db.model('general', generalSchema);
module.exports = General;
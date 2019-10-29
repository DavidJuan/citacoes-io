const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Quote = new Schema({
    phrase:{
        type: String,
        required: true,
        trim: true
    },
    author:{
        type: String,
        required:true,
        trim: true
    }
})

module.exports = mongoose.model("Quotes", Quote);
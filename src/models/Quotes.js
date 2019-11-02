const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Quote = new Schema({
    phrase:{
        type: String,
        required: true,
        trim: true
    },
    author:{
        type: Schema.Types.ObjectId,
        ref: "Authors",
        required: true
    },
    category:{
        type: Schema.Types.ObjectId,
        ref: "Categories",
        required: true
    },
    midia:{
        type: Schema.Types.ObjectId,
        ref: "Midias",
        required: true
    },
    dateQuote:{
        type: Date,
        required: true,
        trim: true,
        default: Date.now()
    },
},{timestamps:true})

module.exports = mongoose.model("Quotes", Quote);
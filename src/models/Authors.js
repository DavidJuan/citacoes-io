const mongoose = require("mongoose")
const slug = require("mongoose-slug-updater")
mongoose.plugin(slug)

const Schema = mongoose.Schema

const Author = new Schema({
    firstName:{
        type: String,
        required: true,
        trim: true
    },
    lastName:{
        type: String,
        required: true,
        trim: true
    },
    firstNickname:{
        type: String,
        trim: true
    },
    lastNickname:{
        type: String,
        trim: true
    },
    description:{
        type: String,
        required: true,
        trim: true
    },
    birthAge:{
        type: String,
        trim: true
    },
    deathAge:{
        type: String,
        trim: true
    },
    slug:{
        type: String,
        slug: ["firstName","lastName"]
    },
},{timestamps:true})

module.exports = mongoose.model("Authors", Author)
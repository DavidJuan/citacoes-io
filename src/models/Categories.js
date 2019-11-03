const mongoose = require("mongoose")
const slug = require("mongoose-slug-updater")
mongoose.plugin(slug)

const Schema = mongoose.Schema

const Category = new Schema({
    name:{
        type: String,
        required: true,
        trim: true
    },
    slug:{
        type: String,
        slug: "name"
    }
},{timestamps:true})

module.exports = mongoose.model("Categories", Category)
const mongoose = require("mongoose")
const slug = require("mongoose-slug-updater")
mongoose.plugin(slug)

const Schema = mongoose.Schema

const Midia = new Schema({
    name:{
        type: String,
        required: true,
        trim: true
    },
    slug:{
        type: String,
        slug: "name"
    }
})

module.exports = mongoose.model("Midias", Midia)
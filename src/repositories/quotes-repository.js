const mongoose = require("mongoose");
const Quotes = mongoose.model("Quotes");

exports.listQuotes = async () => {
    //listing saved quotes
    const res = await Quotes.find({}, "phrase author");
    return res;
    
}

exports.createQuotes = async (data) => {
    //saving quote conforming model layout
    const quote = new Quotes(data)
    console.log(quote)
    //saving quote on DB
    await quote.save()
}

exports.deleteQuote = async id => {
    await Quotes.deleteOne(id);
}
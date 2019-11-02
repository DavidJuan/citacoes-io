const mongoose = require("mongoose");
const Quotes = mongoose.model("Quotes");

//create
exports.createQuotes = async (data) => {
    //saving conforming model layout
    const quote = new Quotes(data)
    console.log(quote)
    //saving on DB
    await quote.save()
}

//read
exports.listQuotes = async () => {
    //listing saved
    const res = await Quotes.find({}, "phrase author category");
    return res;
    
}

//update
exports.updateQuotes = async (_id, data) => {
    await Quotes.findByIdAndUpdate(_id,{
        $set: data},
        {new: true}
    )
}

//delete
exports.deleteQuotes = async (_id) => {
    await Quotes.deleteOne({_id});
}
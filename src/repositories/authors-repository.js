const mongoose = require("mongoose");
const Authors = mongoose.model("Authors");

//create
exports.createAuthors = async (data) => {
    //saving conforming model layout
    const quote = new Authors(data)
    console.log(quote)
    //saving on DB
    await quote.save()
}

//read
exports.listAuthors = async () => {
    //listing saved
    const res = await Authors.find({}, "firstName lastName description dateCreation slug");
    return res;
    
}

//update
exports.updateAuthors = async (_id, data) => {
    await Authors.findByIdAndUpdate(_id,{
        $set: data},
        {new: true}
    )
}

//delete
exports.deleteAuthors = async (_id) => {
    await Authors.deleteOne({_id});
}
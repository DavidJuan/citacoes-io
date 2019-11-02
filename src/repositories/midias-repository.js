const mongoose = require("mongoose");
const Midias = mongoose.model("Midias");

//create
exports.createMidias = async (data) => {
    //saving conforming model layout
    const midia = new Midias(data)
    console.log(midia)
    //saving on DB
    await midia.save()
}

//read
exports.listMidias = async () => {
    //listing saved
    const res = await Midias.find({}, "name slug");
    return res;
    
}

//update
exports.updateMidias = async (_id, data) => {
    await Midias.findByIdAndUpdate(_id,{
        $set: data},
        {new: true}
    )
}

//delete
exports.deleteMidias = async (_id) => {
    await Midias.deleteOne({_id});
}
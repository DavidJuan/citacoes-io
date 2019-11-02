const mongoose = require("mongoose");
const Categories = mongoose.model("Categories");

//create
exports.createCategories = async (data) => {
    //saving conforming model layout
    const category = new Categories(data)
    console.log(category)
    //saving on DB
    await category.save()
}

//read
exports.listCategories = async () => {
    //listing saved
    const res = await Categories.find({}, "name slug");
    return res;
    
}

//update
exports.updateCategories = async (_id, data) => {
    await Categories.findByIdAndUpdate(_id,{
        $set: data},
        {new: true}
    )
}

//delete
exports.deleteCategories = async (_id) => {
    await Categories.deleteOne({_id});
}
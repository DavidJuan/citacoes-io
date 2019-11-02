const mongoose = require("mongoose");
//importing Categories model //repository
// const Categories = mongoose.model("Categories");
const repository = require("../repositories/categories-repository")
const {validationResult} = require("express-validator")

//create
exports.createCategories = async (req,res) => {
    const{errors} = validationResult(req);

    if (errors.length > 0) {
        return res.status(400).send({message: errors})
    }else{
       try{
        //saving Category conforming model layout
        await repository.createCategories({
            name: req.body.name
        })
        // const Category = new Categories({
        //     phrase: req.body.phrase,
        //     author: req.body.author
        // })
        // console.log(Category)
        // //saving Category on DB
        // await Category.save()
        res.status(201).send({message: "Category successfully save"})
        } catch (e){
        res.status(500).send({message:"Error to save the Category -> " + e})
        }
    }
}

//read
exports.listCategories = async(req, res) => {
    try{
        //listing saved Categories
        const data = await repository.listCategories()
        //const data = await Categories.find({}, "phrase author -_id");

        res.status(200).send(data);
    } catch (e){
        res.status(500).send({message:"Error on try to find the Categories -> " + e})
    }
    
}

//update
exports.updateCategories = async (req,res) => {
    const{errors} = validationResult(req);

    if (errors.length > 0) {
        return res.status(400).send({message: errors})
    }else{
        try{
            await repository.updateCategories(req.params.id, req.body);
            res.status(200).send({
                message: 'Category successfully updated'
            });
        } catch (e) {
            res.status(500).send({message: 'Error on update the Category -> '+ e});
            
        }
    }
}

//delete
exports.deleteCategories = async (req, res) => {
    try {
      await repository.deleteCategories(req.params.id);
      res.status(200).send({
        message: 'Category successfully deleted'
      });
    } catch (e) {
      res.status(500).send({message: 'Error on delete the Category -> ' + e});
    }
}
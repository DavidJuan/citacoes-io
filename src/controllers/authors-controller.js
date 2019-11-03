const mongoose = require("mongoose");
//importing Authors model //repository
// const Authors = mongoose.model("Authors");
const repository = require("../repositories/authors-repository")
const {validationResult} = require("express-validator")

//create
exports.createAuthors = async (req,res) => {
    const{errors} = validationResult(req);

    if (errors.length > 0) {
        return res.status(400).send({message: errors})
    }else{
       try{
        //saving Author conforming model layout
        await repository.createAuthors({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            firstNickname: req.body.firstNickname,
            lastNickname: req.body.lastNickname,
            description: req.body.description,
            birthAge: req.body.birthAge,
            deathAge: req.body.deathAge,
            dateCreation: req.body.dateCreation
        })
        // const Author = new Authors({
        //     phrase: req.body.phrase,
        //     author: req.body.author
        // })
        // console.log(Author)
        // //saving Author on DB
        // await Author.save()
        res.status(201).send({message: "Author successfully save"})
        } catch (e){
        res.status(500).send({message:"Error to save the Author -> " + e})
        }
    }
}

//read
exports.listAuthors = async(req, res) => {
    try{
        //listing saved Authors
        const data = await repository.listAuthors()
        //const data = await Authors.find({}, "phrase author -_id");

        res.status(200).send(data);
    } catch (e){
        res.status(500).send({message:"Error on try to find the Authors -> " + e})
    }
    
}

//update
exports.updateAuthors = async (req,res) => {
    const{errors} = validationResult(req);

    if (errors.length > 0) {
        return res.status(400).send({message: errors})
    }else{
        try{
            await repository.updateAuthors(req.params.id, req.body);
            res.status(200).send({
                message: 'Author successfully updated'
            });
        } catch (e) {
            res.status(500).send({message: 'Error on update the Author -> '+ e});
            
        }
    }
}

//delete
exports.deleteAuthors = async (req, res) => {
    try {
      await repository.deleteAuthors(req.params.id);
      res.status(200).send({
        message: 'Author successfully deleted'
      });
    } catch (e) {
      res.status(500).send({message: 'Error on delete the Author -> ' + e});
    }
}
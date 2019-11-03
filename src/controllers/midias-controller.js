const mongoose = require("mongoose");
//importing Midias model //repository
// const Midias = mongoose.model("Midias");
const repository = require("../repositories/midias-repository")
const {validationResult} = require("express-validator")

//create
exports.createMidias = async (req,res) => {
    const{errors} = validationResult(req);

    if (errors.length > 0) {
        return res.status(400).send({message: errors})
    }else{
       try{
        //saving Midia conforming model layout
        await repository.createMidias({
            name: req.body.name
        })
        // const Midia = new Midias({
        //     phrase: req.body.phrase,
        //     author: req.body.author
        // })
        // console.log(Midia)
        // //saving Midia on DB
        // await Midia.save()
        res.status(201).send({message: "Midia successfully save"})
        } catch (e){
        res.status(500).send({message:"Error to save the Midia -> " + e})
        }
    }
}

//read
exports.listMidias = async(req, res) => {
    try{
        //listing saved Midias
        const data = await repository.listMidias()
        //const data = await Midias.find({}, "phrase author -_id");

        res.status(200).send(data);
    } catch (e){
        res.status(500).send({message:"Error on try to find the Midias -> " + e})
    }
    
}

//update
exports.updateMidias = async (req,res) => {
    const{errors} = validationResult(req);

    if (errors.length > 0) {
        return res.status(400).send({message: errors})
    }else{
        try{
            await repository.updateMidias(req.params.id, req.body);
            res.status(200).send({
                message: 'Midia successfully updated'
            });
        } catch (e) {
            res.status(500).send({message: 'Error on update the Midia -> '+ e});
            
        }
    }
}

//delete
exports.deleteMidias = async (req, res) => {
    try {
      await repository.deleteMidias(req.params.id);
      res.status(200).send({
        message: 'Midia successfully deleted'
      });
    } catch (e) {
      res.status(500).send({message: 'Error on delete the Midia -> ' + e});
    }
}
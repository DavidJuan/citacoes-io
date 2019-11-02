const mongoose = require("mongoose");
//importing Quotes model //repository
// const Quotes = mongoose.model("Quotes");
const repository = require("../repositories/quotes-repository")
const {validationResult} = require("express-validator")

//create
exports.createQuotes = async (req,res) => {
    const{errors} = validationResult(req);

    if (errors.length > 0) {
        return res.status(400).send({message: errors})
    }else{
       try{
        //saving quote conforming model layout
        await repository.createQuotes({
            phrase: req.body.phrase,
            author: req.body.author,
            category: req.body.category
        })
        // const quote = new Quotes({
        //     phrase: req.body.phrase,
        //     author: req.body.author
        // })
        // console.log(quote)
        // //saving quote on DB
        // await quote.save()
        res.status(201).send({message: "Quote successfully save"})
        } catch (e){
        res.status(500).send({message:"Error to save the quote -> " + e})
        }
    }
}

//read
exports.listQuotes = async(req, res) => {
    try{
        //listing saved quotes
        const data = await repository.listQuotes()
        //const data = await Quotes.find({}, "phrase author -_id");

        res.status(200).send(data);
    } catch (e){
        res.status(500).send({message:"Error on try to find the quotes -> " + e})
    }
    
}

//update
exports.updateQuotes = async (req,res) => {
    const{errors} = validationResult(req);

    if (errors.length > 0) {
        return res.status(400).send({message: errors})
    }else{
        try{
            await repository.updateQuotes(req.params.id, req.body);
            res.status(200).send({
                message: 'Quote successfully updated'
            });
        } catch (e) {
            res.status(500).send({message: 'Error on update the quote -> '+ e});
            
        }
    }
}

//delete
exports.deleteQuotes = async (req, res) => {
    try {
      await repository.deleteQuotes(req.params.id);
      res.status(200).send({
        message: 'Quote successfully deleted'
      });
    } catch (e) {
      res.status(500).send({message: 'Error on delete the quote -> ' + e});
    }
}
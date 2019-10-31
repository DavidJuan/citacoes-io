const mongoose = require("mongoose");
//importing Quotes model //repository
// const Quotes = mongoose.model("Quotes");
const repository = require("../repositories/quotes-repository")
const {validationResult} = require("express-validator")

//list

exports.listQuotes = async(req, res) => {
    try{
        //listing saved quotes
        const data = await repository.listQuotes()
        //const data = await Quotes.find({}, "phrase author -_id");

        res.status(200).send(data);
    } catch (err){
        res.status(500).send({message:"Error on try to find the quotes" + err})
    }
    
}

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
            author: req.body.author
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
        res.status(500).send({message:"Error to save the quote"+e})
        }
    }
}
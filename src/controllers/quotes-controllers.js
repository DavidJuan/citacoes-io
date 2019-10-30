const mongoose = require("mongoose");
//importing Quotes model
const Quotes = mongoose.model("Quotes");

//list

exports.listQuotes = async(req, res) => {
    try{
        //listing saved quotes
        const data = await Quotes.find({}, "phrase author -_id");
        res.status(200).send(data);
    } catch (err){
        res.status(500).send({message:"Error on try to find the quotes" + err})
    }
}

//create

exports.createQuotes = async (req,res) => {
       try{
        //saving quote conforming model layout
        const quote = new Quotes({
            phrase: req.body.phrase,
            author: req.body.author
        })
        console.log(quote)
        //saving quote on DB
        await quote.save()
        res.status(201).send({message: "Quote successfully save"})
    } catch (e){
        res.status(500).send({message:"Error to save the quote"+e})
    }
}
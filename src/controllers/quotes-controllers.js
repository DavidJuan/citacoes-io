const mongoose = require("mongoose");
const Quotes = mongoose.model("Quotes");

//list

exports.listQuotes = async(req, res) => {
    try{
        const data = await Quotes.find({});
        res.status(200).send(data);
    } catch (err){
        res.status(500).send({message:"Error on try to find the quotes" + err})
    }
}

//create

exports.createQuotes = async (req,res) =>{
    try{
        const quote = new Quotes({
            phrase: req.body.phrase,
            author: req.body.author
        });

        console.log(quote);
        await quote.save();
        res.status(201).send({message: "Quote successfully save"})
    } catch (err){
        res.status(500).send({message:"Error to save the quote"+err})
    }
}
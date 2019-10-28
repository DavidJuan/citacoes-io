const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

//App

const app = express();

//Mongoose
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DATABASE_CONNECTION_STRING,{useNewUrlParser:true, useFindAndModify:true,
    useCreateIndex:true, useUnifiedTopology:true}).then(
    console.log("Successfully connected")
).catch((err)=>{
    console.log("Connection failed" + err)
});

const db = mongoose.connection;

db.on("connected",() => {
    console.log("Mongoose default connection is open")
});
db.on("error",(err) => {
    console.log(`Mongoose default connection has occured ${err}`)
});
db.on("disconnected",() => {
    console.log("Mongoose default connection is disconnected")
});

process.on("SIGINT",() => {
    db.close(() => {
        console.log("Mongoose default connection is disconnected due to application termination");
        process.exit(0);
    });
});

//Load models
const Quotes = require("./models/Quotes")

//Load routes

const indexRoutes = require("./routes/index-routes");
app.use("/", indexRoutes);

const quotesRoutes = require('./routes/quotes-routes');
app.use('/quotes', quotesRoutes);

module.exports = app;
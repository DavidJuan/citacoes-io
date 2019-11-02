const express = require("express");
const mongoose = require("mongoose");
//to pass JSON to objects
const bodyParser = require('body-parser')
require("dotenv").config();

//App

const app = express();

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

//Mongoose
mongoose.Promise = global.Promise;
//connecting on Mongo Atlas, string on .env
mongoose.connect(process.env.DATABASE_CONNECTION_STRING,{useNewUrlParser:true,
    //options since mongoose 5.2 version
    useFindAndModify:false,useCreateIndex:true, useUnifiedTopology:true}).then(
    console.log("Successfully connected")
).catch((err)=>{
    console.log("Connection failed" + err)
});

//Load models
const Quotes = require("./models/Quotes")
const Authors = require("./models/Authors")
const Categories = require("./models/Categories")

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

//Load routes
//Define routes to each controllers
const indexRoutes = require("./routes/index-routes");
app.use("/", indexRoutes);

const quotesRoutes = require('./routes/quotes-routes');
app.use('/quotes', quotesRoutes);

const authorsRoutes = require('./routes/authors-routes');
app.use('/authors', authorsRoutes);

const categoriesRoutes = require('./routes/categories-routes');
app.use('/categories', categoriesRoutes);

module.exports = app;
const express = require('express');
const router = express.Router();
const quotesController = require('../controllers/quotes-controllers');
const {check} = require("express-validator")

//CREATE
router.post('/', [
    check("phrase")
        .isLength({min:7, max:100})
        .withMessage("The phrase length has to be between 7 and 100 characters"),
    check("author")
        .isLength({min:7, max:50})
        .withMessage("The author length has to be between 7 and 50 characters")
],quotesController.createQuotes);

//READ
router.get('/', quotesController.listQuotes);

//UPDATE
router.put('/:id', [
    check("phrase")
        .isLength({min:7, max:100})
        .withMessage("The phrase length has to be between 7 and 100 characters")
], quotesController.updateQuotes)

//DELETE
router.delete('/:id', quotesController.deleteQuotes);

module.exports = router;
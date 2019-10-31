const express = require('express');
const router = express.Router();
const quotesController = require('../controllers/quotes-controllers');
const {check} = require("express-validator")

router.get('/', quotesController.listQuotes);
router.post('/', [
    check("phrase")
        .isLength({min:7, max:100})
        .withMessage("The mention length has to be between 7 and 100 characters"),
    check("author")
        .isLength({min:7, max:50})
        .withMessage("The mention length has to be between 7 and 100 characters")
],quotesController.createQuotes);

module.exports = router;
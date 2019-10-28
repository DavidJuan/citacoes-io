const express = require('express');
const router = express.Router();
const quotesController = require('../controllers/quotes-controllers');

router.get('/', quotesController.listQuotes);
router.post('/', quotesController.createQuotes);

module.exports = router;
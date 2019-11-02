const express = require("express")
const router = express.Router()
const authorsController = require("../controllers/authors-controller")
const {check} = require("express-validator")

//CREATE
router.post('/', [
    check("firstName")
        .isLength({min:3, max:15})
        .withMessage("The first name length has to be between 3 and 15 characters"),
    check("lastName")
        .isLength({min:3, max:30})
        .withMessage("The last name length has to be between 3 and 30 characters"),
    check("description")
        .isLength({min:7, max:50})
        .withMessage("The description length has to be between 7 and 50 characters")
],authorsController.createAuthors)

//READ
router.get('/', authorsController.listAuthors)

//UPDATE
router.put('/:id', [
    check("firstName")
        .isLength({min:3, max:15})
        .withMessage("The first name length has to be between 3 and 15 characters"),
    check("lastName")
        .isLength({min:3, max:30})
        .withMessage("The last name length has to be between 3 and 30 characters"),
    check("description")
        .isLength({min:7, max:50})
        .withMessage("The description length has to be between 7 and 50 characters")
],authorsController.updateAuthors)

//DELETE
router.delete('/:id', authorsController.deleteAuthors)

module.exports = router;
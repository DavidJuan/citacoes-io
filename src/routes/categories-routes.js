const express = require("express")
const router = express.Router()
const categoriesController = require("../controllers/categories-controller")
const {check} = require("express-validator")

//CREATE
router.post('/', [
    check("name")
        .isLength({min:3, max:15})
        .withMessage("The category length has to be between 3 and 15 characters")
],categoriesController.createCategories)

//READ
router.get('/', categoriesController.listCategories)

//UPDATE
router.put('/:id', [
    check("name")
        .isLength({min:3, max:15})
        .withMessage("The category length has to be between 3 and 15 characters")
],categoriesController.updateCategories)

//DELETE
router.delete('/:id', categoriesController.deleteCategories)

module.exports = router;
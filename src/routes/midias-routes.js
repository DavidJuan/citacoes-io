const express = require("express")
const router = express.Router()
const midiasController = require("../controllers/midias-controller")
const {check} = require("express-validator")

//CREATE
router.post('/', [
    check("name")
        .isLength({min:3, max:15})
        .withMessage("The category length has to be between 3 and 15 characters")
],midiasController.createMidias)

//READ
router.get('/', midiasController.listMidias)

//UPDATE
router.put('/:id', [
    check("name")
        .isLength({min:3, max:15})
        .withMessage("The category length has to be between 3 and 15 characters")
],midiasController.updateMidias)

//DELETE
router.delete('/:id', midiasController.deleteMidias)

module.exports = router;
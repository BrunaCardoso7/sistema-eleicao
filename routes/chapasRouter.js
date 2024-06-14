const express = require('express')
const router = express.Router()
const chapasControllers = require('../controllers/chapasController')

router.post('/', chapasControllers.createChapasController)
router.get('/:id', chapasControllers.findAllChapasByEleicaoController)
router.get('/', chapasControllers.findAllChapasController)
router.delete('/:id', chapasControllers.deleteByIdChapaController)
router.patch('/', chapasControllers.updateByIdChapaController)

module.exports = router
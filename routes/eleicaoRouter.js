const express = require('express')
const router = express.Router()
const eleicaoController = require('../controllers/eleicaoController')
const chapasController = require('../controllers/chapasController')
const candidatosController = require('../controllers/candidatoChapaController')

router.get('/', eleicaoController.findAllEleicaoController)
router.get('/:id', eleicaoController.findByIdEleicaoController)
router.get('/:id/chapas', chapasController.findAllChapasByEleicaoController)
router.get('/:id/candidatos', candidatosController.findCandidatoByEleicaoController)
router.post('/', eleicaoController.createEleicaoController)
router.delete('/', eleicaoController.deleteByIdEleicaoController)
router.patch('/', eleicaoController.updateByIdEleicaoController)

module.exports = router
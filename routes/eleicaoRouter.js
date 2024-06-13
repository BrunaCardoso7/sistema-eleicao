const express = require('express')
const router = express.Router()
const eleicaoController = require('../controllers/eleicaoController')

router.post('/', eleicaoController.createEleicaoController)
router.get('/', eleicaoController.findAllEleicaoController)
router.delete('/', eleicaoController.deleteByIdEleicaoController)
router.patch('/', eleicaoController.updateByIdEleicaoController)
module.exports = router
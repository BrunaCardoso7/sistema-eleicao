const express = require('express')
const router = express.Router()
const chapasControllers = require('../controllers/chapasController')

router.post('/', chapasControllers.createChapasController)
router.get('/', chapasControllers.findAllChapasController)
router.delete('/', chapasControllers.deleteByIdChapaController)
router.patch('/', chapasControllers.updateByIdChapaController)

module.exports = router
const express = require('express')
const router = express.Router()
const candidatoChapaModel = require('../controllers/candidatoChapaController')

router.post('/', candidatoChapaModel.createCandidatoChapaController)
router.get('/', candidatoChapaModel.findAllCandidatoChapaController)
router.delete('/', candidatoChapaModel.deleteByIdCandidatoChapaController)
router.patch('/', candidatoChapaModel.updateByIdCandidatoChapaController)

module.exports = router
const chapasModels = require('../models/chapasModel')

async function createChapasController (req, res) {
    try {
        const {nome, eleicao_id} = req.body
        //params
        if (!nome || !eleicao_id) {
            return res.status(400).send({"msg": "Falta dados"})
        }
        const chapas = await chapasModels.createChapas(nome, eleicao_id)
        return res.status(200).send({"msg": "eleição criada com sucesso", chapas})
    } catch (error) {
        throw error
    }
}

async function findAllChapasController (req, res) {
    try {
        const chapa = await chapasModels.findAllChapas()

        return res.status(200).send({"data": chapa})
    } catch (error) {
        throw error
    }
}

async function deleteByIdChapaController (req, res) {
    try {
        const {id} = req.body

        const chapa = await chapasModels.deleteByIdChapa(id)

        return res.status(200).send({"Deletado com sucesso": chapa})
    } catch (error) {
        throw error
    }
}

async function updateByIdChapaController (req, res) {
    try {
        const {nome, id} = req.body

        const chapa = await chapasModels.updateChapa(nome, id)

        return res.status(200).send({"Deletado com sucesso": chapa})
    } catch (error) {
        throw error
    }
}

module.exports = {
    createChapasController,
    findAllChapasController,
    deleteByIdChapaController,
    updateByIdChapaController
}
const cargosModel = require('../models/cargosModel')

async function createCargosController (req, res) {
    try {
        const {nome, eleicao_id} = req.body

        if(!nome | !eleicao_id) {
            res.send({"msg": "falta dados"})
        }
        
        const cargo = await cargosModel.createCargo(nome, eleicao_id)

        return res.status(200).send({"msg": "Cargo criado com sucesso!", cargo})
    } catch (error) {
        throw error
    }
}

async function findAllCargosController (req, res) {
    try {
        const cargos = await cargosModel.findAllCargos()

        return res.status(200).send({"data": cargos})
    } catch (error) {
        throw error
    }
}
async function deleteFindByIdCargo (req, res) {
    try {
        const {id} = req.body

        const cargos = await cargosModel.deleteByIdCargos(id)

        return res.status(200).send({"Deletado com sucesso": cargos})
    } catch (error) {
        throw error
    }
}

module.exports = {
    createCargosController,
    findAllCargosController,
    deleteFindByIdCargo
}
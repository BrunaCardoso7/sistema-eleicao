const chapasModels = require('../models/chapasModel')

async function createChapasController (req, res) {
    try {
        const {nome, eleicao_id} = req.body
    
        if (!nome || !eleicao_id) {
            return res.status(400).send({"msg": "Falta dados"})
        }
        await chapasModels.createChapas(nome, eleicao_id)

        return res.redirect(`/eleicao/${eleicao_id}/chapas`)
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

async function findAllChapasByEleicaoController(req, res) {
    try {
        const eleicaoId = req.params.id;

        console.log('eleicaoId: ', eleicaoId)

        const chapas = await chapasModels.findAllByEleicaoChapas(eleicaoId);
        return res.render('eleicao/chapaHome', { chapas, eleicaoId });
    } catch (error) {
        console.error(error);
        return res.status(500).send('Erro ao buscar chapas');
    }
}


async function deleteByIdChapaController (req, res) {
    try {
        const {id} = req.params

        const chapa = await chapasModels.findAllByEleicaoChapas(id)

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
    updateByIdChapaController,
    findAllChapasByEleicaoController
}
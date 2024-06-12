const pool = require('../db')

async function createCargo(cargo, eleicao_id) {
    try {
        await pool.query('INSERT INTO Cargo (Nome, EleicaoID) VALUES (?, ?)',
        [cargo, eleicao_id])
        const [cargos] = await pool.query('SELECT * FROM Cargo WHERE nome  LIKE ?',
        [`%${cargo}%`])

        return cargos
    } catch (error) {
        throw error
    }
}
async function findAllCargos() {
    try {
        const [cargos] = await pool.query('SELECT * FROM Cargo')
        return cargos
    } catch (error) {
        throw error
    }
}

async function deleteByIdCargos(id) {
    try {
        const cargo = await pool.query('DELETE FROM Cargo WHERE CargoID = ?', [id])
        return cargo
    } catch (error) {
        throw error
    }
}
module.exports = {
    createCargo,
    findAllCargos,
    deleteByIdCargos
}
const pool = require('../db')

async function createChapas(eleitorId, chapaId, dataHora) {
    try {
        await pool.query('INSERT INTO Voto (EleitorID, ChapaID, DataHora) VALUES (?, ?, ?)',
        [eleitorId, chapaId, dataHora])
        const [chapas] = await pool.query('SELECT * FROM Voto WHERE nome  LIKE ?',
        [`%${nome}%`])

        return chapas
    } catch (error) {
        throw error
    }
}
async function findAllChapas() {
    try {
        const [chapa] = await pool.query('SELECT * FROM Voto')
        return chapa
    } catch (error) {
        throw error
    }
}

async function deleteByIdChapa(id) {
    try {
        const chapa = await pool.query('DELETE FROM Voto WHERE ChapaID = ?', [id])
        return chapa
    } catch (error) {
        throw error
    }
}

async function updateChapa(nome, id) {
    try {
        const chapa = await pool.query('UPDATE Voto SET Nome = ? WHERE ChapaID = ?',
        [nome, id])
        
        return chapa
    } catch (error) {
        throw error;
    }
}

module.exports = {
    createChapas,
    findAllChapas,
    deleteByIdChapa,
    updateChapa
}
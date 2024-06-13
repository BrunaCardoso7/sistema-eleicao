const pool = require("../db")
async function createCandidatos(nome, cpf, endereco) {
    // console.log(nome, cpf, endereco)
    try {
        await pool.query('INSERT INTO Candidato (Nome, CPF, Endereco) VALUES (?, ?, ?)',
            [nome, cpf, endereco]);
        const [candidatos] = await pool.query('SELECT * FROM Candidato WHERE Nome LIKE ?',
            [`%${nome}%`]);
        return candidatos;
    } catch (error) {
        throw error;
    }
}

async function findAllCandidatos() {
    try {
        const [candidatos] = await pool.query("SELECT * FROM Candidato")
        return candidatos;
    } catch (error) {
        throw error;
    }
}

async function deleteCandidato(nome) {
    try {
        const candidato = await pool.query("DELETE FROM Candidato WHERE nome = ?", [nome])
        return candidato
    } catch (error) {
        throw error;
    }
}

async function updateCandidato(id, nome, cpf, endereco) {
    try {
        const candidato = await pool.query("UPDATE Candidato SET nome = ?, cpf = ?, endereco = ? WHERE CandidatoID = ?",
            [nome, cpf, endereco, id]);
        return candidato
    } catch (error) {
        throw error;
    }
}


module.exports = {
    createCandidatos,
    findAllCandidatos,
    deleteCandidato,
    updateCandidato
};
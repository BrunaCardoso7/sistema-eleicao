//requisicoes ao banco de dados

const pool = require('../db');
async function getUserByUsernameAndPassword(username, password) {
    const [rows] = await pool.execute('SELECT * FROM usuario WHERE usuario = ? AND senha = ?', [username,
        password]);
    return rows[0];
}
module.exports = { getUserByUsernameAndPassword };
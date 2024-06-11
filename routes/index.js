//resp pelas rotas
const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');
const fornecedorRouter = require('./fornecedores');
// Rota GET para exibir a página de login
router.get('/', (req, res) => {
    res.render('login');
});
// Rota POST para processar o formulário de login
router.post('/login', usuarioController.login);
router.get('/welcome', usuarioController.welcome);
router.use('/fornecedores', fornecedorRouter);
module.exports = router;
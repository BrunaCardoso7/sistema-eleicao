//resp pelas rotas
const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');
const fornecedorRouter = require('./fornecedores');
const cargoRouter = require('./cargosRouter')
// Rota GET para exibir a página de login
router.get('/', (req, res) => {
    res.render('login');
});
// Rota POST para processar o formulário de login
router.post('/login', usuarioController.login);
router.get('/welcome', usuarioController.welcome);
router.use('/fornecedores', fornecedorRouter);
router.use('/cargos', cargoRouter);
module.exports = router;
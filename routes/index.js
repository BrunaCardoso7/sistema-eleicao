// //resp pelas rotas
// const express = require('express');
// const router = express.Router();
// const usuarioController = require('../controllers/usuarioController');
// const fornecedorRouter = require('./fornecedores');
// // Rota GET para exibir a página de login
// router.get('/', (req, res) => {
//     res.render('login');
// });
// // Rota POST para processar o formulário de login
// router.post('/login', usuarioController.login);
// router.get('/welcome', usuarioController.welcome);
// router.use('/fornecedores', fornecedorRouter);
// module.exports = router;

// routes/index.js
const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');
const fornecedorRouter = require('./fornecedores');
const candidatoRouter = require('./candidatos');
const eleitorRouter = require('./eleitores');

// Rota GET para exibir a página de login
router.get('/', (req, res) => {
    res.render('login');
});

// Rota POST para processar o formulário de login
router.post('/login', usuarioController.login);
router.get('/welcome', usuarioController.welcome);
router.use('/fornecedores', fornecedorRouter);
router.use('/candidatos', candidatoRouter);
router.use('/eleitores', eleitorRouter);
module.exports = router;
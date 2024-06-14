<<<<<<< HEAD
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

=======
>>>>>>> 18900c9 (Feat: Views and integrations)
// routes/index.js
const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');
const fornecedorRouter = require('./fornecedores');
<<<<<<< HEAD
const cargoRouter = require('./cargosRouter')
const eleicaoRouter = require('./eleicaoRouter')
const chapasRouter = require('./chapasRouter')
const candidatoChapa = require('./candidatoChapaRouter')
const votosRouter = require('./votosRouter')
const candidatoRouter = require('./candidatos');
const eleitorRouter = require('./eleitores');
// Rota GET para exibir a página de login
=======
const cargoRouter = require('./cargosRouter');
const eleicaoRouter = require('./eleicaoRouter');
const chapasRouter = require('./chapasRouter');
const candidatoChapaRouter = require('./candidatoChapaRouter');
const votosRouter = require('./votosRouter');

>>>>>>> 18900c9 (Feat: Views and integrations)
router.get('/', (req, res) => {
    res.render('adm/welcome');
});
router.get('/cadastroEleicao', (req, res) => {
    res.render('eleicao/cadastrarEleicao');
});

router.get('/cadastroChapa/:id', (req, res) => {
    const eleicaoId = req.params.id
    
    res.render('eleicao/cadastrarChapa', {eleicaoId});
});

router.get('/candidato', (req, res) => {
    res.render('eleicao/candidatoHome');
});

router.get('/candidato', (req, res) => {
    res.render('eleicao/candidatoHome');
});
router.get('/candidatoChapa', (req, res) => {
    res.render('eleicao/candidatoChapa');
});
<<<<<<< HEAD

// Rota POST para processar o formulário de login
=======
>>>>>>> 18900c9 (Feat: Views and integrations)
router.post('/login', usuarioController.login);
router.get('/welcome', usuarioController.welcome);
router.use('/fornecedores', fornecedorRouter);
router.use('/cargos', cargoRouter);
router.use('/eleicao', eleicaoRouter);
router.use('/chapas', chapasRouter);
router.use('/candidatochapa', candidatoChapaRouter);
router.use('/votos', votosRouter);
<<<<<<< HEAD
router.use('/candidatos', candidatoRouter);
router.use('/eleitores', eleitorRouter);
module.exports = router;
=======

module.exports = router;
>>>>>>> 18900c9 (Feat: Views and integrations)

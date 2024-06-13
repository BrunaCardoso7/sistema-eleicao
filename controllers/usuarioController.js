// //resp pelo controle e chamada da aplicacao

// const usuarioModel = require('../models/usuarioModel');
// async function login(req, res) {
//     const { username, password } = req.body;
//     try {
//         const user = await usuarioModel.getUserByUsernameAndPassword(username, password);
//         if (user) {
//             // Usuário autenticado, redirecionar para a página de boas-vindas
//             res.redirect('/welcome?username=' + user.usuario + '&tipo=' + user.tipo);
//         } else {
//             // Credenciais inválidas, redirecionar de volta para a página de login
//             res.redirect('login');
//         }
//     } catch (error) {
//         console.error('Erro durante a autenticação:', error);
//         res.status(500).send('Erro durante a autenticação');
//     }
// }
// async function welcome(req, res) {
//     const { username, tipo } = req.query;
//     // Renderizar a página de boas-vindas com os dados do usuário
//     res.render('welcome', { usuario: username, tipo: tipo });
// }
// module.exports = { login, welcome };

// controllers/usuarioController.js
const usuarioModel = require('../models/usuarioModel');

async function login(req, res) {
    const { username, password } = req.body;
    try {
        const user = await usuarioModel.getUserByUsernameAndPassword(username, password);
        if (user) {
            // Usuário autenticado, redirecionar para a página de boas-vindas
            res.redirect('/welcome?username=' + user.usuario + '&tipo=' + user.tipo);
        } else {
            // Credenciais inválidas, redirecionar de volta para a página de login
            res.redirect('login');
        }
    } catch (error) {
        console.error('Erro durante a autenticação:', error);
        res.status(500).send('Erro durante a autenticação');
    }
}

async function welcome(req, res) {
    const { username, tipo } = req.query;
    // Renderizar a página de boas-vindas com os dados do usuário
    res.render('welcome', { usuario: username, tipo: tipo });
}

module.exports = { login, welcome };

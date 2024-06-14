// const express = require('express');
// const app = express();
// const port = 3000;
// // Middleware para analisar o corpo das solicitações
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// // Configurando o Express para usar EJS como mecanismo de modelo
// app.set('view engine', 'ejs');
// // Middleware para servir arquivos estáticos
// app.use(express.static('public'));
// // Middleware para registrar as rotas
// const indexRouter = require('./routes/index');
// app.use('/', indexRouter);
// // Middleware para lidar com erros
// app.use((err, req, res, next) => {
//     console.error(err.stack);
//     res.status(500).send('Algo deu errado!');
// });
// // Iniciando o servidor
// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });

const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

<<<<<<< HEAD

// Middleware para analisar o corpo das solicitações
=======
>>>>>>> 18900c9 (Feat: Views and integrations)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Configura o diretório de arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

<<<<<<< HEAD
// Middleware para servir arquivos estáticos                                                                                                                                                                                                        

app.use(express.static('public'));
=======
// Configura a engine de visualização EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
>>>>>>> 18900c9 (Feat: Views and integrations)

// Middleware para registrar as rotas
const indexRouter = require('./routes/index');
app.use('/', indexRouter);

// Middleware para lidar com erros
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Algo deu errado!');
});

// Iniciando o servidor
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
<<<<<<< HEAD

=======
>>>>>>> 18900c9 (Feat: Views and integrations)

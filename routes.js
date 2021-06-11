//Criação de ROTAS para o webservice http
//Importação de rotas e definição de variaveis

const express = require('express');
const router = express.Router();

//Rota index.js
router.get('/', (req, res) => res.render('home'));

//Rota post
router.get('/post', (req, res) => res.render('single-post'));

//Exportação da rota
module.exports = router;
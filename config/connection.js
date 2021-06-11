//Conexão com o Banco de Dados 
const Sequelize = require('sequelize');

const connection = new Sequelize({
    dialect: 'sqlite',
    storage: 'blog.sqlite'
});

//Exportação do Banco de dados para todo o .JS
module.exports = connection;
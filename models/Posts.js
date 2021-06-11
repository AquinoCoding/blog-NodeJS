//Importação e criação dos Módulos do Banco
const { Sequelize, DataTypes } = require('sequelize');
const connection = require('../config/connection.js');

//Criação do Banco de Dados e definições dele!

const Posts = connection.define('posts', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    imgUrl: {
        type: DataTypes.STRING,
        allowNull: true
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    text: {
        type: DataTypes.STRING,
        allowNull: false
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false
    }
});

//Exportação do módulo para .JS geral

module.exports = Posts;

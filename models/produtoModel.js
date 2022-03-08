const { DataTypes } = require('sequelize')
const sequelize = require('./sequelize')

const produto = sequelize.define('produto', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  preco: {
    type: DataTypes.DOUBLE,
    allowNull: false
  },
  imgURL: {
    type: DataTypes.STRING,
    allowNull: true
  },
  ingredientes: {
    type: DataTypes.STRING,
    allowNull: true
  },
  saborAdicional: {
    type: DataTypes.STRING,
    allowNull: true
  },
  volume: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  alcoolica: {
    type: DataTypes.BOOLEAN,
    allowNull: true
  }
})

module.exports = produto
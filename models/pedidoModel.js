const { DataTypes } = require('sequelize')
const sequelize = require('./sequelize')

const produto = sequelize.define('ingrediente ', {
  clienteId: {
    type: DataTypes.STRING,
    allowNull: false
  },
  formaPagamento: {
    type: DataTypes.STRING,
    allowNull: false
  },
  dataEntrada: {
    type: DataTypes.DATE,
    allowNull: false
  },
  dataSaida: {
    type: DataTypes.DATE,
    allowNull: true
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false
  },
  observacao: {
    type: DataTypes.STRING,
    allowNull: true
  }
})

module.exports = produto
import { DataTypes } from 'sequelize'
import sequelize from '../sequelize.mjs'

const ProdutoModel = sequelize.define('produto', {
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

ProdutoModel.sync()
  .then(() => {
    console.log('Modelo de produto sincronizado!')
  })

export default ProdutoModel
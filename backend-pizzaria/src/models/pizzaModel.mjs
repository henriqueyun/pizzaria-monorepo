import { DataTypes } from 'sequelize'
import sequelize from '../sequelize.mjs'

const PizzaModel = sequelize.define('pizza', {
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
  }
})

export default PizzaModel
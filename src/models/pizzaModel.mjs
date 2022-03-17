import { DataTypes } from 'sequelize'
import sequelize from '../sequelize.mjs'

const PizzaModel = sequelize.define('pizz', {
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
  tipo: {
    type: DataTypes.STRING,
    allowNull: false
  }
})

PizzaModel.sync()
  .then(() => {
    console.log('Pizza sincronizada')
  })

export default PizzaModel
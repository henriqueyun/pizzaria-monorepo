import { DataTypes } from 'sequelize'
import sequelize from '../sequelize.mjs'
import PedidoModel from './pedidoModel.mjs'

const PizzaItemPedido = sequelize.define('pizzaItemPedido', {
  pedidoId: {
    type: DataTypes.INTEGER,
    references: {
      model: PedidoModel,
      key: 'id'
    }
  },
  pizzaId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Pizza',
      key: 'id'
    }
  },
  qtd: {
    type: DataTypes.STRING,
    allowNull: false
  }
})

import PizzaModel from './pizzaModel.mjs'

PedidoModel.belongsToMany(PizzaModel, { through: PizzaItemPedido })
PedidoModel.hasMany(PizzaItemPedido, {
  foreignKey: 'pedidoId',
  sourceKey: 'id'
})
PizzaItemPedido.hasOne(PizzaModel, {
  foreignKey: 'id',
  sourceKey: 'pizzaId'
})

PizzaItemPedido.sync()
  .then(() => {
    console.log('PizzaItemPedido sincronizado')
  })

export default PizzaItemPedido
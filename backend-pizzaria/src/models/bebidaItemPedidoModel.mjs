import { DataTypes } from 'sequelize'
import sequelize from '../sequelize.mjs'
import PedidoModel from './pedidoModel.mjs'

const BebidaItemPedido = sequelize.define('bebidaItemPedido', {
  pedidoId: {
    type: DataTypes.INTEGER,
    references: {
      model: PedidoModel,
      key: 'id'
    }
  },
  bebidaId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Bebida',
      key: 'id'
    }
  },
  qtd: {
    type: DataTypes.STRING,
    allowNull: false
  }
})

import BebidaModel from './bebidaModel.mjs'

PedidoModel.belongsToMany(BebidaModel, { through: BebidaItemPedido })
PedidoModel.hasMany(BebidaItemPedido, {
  foreignKey: 'pedidoId',
  sourceKey: 'id'
})
BebidaItemPedido.hasOne(BebidaModel, {
  foreignKey: 'id',
  sourceKey: 'bebidaId'
})

export default BebidaItemPedido
import { DataTypes } from 'sequelize'
import sequelize from '../sequelize.mjs'

const BebidaItemPedido = sequelize.define('bebidaItemPedido', {
  qtd: {
    type: DataTypes.STRING,
    allowNull: false
  },
  bebidaId: {
    type: DataTypes.STRING,
    allowNull: false
  }
})

BebidaItemPedido.sync()
  .then(() => {
    console.log('BebidaItemPedido sincronizado')
  })

export default BebidaItemPedido
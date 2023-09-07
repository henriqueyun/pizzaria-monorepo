import { DataTypes } from 'sequelize'
import sequelize from '../sequelize.mjs'

const UsuarioModel = sequelize.define('usuario', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  fullName: {
    type: DataTypes.STRING,
    allowNull: true
  },
  role: {
    type: DataTypes.STRING,
    allowNull: true
  },

  activeSession: {
    type: DataTypes.STRING,
    allowNull: true
  }
})

UsuarioModel.sync()
  .then(() => {
    console.log('Usuario sincronizada')
  })

export default UsuarioModel
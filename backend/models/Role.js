import { Sequelize, DataTypes } from 'sequelize';
import sequelize from '../database/connection.js';


const Role = sequelize.define('Role', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true
  }
}, {
  tableName: 'roles'
});

export default Role;

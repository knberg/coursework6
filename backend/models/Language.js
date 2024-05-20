import { Sequelize, DataTypes } from 'sequelize';
import sequelize from '../database/connection.js';

const Language = sequelize.define('Language', {
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
  tableName: 'languages'
});

export default Language;

import { Sequelize, DataTypes } from 'sequelize';
import sequelize from '../database/connection.js';

const Education = sequelize.define('Education', {
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
  tableName: 'education'
});

export default Education;

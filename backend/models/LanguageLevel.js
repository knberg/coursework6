import { Sequelize, DataTypes } from 'sequelize';
import sequelize from '../database/connection.js';

const LanguageLevel = sequelize.define('LanguageLevel', {
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
  tableName: 'language_levels'
});

export default LanguageLevel;

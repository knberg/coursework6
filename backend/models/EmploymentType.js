import { Sequelize, DataTypes } from 'sequelize';
import sequelize from '../database/connection.js';

const EmploymentType = sequelize.define('EmploymentType', {
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
  tableName: 'employment_types'
});

export default EmploymentType;

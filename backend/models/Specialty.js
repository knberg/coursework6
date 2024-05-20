import { Sequelize, DataTypes } from 'sequelize';
import sequelize from '../database/connection.js';

const Specialty = sequelize.define('Specialty', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING(120),
    allowNull: false,
    unique: true
  }
}, {
  tableName: 'specialties'
});

export default Specialty;

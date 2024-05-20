import { Sequelize, DataTypes } from 'sequelize';
import sequelize from '../database/connection.js';

const Citizenship = sequelize.define('Citizenship', {
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
  tableName: 'citizenships'
});

export default Citizenship;

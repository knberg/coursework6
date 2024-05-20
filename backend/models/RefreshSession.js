import { Sequelize, DataTypes } from 'sequelize';
import sequelize from '../database/connection.js';
import User from './User.js';

const RefreshSession = sequelize.define('RefreshSession', {
  token: {
    primaryKey: true,
    type: DataTypes.STRING(255),
  },
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'id'
    }
  },
  fingerprint: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  expire: {
    type: DataTypes.DATE,
    allowNull: false
  },
}, {
  tableName: 'refresh_sessions'
});

export default RefreshSession;
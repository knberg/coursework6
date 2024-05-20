import { Sequelize, DataTypes } from 'sequelize';
import sequelize from '../database/connection.js';
import User from './User.js';
import Resume from './Resume.js';

const FavoriteResume = sequelize.define('FavoriteResume', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'id'
        }
    },
    resume_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Resume,
            key: 'id'
        }
    }
}, {
    tableName: 'favorite_resumes'
});
  
export default FavoriteResume;
import { Sequelize, DataTypes } from 'sequelize';
import sequelize from '../database/connection.js';
import User from './User.js';
import Job from './Job.js';

const FavoriteJobs = sequelize.define('FavoriteJobs', {
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
    job_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Job,
            key: 'id'
        }
    }
}, {
    tableName: 'favorite_jobs'
});
  
export default FavoriteJobs;
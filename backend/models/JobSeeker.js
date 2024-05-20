import { Sequelize, DataTypes } from 'sequelize';
import sequelize from '../database/connection.js';
import User from './User.js';

const JobSeeker = sequelize.define('JobSeeker', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: User,
            key: 'id'
        }
    },
    first_name: {
        type: DataTypes.STRING(50),
    },
    last_name: {
        type: DataTypes.STRING(50),
    },
    phone_number: {
        type: DataTypes.STRING(20)
    },
    city: {
        type: DataTypes.STRING(50)
    }
}, {
    tableName: 'job_seekers'
});

export default JobSeeker; 
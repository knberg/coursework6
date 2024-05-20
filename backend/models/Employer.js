import { Sequelize, DataTypes } from 'sequelize';
import sequelize from '../database/connection.js';
import User from './User.js';

const Employer = sequelize.define('Employer', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: User,
            key: 'id'
        }
    },
    company_name: {
        type: DataTypes.STRING(100),
    },
    company_description: {
        type: DataTypes.TEXT
    },
    city: {
        type: DataTypes.STRING(100),
    },
    industry: {
        type: DataTypes.STRING(100)
    },
    contact_email: {
        type: DataTypes.STRING(100),
        unique: true
    },
    address: {
        type: DataTypes.STRING(255),
    },
    website: {
        type: DataTypes.STRING(100)
    }
}, {
    tableName: 'employers',
});

export default Employer;

import { Sequelize, DataTypes } from 'sequelize';
import sequelize from '../database/connection.js';
import Specialty from './Specialty.js';
import Education from './Education.js';
import EmploymentType from './EmploymentType.js';
import Employer from './Employer.js';


const Job = sequelize.define('Job', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    employer_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Employer,
            key: 'id'
        },
        onDelete: 'CASCADE'
    },
    title: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    salary_from: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    salary_to: {
        type: DataTypes.INTEGER
    },
    city: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    specialty_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Specialty,
            key: 'id'
        }
    },
    employment_type_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: EmploymentType,
            key: 'id'
        }
    },
    education_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Education,
            key: 'id'
        }
    },
    experience: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    skills: {
        type: DataTypes.ARRAY(DataTypes.TEXT)
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    responses: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    views: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    }
}, {
    tableName: 'jobs'
});

export default Job;

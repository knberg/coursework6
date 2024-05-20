import { Sequelize, DataTypes } from 'sequelize';
import sequelize from '../database/connection.js';
import User from './User.js';
import EmploymentType from './EmploymentType.js';
import Specialty from './Specialty.js';
import Citizenship from './Citizenship.js';
import Education from './Education.js';
import Language from './Language.js';
import LanguageLevel from './LanguageLevel.js';
import JobSeeker from './JobSeeker.js';

const Resume = sequelize.define('Resume', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    job_seeker_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: JobSeeker,
            key: 'id'
        },
        onDelete: 'CASCADE'
    },
    title: {
        type: DataTypes.STRING(120),
        allowNull: false
    },
    photo_url: {
        type: DataTypes.STRING(255)
    },
    first_name: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    middle_name: {
        type: DataTypes.STRING(50)
    },
    gender: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    birthdate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    city: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    citizenship_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Citizenship,
            key: 'id'
        },
    },
    specialty_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Specialty,
            key: 'id'
        }
    },
    employment_type_id: {
        type: DataTypes.INTEGER,
        references: {
            model: EmploymentType,
            key: 'id'
        },
    },
    desired_salary: {
        type: DataTypes.INTEGER,
    },
    phone: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    experience_years: {
        type: DataTypes.INTEGER
    },
    experience_specialty: {
        type: DataTypes.STRING(100)
    },
    experience_company: {
        type: DataTypes.STRING(100)
    },
    experience_achievements: {
        type: DataTypes.TEXT
    },
    education_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Education,
            key: 'id'
        }
    },
    education_specialty: {
        type: DataTypes.STRING(100)
    },
    education_university: {
        type: DataTypes.STRING(100)
    },
    foreign_language: {
        type: DataTypes.INTEGER,
        references: {
            model: Language,
            key: 'id'
        }
    },
    foreign_language_level: {
        type: DataTypes.INTEGER,
        references: {
            model: LanguageLevel,
            key: 'id'
        }
    },
    additional_info: {
        type: DataTypes.TEXT
    },
    relocate: {
        type: DataTypes.BOOLEAN
    },
    married: {
        type: DataTypes.BOOLEAN
    },
    children: {
        type: DataTypes.BOOLEAN
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    views: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    }
}, {
    tableName: 'resumes'
});
  
 
export default Resume;


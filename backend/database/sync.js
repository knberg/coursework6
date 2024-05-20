import sequelize from './connection.js';

import Citizenship from '../models/Citizenship.js';
import Education from '../models/Education.js';
import Employer from '../models/Employer.js';
import EmploymentType from '../models/EmploymentType.js';
import FavoriteResume from '../models/FavoriteResume.js';
import FavoriteJobs from '../models/FavoriteJobs.js';
import Language from '../models/Language.js';
import LanguageLevel from '../models/LanguageLevel.js';
import Response from '../models/Response.js';
import Resume from '../models/Resume.js';
import Role from '../models/Role.js';
import Specialty from '../models/Specialty.js';
import User from '../models/User.js';
import Job from '../models/Job.js';
import JobSeeker from '../models/JobSeeker.js';
import RefreshSession from '../models/RefreshSession.js';

// синхронизация моделей с базой данных
sequelize.sync({ alter: true })
    .then(() => console.log('Модели успешно синхронизированы с базой данных.'))
    .catch(error => console.error('Ошибка синхронизации моделей с базой данных:', error))


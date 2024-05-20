import Job from '../models/Job.js';
import Resume from '../models/Resume.js';
import { Op } from 'sequelize';



const searchJobs = async (params) => {
    const { query, specialty, education, employment, city } = params;

    const whereConditions = {};
    
    if (query) {
        whereConditions.title = { [Op.like]: `%${query}%` };
    }
    if (specialty) {
        whereConditions.specialty_id = specialty;
    }
    if (education) {
        whereConditions.education_id = education;
    }
    if (employment) {
        whereConditions.employment_type_id = employment;
    }
    if (city) {
        whereConditions.city = city;
    }
    const jobs = await Job.findAll({ where: whereConditions });
    return jobs;
}

export default { 
    searchJobs,
    
};

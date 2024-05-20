import ApiError from '../ApiError.js';
import Job from '../models/Job.js';
import Response from '../models/Response.js';

const getJobById = async (jobId) => {
    const job = await Job.findByPk(jobId);
    if (!job) {
        throw ApiError.notFound('Вакансии не существует');
    }
    return job;
}

const getAllJobs = async () => {
    return Job.findAll();
}

const createJob = async (userId, data) => {
    const newJob = await Job.create({
        employer_id:        userId,
        title:              data.title,
        description:        data.description,
        salary_from:        data.salaryFrom,
        salary_to:          data.salaryTo,
        city:               data.city,
        specialty_id:       data.specialtyId,
        employment_type_id: data.employmentTypeId,
        education_id:       data.educationId,
        experience:         data.experience,
        skills:             data.skills,
    });
    return newJob;
}


const updateJob = async (userId, jobId, data) => {
    const job = await Job.findByPk(jobId);

    if (!job) {
        throw ApiError.badRequest('Вакансия не существует');
    }

    if (job.employer_id !== userId) {
        throw ApiError.badRequest('Вы не можете изменять чужую вакансию');
    }

    const updatedJob = await job.update({
        title:              data.title,
        description:        data.description,
        salary_from:        data.salaryFrom,
        salary_to:          data.salaryTo,
        city:               data.city,
        specialty_id:       data.specialtyId,
        employment_type_id: data.employmentTypeId,
        education_id:       data.educationId,
        experience:         data.experience,
        skills:             data.skills,
    });

    return updatedJob;
}

const deleteJob = async (userId, jobId) => {
    const job = await Job.findByPk(jobId);

    if (!job) {
        throw ApiError.badRequest('Вакансия не существует');
    }

    if (job.employer_id !== userId) {
        throw ApiError.badRequest('Вы не можете удалять чужую вакансию');
    }

    await job.destroy();
}

const addResponse = async (userId, jobId) => {
    const job = await Job.findByPk(jobId);

    if (!job) {
        throw ApiError.badRequest('Вакансия не существует');
    }

    const response = await Response.create({
        user_id: userId,
        job_id:  jobId,
    });

    await job.update({
        responses: job.responses + 1
    })

    return response;
}

const removeResponse = async (userId, jobId) => {
    const response = await Response.findOne({
        where: {
            user_id: userId,
            job_id:  jobId,
        },
    })

    if (!response) {
        throw ApiError.badRequest('Отклик не существует');
    }

    await response.destroy();

    const job = await Job.findByPk(jobId);
    
    await job.update({
        responses: job.responses - 1
    });
}


export default {
    getJobById,
    getAllJobs,
    createJob,
    updateJob,
    deleteJob,
    addResponse,
    removeResponse
};


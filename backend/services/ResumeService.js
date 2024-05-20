import ApiError from '../ApiError.js';
import Resume from '../models/Resume.js';
import { Op } from 'sequelize';

const getResumeById = async (resumeId) => {
    const resume = await Resume.findByPk(resumeId);
    if (!resume) {
        throw ApiError.notFound('Резюме не существует');
    }
    return resume;
}

const getAllResumes = async () => {
    return Resume.findAll();
}

const getResumesByFilters = async (filters) => {
    const where = {};
    if (filters.withoutExpirience) {
        where.experience_years = { [Op.eq]: 0 };
    }
    if (filters.salary) {
        where.desired_salary = { [Op.gte]: filters.salary };
    }
    if (filters.speciality) {
        where.specialty_id = { [Op.in]: filters.speciality.split(',').map(Number) };
    }
    if (filters.employmentType) {
        where.employment_type_id = { [Op.in]: filters.employmentType.split(',').map(Number) };
    }
    if (filters.city) {
        where.city = filters.city;
    }
    if (filters.orderBy) {
        where.orderBy = filters.orderBy;
    }
    return Resume.findAll({ where });
}

const createResume = async (userId, data) => {
    const newResume = await Resume.create({
        // персональные данные
        job_seeker_id:      userId,
        title:              data.title,
        photo_url:          data.photoUrl,
        first_name:         data.firstName,
        last_name:          data.lastName,
        middle_name:        data.middleName,
        gender:             data.gender,
        birthdate:          data.birthdate,
        city:               data.city,
        citizenship_id:     data.citizenshipId,
        // специальность
        specialty_id:       data.specialtyId,
        employment_type_id: data.employmentTypeId,
        desired_salary:     data.desiredSalary,
        // контакты
        email:              data.email,
        phone:              data.phone,
        // опыт работы
        experience_years:           data.experienceYears,
        experience_specialty:       data.experienceSpecialty,
        experience_company:         data.experienceCompany,
        experience_achievements:    data.experienceAchievements,
        // образование
        education_id:           data.educationId,
        education_specialty:    data.educationSpecialty,
        education_university:   data.educationUniversity,
        // языки
        foreign_language:           data.foreignLanguage,
        foreign_language_level:     data.foreignLanguageLevel,
        // дополнительная информация
        additional_info:    data.additionalInfo,
        relocate:           data.relocate,
        married:            data.married,
        children:           data.children,
    });
    return newResume;
}


const updateResume = async (userId, resumeId, data) => {
    const resume = await Resume.findByPk(resumeId);

    if (!resume) {
        throw ApiError.badRequest('Резюме не существует');
    }

    if (resume.job_seeker_id !== userId) {
        throw ApiError.badRequest('Вы не можете изменять чужое резюме');
    }

    const updatedResume = resume.update({
        // персональные данные
        title:              data.title,
        photo_url:          data.photoUrl,
        first_name:         data.firstName,
        last_name:          data.lastName,
        middle_name:        data.middleName,
        gender:             data.gender,
        birthdate:          data.birthdate,
        city:               data.city,
        citizenship_id:     data.citizenshipId,
        // специальность
        specialty_id:       data.specialtyId,
        employment_type_id: data.employmentTypeId,
        desired_salary:     data.desiredSalary,
        // контакты
        email:              data.email,
        phone:              data.phone,
        // опыт работы
        experience_years:           data.experienceYears,
        experience_specialty:       data.experienceSpecialty,
        experience_company:         data.experienceCompany,
        experience_achievements:    data.experienceAchievements,
        // образование
        education_id:           data.educationId,
        education_specialty:    data.educationSpecialty,
        education_university:   data.educationUniversity,
        // языки
        foreign_language:           data.foreignLanguage,
        foreign_language_level:     data.foreignLanguageLevel,
        // дополнительная информация
        additional_info:    data.additionalInfo,
        relocate:           data.relocate,
        married:            data.married,
        children:           data.children,
    });

    return updatedResume;
}

const deleteResume = async (userId, resumeId) => {
    const resume = await Resume.findByPk(resumeId);

    if (!resume) {
        throw ApiError.badRequest('Резюме не существует');
    }

    if (resume.job_seeker_id !== userId) {
        throw ApiError.badRequest('Вы не можете удалять чужое резюме');
    }

    resume.destroy();
}


export default {
    getResumeById,
    getAllResumes,
    createResume,
    updateResume,
    deleteResume,
    getResumesByFilters
};
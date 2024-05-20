import ResumeService from "../services/ResumeService.js";


const getOneResume = async (req, res, next) => {
    try {
        const resumeId = req.params.id;
        const resume = await ResumeService.getResumeById(resumeId);
        res.json({ resume: resume });
    } catch (err) {
        next(err);
    }
}

const getAllResumes = async (req, res, next) => {
    try {
        const query = req.query;
        if (Object.keys(query).length > 0) {
            const resumes = await ResumeService.getResumesByFilters(query);
            res.json({ resumes: resumes });
        } else {
            const resumes = await ResumeService.getAllResumes();
            res.json({ resumes: resumes });
        }
    } catch (err) {
        next(err);
    }
}

const createResume = async (req, res, next) => {
    try {
        const resumeData = req.body;
        const userId = req.auth.userId;
        const newResume = await ResumeService.createResume(userId, resumeData);
        res.status(201).json({ message: 'Резюме успешно создано', resume: newResume });
    } catch (err) {
        next(err);
    }
}

const updateResume = async (req, res, next) => {
    try {
        const resumeId = req.params.id;
        const resumeData = req.body;
        const userId = req.auth.userId;
        const updatedResume = await ResumeService.updateResume(userId, resumeId, resumeData);
        res.status(201).json({ message: 'Резюме успешно обновлено', resume: updatedResume });
    } catch (err) {
        next(err);
    }
}

const deleteResume = async (req, res, next) => {
    try {
        const resumeId = req.params.id;
        const userId = req.auth.userId;
        await ResumeService.deleteResume(userId, resumeId);
        res.status(201).json({ message: 'Резюме успешно удалено' });
    } catch (err) {
        next(err);
    }
}

export default {
    getOneResume,
    getAllResumes,
    createResume,
    updateResume,
    deleteResume
}

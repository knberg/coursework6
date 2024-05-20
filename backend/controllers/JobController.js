import JobService from "../services/JobService.js";
import SpecialtyService from "../services/SpecialtyService.js";

const getOneJob = async (req, res, next) => {
    try {
        const jobId = req.params.id;
        const job = await JobService.getJobById(jobId);
        res.json(job);
    } catch (err) {
        next(err);
    }
}

const getAllJobs = async (req, res, next) => {
    try {
        const jobs = await JobService.getAllJobs();
        res.json(jobs);
    } catch (err) {
        next(err);
    }
}

const createJob = async (req, res, next) => {
    try {
        console.log(req.body)
        const jobData = req.body;
        const userId = req.auth.userId;
        const newJob = await JobService.createJob(userId, jobData);
        res.status(201).json({ message: 'Вакансия успешно создана', job: newJob });
    } catch (err) {
        next(err);
    }
}

const updateJob = async (req, res, next) => {
    try {
        const jobId = req.params.id;
        const jobData = req.body;
        const userId = req.auth.userId;
        const updatedJob = await JobService.updateJob(userId, jobId, jobData);
        res.status(201).json({ message: 'Вакансия успешно обновлена', job: updatedJob });
    } catch (err) {
        next(err);
    }
}

const deleteJob = async (req, res, next) => {
    try {
        const jobId = req.params.id;
        const userId = req.auth.userId;
        await JobService.deleteJob(userId, jobId);
        res.status(201).json({ message: 'Вакансия успешно удалена' });
    } catch (err) {
        next(err);
    }
}

const addResponse = async (req, res, next) => {
    try {
        const jobId = req.params.id;
        const userId = req.auth.userId;
        await JobService.addResponse(userId, jobId);
        res.json({ status: 'Success' });
    } catch (err) {
        next(err);
    }
}

const removeResponse = async (req, res, next) => {
    try {
        const jobId = req.params.id;
        const userId = req.auth.userId;
        await JobService.removeResponse(userId, jobId);
        res.json({ status: 'Success' });
    } catch (err) {
        next(err);
    }
}

const getAllSpecialties = async (req, res, next) => {
    try {
        const jobs = await SpecialtyService.getAllSpecialties();
        res.json(jobs);
    } catch (err) {
        next(err);
    }
}

export default {
    getOneJob,
    getAllJobs,
    createJob,
    updateJob,
    deleteJob,
    addResponse,
    removeResponse,
    getAllSpecialties,
}

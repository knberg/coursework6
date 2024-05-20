import SearchService from "../services/SearchService.js";

const searchJobs = async (req, res, next) => {
    try {
        const params = req.query;
        const jobs = await SearchService.searchJobs(params);
        res.json(jobs);
    } catch (err) {
        next(err);
    }
}


export default {
    searchJobs
};
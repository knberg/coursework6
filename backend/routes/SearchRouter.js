import express from 'express';

import SearchController from "../controllers/SearchController.js";
import checkAuth from '../middleware/AuthMiddleware.js';

const router = express.Router();

router.get('/search/jobs', SearchController.searchJobs);
// router.get('/search/resumes', SearchController.searchResumes);


export default router;
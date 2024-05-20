import express from 'express';

import JobController from "../controllers/JobController.js";
import { createJobValidation } from "../validations/validations.js";
import checkAuth from '../middleware/AuthMiddleware.js';

const router = express.Router();
 
router.get('/jobs', JobController.getAllJobs); 
router.get('/jobs/:id', JobController.getOneJob); 
router.post('/jobs', checkAuth, JobController.createJob); 
router.put('/jobs/:id', checkAuth, createJobValidation, JobController.updateJob);  
router.delete('/jobs/:id', checkAuth, JobController.deleteJob); 

router.get('/jobs/:id/respond', checkAuth, JobController.addResponse); 
router.delete('/jobs/:id/respond', checkAuth, JobController.removeResponse); 

router.get('/specialties', JobController.getAllSpecialties); 


export default router;
import express from 'express';

import ResumeController from "../controllers/ResumeController.js";
import { createResumeValidation } from "../validations/validations.js";
import checkAuth from '../middleware/AuthMiddleware.js';

const router = express.Router();

router.get('/resume', ResumeController.getAllResumes);  // Обработчик GET запроса на получение всех резюме
router.get('/resume/:id', ResumeController.getOneResume);  // Обработчик GET запроса на получение резюме по ID
router.post('/resume', checkAuth, ResumeController.createResume);  // Обработчик POST запроса на добавление резюме
router.put('/resume/:id', checkAuth, createResumeValidation, ResumeController.updateResume);  // Обработчик PUT запроса на обновление резюме
router.delete('/resume/:id', checkAuth, ResumeController.deleteResume);  // Обработчик DELETE запроса на удаление резюме


export default router;
import express from 'express';

import AuthController from "../controllers/AuthController.js";
import { loginValidation, registrationValidation } from "../validations/validations.js";

const router = express.Router();

router.post('/login', loginValidation, AuthController.login);  // Обработчик POST запроса на вход
router.post('/register', registrationValidation, AuthController.register); // Обработчик POST запроса на регистрацию
router.post('/logout', AuthController.logout); // Обработчик POST запроса на выход
router.get('/refresh', AuthController.refreshTokens); // Обработчик запроса на обновление access токена

export default router;
import { body } from "express-validator";
import validate from "../middleware/ValidationMiddleware.js";

// Валидация полей формы входа
export const loginValidation = [
    body('email').notEmpty().withMessage('Email обязателен для заполнения').isEmail().withMessage('Неверный формат email'),
    body('password').notEmpty().withMessage('Пароль обязателен для заполнения'),
    validate
];

// Валидация полей формы регистрации
export const registrationValidation = [
    body('email').notEmpty().withMessage('Email обязателен для заполнения').isEmail().withMessage('Неверный формат email'),
    body('password').notEmpty().withMessage('Пароль обязателен для заполнения'),
    body('passwordConfirm').notEmpty().withMessage('Подтвержение пароля обязательно для заполнения').custom((value, { req }) => {
        if (value !== req.body.password) 
            throw new Error('Пароли не совпадают');
        return true;
    }),
    body('role').notEmpty().withMessage('Роль обязательна для заполнения').isIn([1, 2]).withMessage('Некорректное значение роли'),
    validate
];

export const createResumeValidation = [
    // Проверка обязательных полей
    body('title').trim().notEmpty().withMessage('Заголовок обязателен').isLength({ max: 120 }).withMessage('Длина заголовка не должна превышать 120 символов'),
    body('firstName').trim().notEmpty().withMessage('Имя обязательно').isLength({ max: 50 }).withMessage('Длина имени не должна превышать 50 символов'),
    body('lastName').trim().notEmpty().withMessage('Фамилия обязательна').isLength({ max: 50 }).withMessage('Длина фамилии не должна превышать 50 символов'),
    body('gender').isIn(['m', 'f']).withMessage('Пол должен быть одним из: m, f').notEmpty().withMessage('Пол не должен быть пустым'),
    body('birthdate').isDate().withMessage('Некорректная дата рождения'),
    body('city').trim().notEmpty().withMessage('Город обязателен'),
    body('specialtyId').notEmpty().withMessage('Не указан ID специальности').isInt().withMessage('ID специальности должен быть числом'),
    // Проверка опциональных полей
    body('photoUrl').optional().isURL().withMessage('Некорректный URL фото'),
    body('middleName').optional().trim(),
    body('citizenshipId').optional().isInt().withMessage('ID гражданства должен быть числом'),
    body('employmentTypeId').optional().isInt().withMessage('ID типа занятости должен быть числом'),
    body('desiredSalary').optional().isInt().withMessage('Желаемая зарплата должна быть числом'),
    body('experienceYears').optional().isInt().withMessage('Опыт работы (в годах) должен быть числом'),
    body('experienceSpecialty').optional().trim(),
    body('experienceCompany').optional().trim(),
    body('experienceAchievements').optional().trim(),
    body('educationId').notEmpty().withMessage('Не указан ID образования').isInt().withMessage('ID образования должен быть числом'),
    body('educationSpecialty').optional().trim(),
    body('educationUniversity').optional().trim(),
    body('foreignLanguageId').optional().isInt().withMessage('ID иностранного языка должен быть числом'),
    body('foreignLanguageLevelId').optional().isInt().withMessage('Уровень владения иностранным языком должен быть числом'),
    body('additionalInfo').optional().trim(),
    body('relocate').optional().isBoolean().withMessage('Значение "relocate" должно быть логическим'),
    body('married').optional().isBoolean().withMessage('Значение "married" должно быть логическим'),
    body('children').optional().isBoolean().withMessage('Значение "children" должно быть логическим'),
    validate
];


export const createJobValidation = [
    // Проверка обязательных полей
    body('title').trim().notEmpty().withMessage('Заголовок обязателен'),
    body('city').trim().notEmpty().withMessage('Город обязателен'),
    // Проверка опциональных полей
    body('description').trim().notEmpty().withMessage('Введите описание'),
    body('salaryFrom').notEmpty().withMessage('Укажите зарплату').isInt().withMessage('Некорректное значение минимальной зарплаты'),
    body('salaryTo').optional().isInt().withMessage('Некорректное значение максимальной зарплаты'),
    body('specialtyId').optional().isInt().withMessage('ID специальности должен быть числом'),
    body('employmentTypId').optional().isInt().withMessage('ID типа занятости должен быть числом'),
    body('educationId').optional().isInt().withMessage('ID образования должен быть числом'),
    body('experience').notEmpty().withMessage('Укажите опыт работы').isInt().withMessage('Опыт работы должен быть числом'),
    body('skills').optional().isArray().withMessage('Навыки должны быть представлены в виде массива'),
    validate
];  
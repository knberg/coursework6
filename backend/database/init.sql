CREATE TABLE specialties (
    id SERIAL PRIMARY KEY,
    name VARCHAR(120) UNIQUE NOT NULL
);

CREATE TABLE roles (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) UNIQUE NOT NULL
);

CREATE TABLE citizenships (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) UNIQUE NOT NULL
);

CREATE TABLE education (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) UNIQUE NOT NULL
);

CREATE TABLE employment_types (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) UNIQUE NOT NULL
);

CREATE TABLE languages (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) UNIQUE NOT NULL
);

CREATE TABLE language_levels (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) UNIQUE NOT NULL
);

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(100) NOT NULL,
    role VARCHAR(20) REFERENCES roles(id),
    created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE job_seekers (
    user_id INT PRIMARY KEY REFERENCES users(id),
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    phone_number VARCHAR(20),
    city VARCHAR(50)
);


CREATE TABLE employers (
    user_id INT PRIMARY KEY REFERENCES users(id),
    company_name VARCHAR(100) NOT NULL,
    company_description TEXT,
    city VARCHAR(100) NOT NULL,
    industry VARCHAR(100),
    contact_email VARCHAR(100) UNIQUE NOT NULL,
    address VARCHAR(255) NOT NULL,
    website VARCHAR(100)
);

CREATE TABLE jobs (
    id SERIAL PRIMARY KEY,
    employer_id INTEGER REFERENCES employers(id) ON DELETE CASCADE
    title VARCHAR(100) NOT NULL,
    description TEXT,
    salary_from INTEGER,
    salary_to INTEGER,
    city VARCHAR(100) NOT NULL,
    specialty_id INTEGER REFERENCES specialties(id),
    employment_type_id INTEGER REFERENCES employment_types(id),
    education_id INTEGER REFERENCES education(id),
    experience INTEGER,
    skills TEXT[],
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    responses INTEGER DEFAULT 0,
    views INTEGER DEFAULT 0
);

CREATE TABLE resumes (
    id SERIAL PRIMARY KEY,
    job_seeker_id INTEGER REFERENCES job_seekers(id) ON DELETE CASCADE,
    title VARCHAR(120) NOT NULL,
    photo_url VARCHAR(255),
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    middle_name VARCHAR(50),
    gender VARCHAR(10) NOT NULL,
    birthdate DATE NOT NULL,
    city VARCHAR(100) NOT NULL,
    citizenship_id INTEGER REFERENCES citizenships(id),
    specialty_id INTEGER REFERENCES specialties(id),
    employment_type_id INTEGER REFERENCES employment_types(id),
    desired_salary INTEGER,
    experience_years INTEGER,
    experience_specialty VARCHAR(100),
    experience_company VARCHAR(100),
    experience_achievements TEXT,
    education_id INTEGER REFERENCES education(id),
    education_specialty VARCHAR(100),
    education_university VARCHAR(100),
    foreign_language INTEGER REFERENCES languages(id),
    foreign_language_level INTEGER REFERENCES language_levels(id),
    additional_info TEXT,
    relocate BOOLEAN,
    married BOOLEAN,
    children BOOLEAN,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    views INTEGER DEFAULT 0
);

CREATE TABLE responses (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    job_id INTEGER REFERENCES jobs(id) ON DELETE CASCADE,
    created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE favorite_jobs (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    job_id INTEGER REFERENCES jobs(id) ON DELETE CASCADE
);

CREATE TABLE favorite_resumes (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    resume_id INTEGER REFERENCES resumes(id) ON DELETE CASCADE
);

CREATE TABLE refresh_sessions (
    token VARCHAR(255) PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    fingerprint VARCHAR(255) NOT NULL,
    expire DATE NOT NULL
);


INSERT INTO specialties (name) VALUES 
    ('Программист'),
    ('Дизайнер'),
    ('Менеджер'),
    ('Аналитик'),
    ('Финансист');

INSERT INTO roles (name) VALUES 
    ('Администратор'),
    ('Соискатель'),
    ('Работодатель');

INSERT INTO citizenships (country) VALUES 
    ('Россия'),
    ('Украина'),
    ('Беларусь'),
    ('Молдова'),
    ('Казахстан'),
    ('Таджикистан'),
    ('Узбекистан');

INSERT INTO education (name) VALUES 
    ('Начальное'),
    ('Основное общее'),
    ('Среднее общее'),
    ('Среднее специальное'),
    ('Неполное высшее'),
    ('Высшее'),
    ('Доктор наук');

INSERT INTO employment_types (name) VALUES 
    ('Полная занятость'),
    ('Частичная занятость'),
    ('Временная работа'),
    ('Волонтёрство');

INSERT INTO languages (name) VALUES 
    ('Английский'),
    ('Немецкий'),
    ('Французский'),
    ('Итальянский'),
    ('Испанский');

INSERT INTO language_levels (name) VALUES 
    ('Базовый'),
    ('Технический'),
    ('Разговорный'),
    ('Родной');

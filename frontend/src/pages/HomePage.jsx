import React, { useEffect } from 'react';
import Header from '../components/common/header/Header';
import Footer from '../components/common/footer/Footer';
import BannerTop from '../components/home/BannerTop';
import JobList from '../components/job/JobList';
import Section1 from '../components/home/Section1';
import Section2 from '../components/home/Section2';
import ProfessionLinkList from '../components/job/ProfessionLinkList';
import FilterLinkList from '../components/job/FilterLinkList';

const educationFilters = [
  { name: 'Высшее', param: 'education', value: 1 },
  { name: 'Среднее', param: 'education', value: 2 },
  { name: 'Среднее специальное', param: 'education', value: 3 },
  { name: 'Среднее профессиональное', param: 'education', value: 4 },
  { name: 'Незаконченное высшее', param: 'education', value: 5 },
  { name: 'Основное общее', param: 'education', value: 6 },
];

const employmentTypeFilters = [
  { name: 'Полная занятость', param: 'employment_type', value: 1 },
  { name: 'Частичная занятость', param: 'employment_type', value: 2 },
  { name: 'Стажировка', param: 'employment_type', value: 3 },
  { name: 'Волонтерство', param: 'employment_type', value: 4 },
  { name: 'Удаленная работа', param: 'employment_type', value: 5 },
  { name: 'Гибкий график', param: 'employment_type', value: 6 },
  { name: 'Сменный график', param: 'employment_type', value: 7 },
  { name: 'Вахта', param: 'employment_type', value: 8 },
]

const otherFilters = [
  { name: 'Без опыта', param: 'experience', value: 0 },
  { name: 'Для студентов', param: 'keyword', value: "студент" },
  { name: 'Для пенсионеров', param: 'keyword', value: "пенсионер" },
  { name: 'С проживанием', param: 'keyword', value: "с проживанием" },
]

const specialties = [
  { id: 1, name: 'Программист'},
  { id: 2, name: 'Маркетолог'},
  { id: 3, name: 'Дизайнер'},
  { id: 4, name: 'Менеджер'},
  { id: 5, name: 'Аналитик'},
  { id: 6, name: 'Бухгалтер'},
  { id: 7, name: 'Консультант'},
  { id: 8, name: 'Руководитель'},
  { id: 9, name: 'Учитель'},
  { id: 10, name: 'Тестировщик'},
  { id: 11, name: 'HR менеджер'},
  { id: 12, name: 'Маркетолог'},
  { id: 13, name: 'Уборщик'},
  { id: 14, name: 'Инженер'},
  { id: 15, name: 'Администратор'},
  { id: 16, name: 'Архитектор'},
  { id: 17, name: 'Бухгалтер'},
  { id: 18, name: 'Геолог'},
  { id: 19, name: 'Директор'},
  { id: 20, name: 'Инженер'},
  { id: 21, name: 'Таксист'},
  { id: 22, name: 'Менеджер'},
]

const HomePage = () => {

  return (
    <>
      <Header />
      <BannerTop />
      <div className="wrapper">
        <Section1 title="Новые вакансии">
          <JobList />
        </Section1>
        <Section1 title="Работа и вакансии">
          <Section2 title="По профессиям">
            <ProfessionLinkList specialties={specialties} />
          </Section2>
          <Section2 title="По образованию">
            <FilterLinkList filters={educationFilters} />
          </Section2>
          <Section2 title="По графику">
          <FilterLinkList filters={employmentTypeFilters} />
          </Section2>
          <Section2 title="Другое">
          <FilterLinkList filters={otherFilters} />
          </Section2>
        </Section1>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
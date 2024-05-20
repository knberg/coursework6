import React from 'react';
import { Link } from 'react-router-dom';

// Компонент для информации о компании
const CompanyInfo = ({ id, logo, name, vacancyCount }) => {
  return (
    <div className="company-info">
      <Link to={`/company/${id}`}>
        <img src={logo} alt={name} />
        <h3>{name}</h3>
        <p>{vacancyCount} вакансий</p>
      </Link>
    </div>
  );
};

// Компонент для карусели компаний
const CompaniesCarousel = ({ companies }) => {
  return (
    <div className="companies-carousel">
      {companies.map((company, index) => (
        <CompanyInfo key={index} {...company} />
      ))}
    </div>
  );
};

export default CompaniesCarousel;
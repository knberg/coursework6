import React from 'react';
import { Link } from 'react-router-dom';

const BannerTop = () => {
  return (
    <div className="banner-top">
      <div className="banner-column">
        <h2>Работа</h2>
        <p>Найдите идеальную работу среди тысяч вакансий. GoodJob - это лучшие предложения от топовых российских компаний.</p>
        <div>
          <Link to="/resumes/create"><button className='btn btn-blue'>Разместить резюме</button></Link>
          <Link to="/jobs/search"><button className='btn btn-white'>Найти работу</button></Link>
        </div>
      </div>
      <div className="banner-column">
        <h2>Сотрудники</h2>
        <p>Найдите идеальных сотрудников для вашей компаний среди тысяч качественных резюме, представленных в нашей базе.</p>
        <div>
          <Link to="/jobs/create"><button className='btn btn-blue'>Разместить вакансию</button></Link>
          <Link to="/resumes/search"><button className='btn btn-white'>Найти сотрудника</button></Link>
        </div>
      </div>
    </div>
  );
};

export default BannerTop;

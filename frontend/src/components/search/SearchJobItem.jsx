import React from 'react';
import { Link } from 'react-router-dom';

const SearchJobItem = ({data}) => {
    return (
      <div className="result-item">
        <div className="job-card__date">{data.date}</div>
        <div className="job-card__title">{data.title}</div>
        <div className="job-card__salary">{data.salary_from} ₽/месяц</div>
        <div className="job-card__company">
          <Link to={`/jobs/${data.id}`}>{data.company}</Link>
        </div>
        <button className="job-card__favorite"><i className="fa fa-heart" aria-hidden="true"></i></button>
        <button className="job-card__respond">Откликнуться</button>
        <Link to={`/jobs/${data.id}`}><button className="job-card__details">Подробнее</button></Link>
      </div>
    );
  };
  
  export default SearchJobItem;
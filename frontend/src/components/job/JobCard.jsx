import React from 'react';
import { Link } from 'react-router-dom';

const JobCard = ({job}) => {
  return (
    <div className="job-card">
      <div className="job-card__date">{job.date}</div>
      <div className="job-card__title">{job.title}</div>
      <div className="job-card__salary">{job.salary_from} ₽/месяц</div>
      <div className="job-card__company">
        <Link to={`/jobs/${job.id}`}>{job.company}</Link>
      </div>
      <button className="job-card__favorite"><i className="fa fa-heart" aria-hidden="true"></i></button>
      <div className='buttons'>
        <button className="job-card__respond">Откликнуться</button>
        <Link to={`/jobs/${job.id}`}><button className="job-card__details">Подробнее</button></Link>
      </div>
    </div>
  );
};

export default JobCard;
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/common/header/Header';
import Footer from '../components/common/footer/Footer';
import Section1 from '../components/home/Section1';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJob } from '../redux/slices/jobSlice';
import JobList from '../components/job/JobList';


const JobPage = () => {

  const { id } = useParams();
  const dispatch = useDispatch();
  const { currentJob, loading, error } = useSelector((state) => state.job);

  useEffect(() => {
    dispatch(fetchJob(id));
  }, [dispatch]);

  if (currentJob == null) {
    return <div>Загрузка...</div>;
  }

  if (error) {
    return <div>Ошибка: {error.message}</div>;
  }

  return (
    <>
    <Header />
    <div className='wrapper'>
      <div className='job-container'>
        <div className='job-header'>
        <div className='job-date'>Опубликовано: {currentJob.created_at.substr(0, 10)}</div>
          <div className='job-id'>Вакансия #{currentJob.id}</div>
          <div>
            <button className="job-card__respond">Откликнуться</button>
            <button className="job-favorite"><i class="fa fa-heart" aria-hidden="true"></i></button>
          </div>
        </div>
        <div className='job-body'>
          <h1 className='job-title'>{currentJob.title}</h1>
          <div className='job-salary'>{currentJob.salary_from} ₽/месяц</div>
          <div className='job-location'>{currentJob.city}</div>
          {/* <div className='job-company'>{currentJob}</div> */}
          <div className='job-description'>{currentJob.description}</div>
        </div>
      </div>
      <Section1 title="Похожие вакансии">
        <JobList />
      </Section1>
    </div>
    <Footer />
    </>
  );
};

export default JobPage;

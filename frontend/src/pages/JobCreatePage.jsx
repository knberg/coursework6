import React, { useState } from 'react';
import Footer from '../components/common/footer/Footer';
import Header from '../components/common/header/Header';
import { createJob } from '../redux/slices/jobSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const JobCreatePage = () => {

  const isAuth = useSelector((state) => state.auth.isAuth);
  const navigate = useNavigate();

  if (!isAuth) {
    navigate('/login');
  }


  const [title, setTitle] = useState('');
  const [salaryFrom, setSalaryFrom] = useState(0);
  const [salaryTo, setSalaryTo] = useState(0);
  const [city, setCity] = useState('');
  const [specialtyId, setSpecialtyId] = useState(1);
  const [employmentTypeId, setEmploymentTypeId] = useState(1);
  const [educationId, setEducationId] = useState(1);
  const [experience, setExperience] = useState('');
  const [description, setDescription] = useState('');
  const [skills, setSkills] = useState([]);
  
  const dispatch = useDispatch();
  const { loading, success, error } = useSelector(state => state.job);
  
  const handleSubmit = e => {
      e.preventDefault();
      dispatch(createJob({ title, salaryFrom, city, specialtyId, employmentTypeId, educationId, experience, description, skills: [] }));
  };

  return (
    <>
    <Header />
    <div className='wrapper'>
      <div className='create-container'>
      <h2>Резместить вакансию</h2>
      <h3>Заполните основную информацию</h3>
        <form className='create-form' onSubmit={handleSubmit}>
          <label htmlFor="title">Название</label>
          <input
                type="text"
                value={title}
                onChange={e => setTitle(e.target.value)}
                required
          />

          <label htmlFor="title">Зарплата</label>
          <input
                type="number"
                value={salaryFrom}
                onChange={e => setSalaryFrom(e.target.value)}
                required
          />

          <label htmlFor="title">Город</label>
          <input
                type="text"
                value={city}
                onChange={e => setCity(e.target.value)}
                required
          />

          <label htmlFor="specialty_id">Специальность</label>
          <select 
                value={specialtyId} 
                onChange={e => setSpecialtyId(e.target.value)} 
                name="specialty_id" 
                id="specialty_id"
                required
          >
            <option selected value="1">Продавец</option>
            <option value="2">Аниматор</option>
            <option value="3">Консультант</option>
            <option value="4">Няня</option>
          </select>
          
          <label htmlFor="employment_type_id">Тип занятости</label>
          <select 
                value={employmentTypeId}
                onChange={e => setEmploymentTypeId(e.target.value)}
                name="employment_type_id" 
                id="employment_type_id"
                required
          >
            <option selected value="1">Полная занятость</option>
            <option value="2">Частичная занятость</option>
            <option value="3">Временная работа</option>
            <option value="4">Волонтёрство</option>
          </select>

          <label htmlFor="education_id">Образование</label>
          <select 
                name="education_id" 
                id="education_id"
                value={educationId}
                onChange={e => setEducationId(e.target.value)}
          >
            <option selected value="1">Высшее</option>
            <option value="2">Среднее</option>
          </select>

          
          <label htmlFor="experience">Опыт работы</label>
          <input
                type="number"
                value={experience}
                onChange={e => setExperience(e.target.value)}
                required
          />

          <label htmlFor="description">Описание</label>
          <textarea 
                name="description" 
                id="description"
                value={description}
                onChange={e => setDescription(e.target.value)}
                required
          >

          </textarea>
          <button className='btn btn-blue' type="submit" disabled={loading}>Сохранить</button>
        </form>
        {loading && <p>Загрузка...</p>}
        {success && <p>Вакансия создана</p>}
        {error && <p>Ошибка: {error}</p>}
      </div>
    </div>
    <Footer />
    </>
  );
};

export default JobCreatePage;
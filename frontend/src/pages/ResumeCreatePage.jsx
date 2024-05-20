import React, { useState } from 'react';
import Footer from '../components/common/footer/Footer';
import Header from '../components/common/header/Header';
import { createJob } from '../redux/slices/jobSlice';
import { useDispatch, useSelector } from 'react-redux';
import { createResume } from '../redux/slices/resumeSlice';
import { useNavigate } from 'react-router-dom';

const ResumeCreatePage = () => {

  const isAuth = useSelector((state) => state.auth.isAuth);
  const navigate = useNavigate();

  if (!isAuth) {
    navigate('/login');
  }

  const [title, setTitle] = useState(null);
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [middleName, setMiddleName] = useState(null);
  const [birthdate, setBirthdate] = useState(null);
  const [gender, setGender] = useState(null);
  const [city, setCity] = useState(null);
  const [specialtyId, setSpecialtyId] = useState(null);
  const [employmentTypeId, setEmploymentTypeId] = useState(null);
  const [salary, setSalary] = useState(null);
  const [educationId, setEducationId] = useState(null);
  const [experience, setExperience] = useState(null);
  const [additionalInfo, setAdditionalInfo] = useState(null);

  const dispatch = useDispatch();
  const { loading, success, error } = useSelector(state => state.job);
  
  const handleSubmit = e => {
      e.preventDefault();
      dispatch(createResume({ title, email: "wdv", phone: "+42352345678", firstName, lastName, middleName, birthdate, gender, city, specialtyId, employmentTypeId, salary, educationId, experience, additionalInfo }));
  };

  return (
    <>
    <Header />
    <div className='wrapper'>
      <div className='create-container'>
      <h2>Резместить резюме</h2>
      <h3>Заполните основную информацию</h3>
        <form className='create-form' onSubmit={handleSubmit}>
          <label htmlFor="title">Название</label>
          <input
                type="text"
                value={title}
                onChange={e => setTitle(e.target.value)}
                required
          />

          <label htmlFor="firstName">Имя</label>
          <input
                type="text"
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
                required
          />

          <label htmlFor="lastName">Фамилия</label>
          <input
                type="text"
                value={lastName}
                onChange={e => setLastName(e.target.value)}
                required
          />

          <label htmlFor="middleName">Отчество</label>
          <input
                type="text"
                value={middleName}
                onChange={e => setMiddleName(e.target.value)}
          />

          <label htmlFor="birthdate">Дата рождения</label>
          <input
                type="date"
                value={birthdate}
                onChange={e => setBirthdate(e.target.value)}
                required 
          />

          <label htmlFor="gender">Пол</label>
          <select 
                value={gender}
                onChange={e => setGender(e.target.value)} 
                name="gender" 
                id="gender"
                required
          >
            <option selected value="m">Мужской</option>
            <option value="f">Женский</option>
          </select>


          <label htmlFor="title">Город</label>
          <input
                type="text"
                value={city}
                onChange={e => setCity(e.target.value)}
                required
          />

          <label htmlFor="specialtyId">Специальность</label>
          <select 
                value={specialtyId} 
                onChange={e => setSpecialtyId(e.target.value)} 
                name="specialtyId" 
                id="specialtyId"
                required
          >
            <option selected value="1">Продавец</option>
            <option value="2">Аниматор</option>
            <option value="3">Консультант</option>
            <option value="4">Няня</option>
          </select>
          
          <label htmlFor="employmentTypeId">Желаемый тип занятости</label>
          <select 
                value={employmentTypeId}
                onChange={e => setEmploymentTypeId(e.target.value)}
                name="employmentIypeId" 
                id="employmentIypeId"
          >
            <option value="1">Полная занятость</option>
            <option value="2">Частичная занятость</option>
            <option value="3">Временная работа</option>
            <option value="4">Волонтёрство</option>
          </select>

          <label htmlFor="employmentTypeId">Желаемая зарплата</label>
          <input
                type="number"
                value={salary}
                onChange={e => setSalary(e.target.value)}
          />

          <label htmlFor="educationId">Образование</label>
          <select 
                name="educationId" 
                id="educationId"
                value={educationId}
                onChange={e => setEducationId(e.target.value)}
          >
            <option value="1">Высшее</option>
            <option value="2">Среднее</option>
            <option value="3">Среднее специальное</option>
            <option value="4">Неполное высшее</option>
          </select>

          
          <label htmlFor="experience">Опыт работы</label>
          <input
                type="number"
                value={experience}
                onChange={e => setExperience(e.target.value)}
          />

          <label htmlFor="additionalInfo">Описание</label>
          <textarea 
                name="additionalInfo" 
                id="additionalInfo"
                value={additionalInfo}
                onChange={e => setAdditionalInfo(e.target.value)}
          >

          </textarea>
          <button className='btn btn-blue' type="submit" disabled={loading}>Сохранить</button>
        </form>
        {loading && <p>Загрузка...</p>}
        {success && <p>Резюме создано</p>}
        {error && <p>Ошибка: {error}</p>}
      </div>
    </div>
    <Footer />
    </>
  );
};

export default ResumeCreatePage;
import React, { useEffect, useState } from 'react';
import Header from '../components/common/header/Header';
import Footer from '../components/common/footer/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/slices/authSlice';
import { useNavigate } from 'react-router-dom';
import Section1 from '../components/home/Section1';
import Section2 from '../components/home/Section2';
import MyResume from '../components/profile/MyResume';
import { authClient } from '../axios';

const resumes = [
  { id: 1, title: 'Учитель английского' },
  { id: 2, title: 'Слесарь' },
];

const ProfilePage = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);

  const [data, setData] = useState([]);

  useEffect(() => {
      authClient.get("/resume")
          .then(response => setData(response.data.resumes))
          .catch(err => console.log(err));
  }, []);

  
  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <>
      <Header />
      <div className='wrapper'>
        <div className='profile'>
          <h1>Личный кабинет</h1>
          <Section2 title='Личные данные'>
            <p className='about-me'>id: 4</p>
            <p className='about-me'>Имя: Иван Иваныч</p>
            <button className='logout' onClick={() => dispatch(logout())} >Выйти</button>
          </Section2>
          <Section2 title='Мои резюме'>
            {resumes.length === 0 && <p>Вы еще не создали резюме</p>}
            {resumes.map((resume) => (
              <MyResume key={resume.id} data={resume} />
            ))}
          </Section2>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProfilePage;
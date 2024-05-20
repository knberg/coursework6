import React, { useState } from 'react';
import LoginForm from '../components/auth/LoginForm';
import RegistrationForm from '../components/auth/RegistrationForm';
import Header from '../components/common/header/Header';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const isAuth = useSelector((state) => state.auth.isAuth);
  const navigate = useNavigate();


  if (isAuth) {
    navigate('/');
  }

  return (
    <div>
      <Header />
      <div className='wrapper'>
        <div className='auth-container'>
          <h2>{isLogin ? 'Вход' : 'Регистрация'}</h2>
          {isLogin ? <LoginForm /> : <RegistrationForm />}
          <p onClick={toggleForm}>{isLogin ? 'Нет аккаунта? Зарегистрируйтесь.' : 'Есть аккаунт? Войдите.'}</p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;


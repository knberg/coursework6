import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../../redux/slices/authSlice';
import SearchBar from '../../search/SearchBar';

const Header = () => {

  const isAuth = useSelector((state) => state.auth.isAuth);
  const dispatch = useDispatch();

  return (
    <header className="header">

      <Link to="/" className="logo">GoodJob</Link>
      <SearchBar />
      {isAuth ? (     
        <Link to="/profile" className='nav-link'>Профиль</Link>
      ) : (
        <Link to="/login" className='nav-link'>Войти</Link>
      )}
    </header>
  );
};

export default Header;

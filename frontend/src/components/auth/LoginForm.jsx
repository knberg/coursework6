import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/slices/authSlice';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const error = useSelector((state) => state.auth.error);


    const handleSubmit = e => {
        e.preventDefault();
        dispatch(login({ email, password }));
    };

    return (
        <form className="auth-form" onSubmit={handleSubmit}>
            <input
                type="text"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Email"
            />
            <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Пароль"
            />
            <button type="submit" className='btn btn-blue'>Войти</button>
            {error && <div>{error}</div>}
        </form>
    );
};

export default LoginForm;

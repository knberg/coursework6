import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../redux/slices/authSlice';

const RegistrationForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [role, setRole] = useState(1);
    const dispatch = useDispatch();
    const error = useSelector((state) => state.auth.error);

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(register({ email, password, passwordConfirm, role }));
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
            <input
                type="password"
                value={passwordConfirm}
                onChange={e => setPasswordConfirm(e.target.value)}
                placeholder="Подтвердите пароль"
            />
            <label>Работодатель</label>
            <input
                type="checkbox"
                value={role}
                onChange={e => setRole(role == 1 ? 2 : 1)}
                style={{ width: '20px', height: '20px', marginLeft: '10px' }}
            />
            <button type="submit" className='btn btn-blue'>Зарегистрироваться</button>
            {error && <div>{error}</div>}
        </form>
    );
};

export default RegistrationForm;

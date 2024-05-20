import axios from 'axios';

export const guestClient = axios.create({
    baseURL: 'http://localhost:8000',
    withCredentials: true
})

export const authClient = axios.create({
    baseURL: 'http://localhost:8000',
    withCredentials: true
})

authClient.interceptors.request.use((config) => {
    const accessToken = localStorage.getItem('token');
    if (accessToken) {
        config.headers.Authorization = 'Bearer ' + accessToken;
    }
    return config;
});


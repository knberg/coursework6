import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { guestClient } from './axios';
import { checkAuth } from './redux/slices/authSlice';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import NotFound from './pages/NotFound';

import JobPage from './pages/JobPage';
import ResumePage from './pages/ResumePage';

import JobCreatePage from './pages/JobCreatePage';
import ResumeCreatePage from './pages/ResumeCreatePage';

import JobSearchPage from './pages/JobSearchPage';
import ResumeSearchPage from './pages/ResumeSearchPage';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    guestClient.get('/refresh')
      .then(res => {
        dispatch(checkAuth(res.data));
      })
      .catch(err => {
        console.log(err);
      });
         
    }, []);


  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} /> 
        <Route path="/login" element={<LoginPage />} /> 
        <Route path="/profile" element={<ProfilePage />} /> 

        <Route path="/jobs/:id" element={<JobPage />} />  
        <Route path="/jobs/create" element={<JobCreatePage />} />  
        <Route path="/jobs/search" element={<JobSearchPage />} /> 

        <Route path="/resumes/:id" element={<ResumePage />} />
        <Route path="/resumes/create" element={<ResumeCreatePage />} /> 
        <Route path="/resumes/search" element={<ResumeSearchPage />} /> 

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;

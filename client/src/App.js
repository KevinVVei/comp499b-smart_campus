import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Homepage from './pages/Home';
import CourseHome from './pages/CourseHome';
import Course from './pages/Course';
import Lecture from './pages/Lecture';
import Event from './pages/Event';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Error from './pages/Error';
import FacultyCourses from './pages/FacultyCourses';

function App() {

  return (
        <Router>
          <div className='navbar'>
            <Navbar />
          </div>
          
          <div className='content'>
          <Routes>
            <Route path='/' index element={<Homepage />} />
            <Route path='/CourseHome' element={<CourseHome />} />
            <Route path='/FacultyCourses' element={<FacultyCourses />} />
            <Route path='/CourseHome/courses/:courseId' element={<Course />} />
            <Route path='/CourseHome/courses/:courseId/details/:detailsId' element={<Lecture />} />
            <Route path='/Event' element={<Event />} />
            <Route path='/SignIn' element={<SignIn />} />
            <Route path='/SignUp' element={<SignUp />} />
            <Route path='*' element={<Error />} />
          </Routes>
          </div>

          <Footer />
        </Router>

  );
}

export default App;











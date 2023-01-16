import React from 'react';
import './App.css';
import Homepage from './pages/Home';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import CourseHome from './pages/CourseHome';
import Course from './pages/Course';
import Lecture from './pages/Lecture';

const navBar = (
  <div>
    <Navbar/>
  </div>
  )



function App() {
  return (
    <div>
      {navBar}
      <div className='App'>
        <Router>
          <Routes>
            <Route path='/SignUp' element={<SignUp />} />
            <Route path='/SignIn' element={<SignIn />} />
            <Route path='/' index element={<Homepage />} />
            <Route path="/coursehome" element={<CourseHome />} />
            <Route path="/coursehome/courses/:courseId" element={<Course />} />
            <Route path="/coursehome/courses/:courseId/details/:detailsId" element={<Lecture />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;









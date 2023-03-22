import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Homepage from './pages/Home';
import CourseHome from './pages/CourseHome';
import Event from './pages/Event';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Profile from './pages/Profile';
import Error from './pages/Error';
import Guidance from './components/Guidance'; 

function App() {

  const [token, setToken] = useState(sessionStorage.getItem('token'));
  const [isLogin, setLogin] = useState(false);

  useEffect(() => {
    if (token) {
      setLogin(true);
    }
  }, [token]);

  return (
    <div id="app-content">
        <Router>
          <div className='navbar'>
            <Navbar />
          </div>
          
          <div className='page-content'>
          <Routes>
            <Route exact path='/home' index element={<Homepage />} />
            <Route path='/CourseHome' element={<CourseHome />} />
            <Route path='/Event' element={<Event />} />
            {isLogin ? (
              <Route path='/SignIn' element={<Profile />} />
            ) : (
              <Route path='/SignIn' element={<SignIn />} />
            )}          
            {/* <Route
            
            path='/SignIn' element={
              <SignIn 
                handleSignIn={setLogin}
                updateJWT={setToken}
              />} 
            
          /> */}
  
            <Route path='/SignUp' element={<SignUp />} />
            <Route path='/Profile' element={<Profile />} />
            <Route path='/Guidance' element={<Guidance />} /> {/* Corrected link to Guidance page */}
            <Route path='*' element={<Error />} />
          </Routes>
          </div>

          <Footer id="page-footer" />
        </Router>
    </div>
  );
}

export default App;











import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import SignIn from './SignIn';
import Profile from '../pages/Profile';
import './Styles/Navbar.css';

function Navbar () {
    
    const [token, setToken] = useState(sessionStorage.getItem('token'));
    const [isLogin, setLogin] = useState(false);
  
    useEffect(() => {
      if (token) {
        setLogin(true);
      } else {
          setLogin(false);
        }
    }, [token]);

    const handleSignOut = async (e) => {
        e.preventDefault();
        setLogin(false);
        setToken(null);
        sessionStorage.removeItem('token');
        window.location.href = '/';
    }

    return (
      <nav>
        <Link to='/' className='logo' >
          <img src={require('../assets/images/uwin_logo.png')} alt='Uwindsor logo' />
        </Link>

        <ul className='navbar-buttons'>
            <li>
                <Link to='/' id='home-btn'>
                    Home
                </Link>
            </li>
            <li>
                <Link to='/CourseHome'>
                    Courses
                </Link>
            </li>
            <li>
                <Link to='/Event'>
                    Events
                </Link>
            </li>
            <li>
                    {isLogin ? (
                    <div className='dropdown-list'>
                        <Link id='signup-button' to='/Profile'>Profile</Link>
                        <Link id='signup-button' onClick={handleSignOut} >Sign Out</Link>
                    </div>
                ) : (
                    <Link to='/SignIn' 
                        >Sign In</Link>                               
                )}
     
                
            </li>
            <li>
                <Link to='/SignUp' id='signup-button'>
                    Sign up
                </Link>
            </li>
            <li id='user-icon'>
                <Link to='/Profile'>
                    {/*change to users name */}
                </Link>
            </li>
        </ul>
            
        </nav>
    )
}

export default Navbar;



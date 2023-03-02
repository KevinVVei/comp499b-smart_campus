import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import SignIn from './SignIn';
import Profile from '../pages/Profile';
import UserIcon from '../assets/images/user.svg';
import LogoutIcon from '../assets/images/logout-icon.svg';
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
          <img src={require('../assets/images/uwin-logo.png')} alt='Uwindsor logo' />
        </Link>

        <ul className='nav-buttons'>
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
            {!isLogin && (
                <>
                <li>
                    <Link to='/SignIn'>
                        Log in
                    </Link>                                      
                </li>
                <li>
                    <Link to='/SignUp' className='signup-btn'>
                        Sign up
                    </Link>
                </li>
                </>
            )}
            {isLogin && (
                <>
                <li id='user-icon'>
                    <Link to='/Profile'>
                        <img src={UserIcon} alt="user icon" />
                    </Link>
                </li> 
                <li id='logout-icon'>
                    <Link to='/'>
                        <img src={LogoutIcon} alt="user icon" onClick={handleSignOut}/>
                    </Link>
                </li>
                </>
            )}
        </ul>
    </nav>
    )
}

export default Navbar;



import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
      <nav>
        <Link to='/' className='logo'>
          <img src={require('../assets/images/uwin_logo.png')} alt='Uwindsor logo' />
        </Link>

        <ul className='navbar-buttons'>
            <li>
                <Link to='/'>
                    Home
                </Link>
            </li>
            <li>
                <Link to='/About'>
                    About
                </Link>
            </li>
            <li>
                <Link to='/CourseHome'>
                    Course
                </Link>
            </li>
            <li>
                <Link to='/Event'>
                    Events
                </Link>
            </li>
            <li >
                <Link to='/SignIn'>
                    Sign In
                </Link>
            </li>
            <li>
                <Link to='/SignUp' id='signup-button'>
                    Sign up
                </Link>
            </li>
        </ul>
            
        </nav>
    )
}

export default Navbar



import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import UserIcon from '../assets/images/user.svg';
import LogoutIcon from '../assets/images/logout.svg';
import HamburgerIcon from '../assets/images/bars.svg';
import Xmark from '../assets/images/xmark.svg';
import './Styles/Navbar.css';

function Navbar () {
    
    const [token, setToken] = useState(sessionStorage.getItem('token'));
    const [isLogin, setLogin] = useState(false);
    const [toggleNavbar, setToggleNavbar] = useState(false);
    const [mobileMenuState, setMobileMenuState] = useState(false);
    const [screenWidth, setScreenWidth] = useState();

    useEffect(() => {
        if (token) {
            setLogin(true);
        } else {
            setLogin(false);
        }
    }, [token]);

    useEffect(() => {
        window.addEventListener('resize', windowWidth);        
    });

    const windowWidth = () => {
        setScreenWidth(window.innerWidth);
        
        if(screenWidth < 900) {
            setToggleNavbar(true);
        } else {
            setToggleNavbar(false);
        }
    }

    const handleSignOut = async (e) => {
        e.preventDefault();
        setLogin(false);
        setToken(null);
        sessionStorage.removeItem('token');
        window.location.href = '/home';
    }

    const toggleMobileMenu = () => {
        setMobileMenuState(!mobileMenuState);

        if(!mobileMenuState){
            document.body.classList.add('disable-scroll');
        } else {
            document.body.classList.remove('disable-scroll');
        }
    }

    return (
        <nav id='navbar-container'>
            <Link to='/home' className='logo' >
            <img src={require('../assets/images/uwin-logo2.png')} alt='Uwindsor logo' />
            </Link>

            {!toggleNavbar ? 
                <ul className='nav-buttons'>
                    <li className={isLogin ? 'extra-padd' : ''}>
                        <Link to='/CourseHome'>
                            Courses
                        </Link>
                    </li>
                    <li className={isLogin ? 'extra-padd' : ''}>
                        <Link to='/Event'>
                            Events
                        </Link>
                    </li>
                    {!isLogin && (
                        <>
                        <li>
                            <Link to='/SignIn'>
                                Login
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
                :
                <>
                    <div id='hamburger-icon' onClick={()=> {toggleMobileMenu()}}>
                        {!mobileMenuState ? 
                            <img src={HamburgerIcon} alt="hamburger icon"/>
                            :
                            <img src={Xmark} alt="xmark icon" />
                        }
                    </div>

                    {mobileMenuState && 
                        <ul className='mobile-nav-buttons'>
                            <li onClick={() => {toggleMobileMenu();}}>
                                <Link to='/CourseHome'>
                                    Courses
                                </Link>
                            </li>
                            <li onClick={() => {toggleMobileMenu();}}>
                                <Link to='/Event'>
                                    Events
                                </Link>
                            </li>
                            {!isLogin && (
                                <>
                                <li onClick={() => {toggleMobileMenu();}}>
                                    <Link to='/SignIn'>
                                        Login
                                    </Link>                                      
                                </li>
                                <li onClick={() => {toggleMobileMenu();}}>
                                    <Link to='/SignUp' className='signup-btn'>
                                        Sign up
                                    </Link>
                                </li>
                                </>
                            )}
                            {isLogin && (
                                <>
                                <li id='user-icon' onClick={() => {toggleMobileMenu();}}>
                                    <Link to='/Profile'>
                                        <img src={UserIcon} alt="user icon" />
                                    </Link>
                                </li> 
                                <li id='logout-icon' onClick={() => {toggleMobileMenu();}}>
                                    <Link to='/'>
                                        <img src={LogoutIcon} alt="user icon" onClick={handleSignOut}/>
                                    </Link>
                                </li>
                                </>
                            )}
                        </ul>
                    }

                    {mobileMenuState &&
                        <div className='overlay'></div>
                    }
                    
                </>    
            }
        </nav>
    )
}

export default Navbar;



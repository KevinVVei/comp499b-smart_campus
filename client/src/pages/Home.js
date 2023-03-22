import React from 'react';
import { Link } from 'react-router-dom';
import './Styles/Home.css';
import course from '../assets/images/course.jpg';
import event from '../assets/images/timetable.png';
import UW from '../assets/images/UW.jpg';

function Homepage() {
        return(
        <div className='home-page'>
            <img className='banner-image' src={require("../assets/images/campus.jpeg")} alt='uwindsor campus' />

            <div className='main-content'>
                <h2>Welcome to the University of Windsor Smart Campus</h2>
                
                <p className='text1'><br/>
                    Don't know what courses that your degree has? <br />
                    Don't know courses' details?<br />
                    Or don't know how to plan your study?<br />
                    Don't Worry! We will help you <Link to='/CourseHome'>HERE!</Link><br />
                </p>
                <img alt='course' src={course} className='image1' ></img>
                
                <img alt='Event' src={event}  className='image2'></img>
                <p  className='text2'>
                    Needing to set a reminder for something? <br />
                    Having a future plan? <br />
                    Looking for a place to put all these things? <br />
                    Check the <Link to='/Event'>Events page</Link>!  
                </p>

                <p className='text3'><br/><br/><br/>
                    Looking for more information about the university? <br />
                    Check the University <a href='https://www.uwindsor.ca/'>Website</a> !
                </p>
                <img alt='logo' src={UW}  className='image3'></img>
            </div>
        </div>
        )
}

export default Homepage
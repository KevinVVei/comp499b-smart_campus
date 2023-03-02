import React from 'react';
import {Link} from 'react-router-dom';
import './Styles/Home.css';
import course from '../assets/images/course.jpg';
import event from '../assets/images/timetable.png';
import UW from '../assets/images/UW.jpg';

function Homepage() {
        return(
        <div className='home-page'>
             
            <img className='banner-image' src={require("../assets/images/campus.jpeg")} alt='uwindsor campus' />

            <h2>Welcome to the University of Windsor Smart Campus</h2>

            <div className='main-content'>
                <h4 className='text1'>
                    Don't know what courses that your degree has? <br />
                    Don't know courses' details?<br />
                    Or don't know how to plan your study?<br />
                    Don't Worry! We will help you <Link to='/CourseHome'>HERE!</Link><br />
                </h4>
                <img alt='course' src={course} className='image1' ></img>

                <img alt='Event' src={event}  className='image2'></img>
                <h4  className='text2'>
                    Needing to set a reminder for something? <br />
                    Having a future plan? <br />
                    Looking for a place to put all these things? <br />
                    Check your <Link to='/Event'>Event table</Link> !  
                </h4>

                <h4  className='text3'>
                    Need more information from U of Win? <br />
                    Check the University <a href='https://www.uwindsor.ca/'>Website</a> !
                </h4>
                <img alt='logo' src={UW}  className='image3'></img>
            </div>
        </div>
        )
}

export default Homepage
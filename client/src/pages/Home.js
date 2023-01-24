import React from 'react';
import {Link} from 'react-router-dom';
import './Styles/Home.css';
import course from '../assets/images/course.jpg';
import event from '../assets/images/timetable.png';
import UW from '../assets/images/UW.jpg';

function Homepage() {
        return(
            <div className='home-page'>
             
                <h1 className='HomeTitle'>
                    Welcome to the UWin Smart Campus!
                </h1>
            
                <div className='TextLeft'>
                    <h1>
                        Don't know what courses that your degree has? <br />
                        Don't know courses' details?<br />
                        Or don't know how to plan your study?<br />
                        Don't Worry! We will help you <Link to='/CourseHome'>HERE!</Link><br />
                    </h1>
                    <img alt='course' src={course}></img>
                </div>

                <div className='TextRight'>
                    <img alt='Event' src={event}></img>
                    <h1>
                        Needing to set a reminder for something? <br />
                        Having a future plan? <br />
                        Looking for a place to put all these things? <br />
                        Check your <Link to='/Event'>Event table</Link> !  
                    </h1>
                </div>

                <div className='TextLeft'>
                    <h1>
                        Need more information from U of Win? <br />
                        Check the University <a href='https://www.uwindsor.ca/'>Website</a> !
                    </h1>
                    <img alt='logo' src={UW}></img>
                </div>

                <div className='Spaces'>

                </div>
            </div>
        )
}

export default Homepage
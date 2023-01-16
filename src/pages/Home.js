import React from 'react'
import './Home.css'
import backgroundImg from './UWin.jpg'
import course from './course.jpg'
import event from './timetable.png'
import UW from './UW.jpg'

export default class Homepage extends React.Component{
    render(){
        return(
            <div className='HomepageBackground'>
                <img className='BackImg' alt='BackImg' src={backgroundImg}></img>
                <h1 className='HomeTitle'>
                    Welcome to the UWin Smart Campus!
                </h1>
            
                <div className='TextLeft'>
                    <div className='TextL'>
                        Don't know what courses that your degree has? <br />
                        Don't know courses' details?<br />
                        Or don't know how to plan your study?<br />
                        Don't Worry! We will help you <a>HERE!</a><br />
                    </div>
                    <img className='PictureR' alt='course' src={course}></img>
                </div>

                <div className='TextRight'>
                    <img className='PictureL' alt='Event' src={event}></img>
                    <div className='TextR'>
                        Needing to set a reminder for something? <br />
                        Having a future plan? <br />
                        Looking for a place to put all these things? <br />
                        Check your <a>Event Table</a> !  
                    </div>
                </div>

                <div className='TextLeft'>
                    <div className='TextL'>
                        Need more information from U of Win? <br />
                        Check the University <a href='https://www.uwindsor.ca/'>Website</a> !
                    </div>
                    <img className='PictureR' alt='logo' src={UW}></img>
                </div>

                <div className='Spaces'>

                </div>
            </div>
        )

    }
}

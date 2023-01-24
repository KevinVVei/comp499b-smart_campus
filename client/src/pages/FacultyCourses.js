import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { useLocation } from 'react-router-dom';
import './Styles/FacultyCourses.css';

function FacultyCourses(props) {

    const [courseData, setCourseData] = useState([]);
    const [courseId, setCourseId] = useState();

    {/*this variable is used to store the state data passed from a link on the CourseHome page*/}
    const location = useLocation();

    {/*on first render this gets the data loaded from the api at the specified link and stores it into the courseData array*/}
    useEffect(() => {
        Axios.get('http://localhost:4000/api/courses').then(response => {
            setCourseData(response.data);
        });
    }, []);

    {/*this functions called to display the overlay of the popup and disable scrolling*/}
    function on(element) {
        setCourseId(element);
        document.getElementById("overlay").style.display = "block";
        document.body.classList.add('disable-scroll');
    };
    
    {/*this function is called to hide the overlay of the popup and ebable scrolling*/}
    function off() {
        document.getElementById("overlay").style.display = "none";
        document.body.classList.remove('disable-scroll');
    };
      
    return (
        <div className="CoursePage">
            <header>
                <h1 className="CoursePageTitle">Faculty of { location.state.name } Courses</h1> {/*sets the title to the passed faculty name*/}
            </header>

            {/*this div will start as hidden and then displayed to show the details of the course that was selected for more*/}
            <div id='overlay'>
                <div className='course-details'>
                        {courseData.filter(course => course.course_id === courseId).map(filteredCourse1 => (
                            <div key={filteredCourse1.course_id} id="detailed-summary">
                                <div>
                                    <h1>{filteredCourse1.course_id} : {filteredCourse1.course_name}</h1>
                                    <p>{filteredCourse1.course_summary}</p>
                                    <p><b>Prerequisites:</b> {filteredCourse1.course_prerequisites}</p>
                                    <p><b>Terms:</b> {filteredCourse1.course_schedule}</p>
                                    <p><b>Faculty:</b> {filteredCourse1.faculty}</p>

                                    <button onClick={() => off()}>Back</button>
                                </div>  
                            </div>
                        ))}      
                </div>
            </div>

            {/*displays all courses stored from the api*/}
            {courseData.filter(course => course.faculty === location.state.name).map(filteredCourse => {
                return (
                <div key={filteredCourse.course_id} id="summary">
                    <div>
                        <h2>{filteredCourse.course_id} : {filteredCourse.course_name}</h2>
                
                        <p>{filteredCourse.course_summary}</p><br />
                        
                        <button onClick={() => on(filteredCourse.course_id)}>More</button>
                    </div>  
                </div>
                );
            })}
        </div>
    )
}

export default FacultyCourses
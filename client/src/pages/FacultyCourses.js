import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { useLocation } from 'react-router-dom';
import './Styles/FacultyCourses.css';

function FacultyCourses(props) {

    const [courseData, setCourseData] = useState([]);
    const [courseId, setCourseId] = useState();

    const location = useLocation();

    useEffect(() => {
        Axios.get('http://localhost:4000/api/courses').then(response => {
            setCourseData(response.data);
        });
    }, []);

    function on(element) {
        setCourseId(element);
        document.getElementById("overlay").style.display = "block";
        document.body.classList.add('disable-scroll');
    };
    
    function off() {
        document.getElementById("overlay").style.display = "none";
        document.body.classList.remove('disable-scroll');
    };
      
    return (
        <div className="CoursePage">
            <header>
                <h1 className="CoursePageTitle">Faculty of { location.state.name } Courses</h1>
            </header>

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
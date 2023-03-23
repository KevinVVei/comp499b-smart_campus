import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import SearchIcon from '../assets/images/search-icon.svg';
import UpArrow from '../assets/images/up-arrow.svg';
import './Styles/CourseHome.css';

/*displays links to courses according to faculty*/
function CourseHome() {

    const [searchTerm, setSearchTerm] = useState();
    const [searched, setSearched] = useState(false);
    const [courses, setCourses] = useState([]);
    const [courseId, setCourseId] = useState();
    const [faculty, setFaculty] = useState('Education');
    const [error, setError] = useState(false);


    /*on first render this gets the data loaded from the api at the specified link and stores it into the courseData array*/
    useEffect(() => {
        Axios.get('http://localhost:4000/api/courses')
        .then(response => {
            setCourses(response.data);
        })
        .catch(err=>{
            console.log(err);
            setError(true);
        });
    }, []);

    const searchCourse = () => {
        setSearched(true);
    }

    const filterCourses = (e) => {
        setFaculty(e);
    }

    function on(element) {
        setCourseId(element);
        document.getElementById("overlay").style.display = "block";
        document.body.classList.add('disable-scroll');
    };

    /*this function is called to hide the overlay of the popup and ebable scrolling*/
    function off() {
        document.getElementById("overlay").style.display = "none";
        document.body.classList.remove('disable-scroll');
    };

    return (
        <div className="CourseHomePage">  
            <img src={require('../assets/images/uwindsor.jpeg')} alt='uwindsor banner' />

            <div className='course-search'>
                <div className='c-dropdown'>
                    <button className='c-filter-btn'>Filter</button>
                    <div className="c-dropdown-content">
                        <span onClick={()=> {filterCourses('AHSS')}}>AHSS</span>
                        <span onClick={()=> {filterCourses('Education')}}>Education</span>
                        <span onClick={()=> {filterCourses('Engineering')}}>Engineering</span>
                        <span onClick={()=> {filterCourses('Graduate')}}>Graduate</span>
                        <span onClick={()=> {filterCourses('Human Kinetics')}}>Human Kinetics</span>
                        <span onClick={()=> {filterCourses('Law')}}>Law</span>
                        <span onClick={()=> {filterCourses('Nursing')}}>Nursing</span>
                        <span onClick={()=> {filterCourses('Business')}}>Business</span>
                        <span onClick={()=> {filterCourses('Computer Science')}}>Computer Science</span>
                    </div>
                </div>

                <input id='c-search-input' type='text' placeholder='Search courses...' onChange={(e)=> {setSearchTerm(e.target.value)}} onKeyDown={(e) => {if (e.key === 'Enter') {searchCourse()}}}/>
                <button id='c-search-btn' type='button' onClick={()=> {searchCourse()}}><img src={SearchIcon} alt='search icon' /></button>
                
                <Link to='/Guidance'>
                    <button className='guidance-btn'>Guidance</button>
                </Link>
            </div>

        {!error ?
            <span>
            {/*this div will start as hidden and then displayed to show the details of the course that was selected for more*/}
            <div id='overlay'>
                <div className='course-details'>
                    {courses.filter(course => course.course_id === courseId).map(filteredCourse1 => (
                        <div>
                            <h1>{filteredCourse1.course_id} : {filteredCourse1.course_name}</h1>

                            <div key={filteredCourse1.course_id} id="detailed-summary">
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
            <div className='courses'>
                {/*displays all courses stored from the api*/}
                { !searched ? 
                <>
                {courses.filter(course => course.faculty === faculty).map(filteredCourse => {
                    return (
                        <div key={filteredCourse.course_id} id="summary">
                            <h2>{filteredCourse.course_id} : {filteredCourse.course_name}</h2>
                            <div>
                                <p>{filteredCourse.course_summary}</p><br />
                                
                                <button onClick={() => on(filteredCourse.course_id)}>More</button>
                            </div>  
                        </div>
                    );
                })}
                </>
                :
                <>
                    {courses.filter(course => course.course_name.toLowerCase().includes(searchTerm.toLowerCase())).map(filteredCourse => {
                        return (
                            <div key={filteredCourse.course_id} id="summary">
                                <h2>{filteredCourse.course_id} : {filteredCourse.course_name}</h2>
                                <div>
                                    <p>{filteredCourse.course_summary}</p><br />
                                    
                                    <button onClick={() => on(filteredCourse.course_id)}>More</button>
                                </div>  
                            </div>
                        );
                    })}
                </>
                }
                <a href='#top'><img src={UpArrow} alt='arrow pointing up' /></a>
            </div>
            </span>
            :
                <h2>Uh Oh, something went wrong on our end!</h2>
            }
        </div>
    )
}

export default CourseHome

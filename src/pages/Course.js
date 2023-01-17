import React from 'react';
import { useParams } from 'react-router-dom';
import LectureDetail from '../components/LectureDetail';
import {Link} from 'react-router-dom';
import courses from '../courses';
import './Styles/Course.css';

function Course() {
    const {courseId} = useParams()
    const course = courses.find(course => course.id === parseInt(courseId))
    return(
        <div className="course-page">
            <header>
                <h1>
                    {course.title}
                </h1>
                <p>
                    {course.description}
                </p>

                <Link to ={'/CourseHome'}>
                    Back to courses
                </Link>

                <Link id="button-primary-icon" to={`/coursehome/courses/${courseId}/lectures/${course.lectures[0].id}`}>
                        More info
                </Link>
            </header>
        <div id='lecture-detail'>
        {course.lectures.map((lecture, index) => (
            <LectureDetail
                courseId = {courseId}
                lecture={lecture}
                key={lecture.id}/>
                ))
        }
        </div>
    </div>
       
    )
}
export default Course
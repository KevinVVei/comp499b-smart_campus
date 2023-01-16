import { useParams } from 'react-router-dom';
import LectureDetail from '../components/LectureDetail';
import {Link} from 'react-router-dom';
import courses from '../courses';

function Course() {
    const {courseId} = useParams()
    const course = courses.find(course => course.id === parseInt(courseId))
    return(
        <div className="Course page">
            <header>
                <p>
                    <Link to ={'/coursehome'}>
                        Back to courses
                    </Link>
                </p>
                <h1>
                    {course.title}
                </h1>
                <p>
                    {course.description}
                </p>
                <Link className="button primary icon" to={`/coursehome/courses/${courseId}/lectures/${course.lectures[0].id}`}>
                        More info
                </Link>
            </header>
        <div>
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
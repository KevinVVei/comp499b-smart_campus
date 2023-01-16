import { Link } from 'react-router-dom'

function LectureDetail(props) {
    return(
        <section key={props.lecture.id} className="detail">
            <div>
                <div className="title">
                    <h2>
                        <Link className="no-underline cursor-pointer" to={'/coursehome/courses/' + props.courseId + '/lectures/' + props.lecture.id}>
                            {props.lecture.title}
                        </Link>
                    </h2>
                </div>
            </div>
            <p>
                <Link className="no-underline cursor-pointer" to ={'/coursehome/courses/' + props.courseId + '/lectures/' + props.lecture.id}>
                {props.lecture.description}
                </Link>
            </p>
        </section>
    )
}
export default LectureDetail
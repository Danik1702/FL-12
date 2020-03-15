import React from 'react';
import Course from './Course';
import { connect } from 'react-redux';
import { fetchCourses, deleteCourse } from '../actions';


class CoursesList extends React.Component {
    onDelCourseClick = (id) => {
        document.querySelectorAll('.dropdown-content')[id].classList.toggle('hide');
        this.props.deleteCourse(id);
    };

    renderCourses = () => {
        return this.props.courses.map((course, index) => {
            return <Course 
                        key={index}
                        date={course.date}
                        name={course.name}
                        description={course.description}
                        duration={course.duration}
                        delete={this.onDelCourseClick}
                    />
        });
    };

    render() {
        return (
            <div>
                {this.renderCourses()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        courses: state.courses
    };
};

export default connect(mapStateToProps, {
    fetchCourses,
    deleteCourse
})(CoursesList);

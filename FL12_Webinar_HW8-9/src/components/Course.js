import React from 'react';
import { Link } from 'react-router-dom';

class Course extends React.Component {
    state = { currentElement: '' };

    onDropdownClick = (e) => {
        e.target.nextSibling.classList.toggle('hide');
        this.setState({ currentElement: e.target.parentElement.parentElement });
    };

    handleDeleteClick = (e) => {
        this.props.delete(Array.prototype.indexOf.call(document.querySelectorAll('.course'), this.state.currentElement));
    };

    render() {
        return (
            <div className="course">
                <p className="course-text course-date">{this.props.date}</p>
                <p className="course-name-text course-name">{this.props.name}</p>
                <p className="course-text course-description">{this.props.description}</p> 
                <p className="course-text course-duration">{this.props.duration}</p>    
                <div className="dropdown">
                    <span className="dropdown-icon course-text" onClick={this.onDropdownClick}>•••</span>
                    <div className="dropdown-content hide">
                        <Link 
                            to={`/editCourse/${Array.prototype.indexOf.call(document.querySelectorAll('.course'), this.state.currentElement)}`} 
                            className="dropdown-button edit-button course-text"
                        >
                            Edit
                        </Link>
                        <span 
                            className="dropdown-button delete-button course-text"
                            onClick={this.handleDeleteClick}
                        >
                            Delete
                        </span>
                    </div>
                </div>        
            </div>
        );
    }
}

export default Course;
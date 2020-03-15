import React from 'react';
import { connect } from 'react-redux';
import { searchCourse } from '../../actions';

class Search extends React.Component {
    state = {courses: ''};

    componentDidMount() {
        this.setState({ courses: this.props.courses })
    }

    handleSearch = (e) => {
        const coursesCopy = this.state.courses;
        this.props.searchCourse(coursesCopy.filter(course => {
            const courseName = course.name.toLowerCase();
            const searchText = e.target.value.toLowerCase();

            if (courseName.includes(searchText)) {
                return true;
            } 

            return false;
        }));
    }

    render() {
        return (
            <input 
                type="text" 
                className="search-form header-search" 
                placeholder="Search"
                onChange={this.handleSearch}
            />
        );
    }
};

const mapStateToProps = (state) => {
    return {
        courses: state.courses
    };
};

export default connect(mapStateToProps, { searchCourse })(Search);
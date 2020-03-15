import React from 'react';
import Form from './Form';
import { connect } from 'react-redux';
import { editCourse } from '../actions';
import history from '../history';

class EditCourse extends React.Component {
    handleFormEdit = (formValues) => {
        this.props.editCourse(formValues, this.props.match.params.id);
        history.push('/');
    };

    render() {
        return <Form 
                    handleFormEdit={this.handleFormEdit} 
                    values={this.props.course}
                />;
    };
}

const mapStateToProps = (state, ownProps) => {
    return {
        course: state.courses[ownProps.match.params.id]
    }
};

export default connect(mapStateToProps, { editCourse })(EditCourse);
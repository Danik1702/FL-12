import React from 'react';
import Form from './Form';
import { connect } from 'react-redux';
import { createCourse } from '../actions';
import history from '../history';

class CreateCourse extends React.Component {

    handleFormSubmit = (formValues) => {
        if (formValues.date && formValues.name && formValues.description && formValues.duration) {
            this.props.createCourse(formValues);
            history.push('/');
        }
    }

    render() {
        return <Form handleFormSubmit={this.handleFormSubmit}/>;
    }
}

export default connect(null, { createCourse })(CreateCourse);
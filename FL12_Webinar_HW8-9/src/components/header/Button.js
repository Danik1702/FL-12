import React from 'react';
import { Link } from 'react-router-dom';

const Button = (props) => {
    return (
        <Link to="/addCourse" className="button button-container w20p">
            <span className="button-text va">Add course</span>
        </Link>
    );
};

export default Button;
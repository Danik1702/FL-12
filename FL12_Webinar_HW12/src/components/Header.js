import React from 'react';
import '../styles.css';

class Header extends React.Component {

    renderButtons = () => {
        return (
            <div className="header">
                <button className="button" onClick={this.props.employees}>All employees</button>
                <button className="button" onClick={this.props.units}>All units. Average salary in unit</button>
                <button className="button" onClick={this.props.warnings}>Warning! Employees with salary less than 600</button>
            </div>
        );  
    }

    render() {
        return this.renderButtons();
    }
}

export default Header;
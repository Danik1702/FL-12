import React from 'react';
import { Link } from 'react-router-dom';

class Form extends React.Component {
    state = { 
        date: '',
        name: '',
        description: '',
        duration: '',
        author: ''
    };

    componentDidMount() {
        if (this.props.values) {
            this.setState({...this.props.values});
        }
    }

    renderFormHeader = () => {
        return (
            <div className="form-header">
                <h2 className="form-header__text">New course</h2>
            </div>
        );
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        if (this.props.handleFormSubmit) {
            this.props.handleFormSubmit(this.state);
        } else if (this.props.handleFormEdit) {
            this.props.handleFormEdit(this.state);
        }
        
    }

    renderForm = () => {
        return (
            <form onSubmit={this.onFormSubmit}>
                <div className="mb20">
                    <label>Title*</label><br />
                    <input 
                        type="text" 
                        className="search-form full-width border-gray" 
                        value={this.state.name}
                        onChange={(e) => this.setState({ name: e.target.value })}
                    />
                </div>
                <div className="mb20">
                    <label>Description*</label><br />
                    <textarea 
                        className="search-form full-width border-gray form-textarea" 
                        value={this.state.description}
                        onChange={(e) => this.setState({ description: e.target.value })}
                    />
                </div>
                <div className="form-two-rows mb20">
                    <div className="input-container">
                        <div className="mb20">
                            <label>Duration*</label><br />
                            <input 
                                type="text" 
                                className="search-form full-width border-gray" 
                                value={this.state.duration}
                                onChange={(e) => this.setState({ duration: e.target.value })}
                            />
                        </div>
                        <div className="mb20">
                            <label>Authors*</label><br />
                            <input 
                                type="text" 
                                className="search-form full-width border-gray" 
                                value={this.state.author}
                                onChange={(e) => this.setState({ author: e.target.value })}    
                            />
                        </div>
                    </div>
                    <div className="date-input-container mb20">
                        <div>
                            <label>Date*</label><br />
                            <input 
                                type="date" 
                                value={this.state.date}
                                onChange={(e) => this.setState({ date: e.target.value })}
                            />
                        </div>
                    </div>
                </div>
                <div className="submit-container mb20">
                    <button type="submit" className="button form-button submit-button">
                        <span className="button-text">Save</span>
                    </button>
                    <Link to="/" className="button-cancel form-button button-container">
                        <span className="va cancel-button-text">Cancel</span>
                    </Link>
                </div>
                
            </form>
        );
    }

    render() {
        return (
            <div className="form-wrapper">
                <div className="form-container">
                    {this.renderFormHeader()}
                    {this.renderForm()}
                </div>
            </div>
        );
    }
}

export default Form;
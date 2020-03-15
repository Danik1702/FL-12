import { combineReducers } from 'redux';
import courseReducer from './coursesReducer';

export default combineReducers({
    courses: courseReducer
});
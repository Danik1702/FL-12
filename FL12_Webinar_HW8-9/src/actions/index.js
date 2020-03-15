import {
    FETCH_COURSES,
    CREATE_COURSE,
    EDIT_COURSE,
    DELETE_COURSE,
    SEARCH_COURSE
} from './types'

export const fetchCourses = () => {
    return {
        type: FETCH_COURSES
    };
};

export const createCourse = (courseInfo) => {
    return {
        type: CREATE_COURSE,
        payload: courseInfo
    };
};

export const deleteCourse = (id) => {
    return {
        type: DELETE_COURSE,
        payload: id
    };
};

export const editCourse = (courseInfo, id) => {
    return {
        type: EDIT_COURSE,
        payload: { courseInfo, id }
    };
};

export const searchCourse = (searchString) => {
    return {
        type: SEARCH_COURSE,
        payload: searchString
    };
};
import {
    FETCH_COURSES,
    CREATE_COURSE,
    EDIT_COURSE,
    DELETE_COURSE,
    SEARCH_COURSE
} from '../actions/types';

const defaultState = [
    {
        'date': '2018-02-18',
        'name': 'Prerequisites',
        'description': 'Webpack, AngularCLI, TypeScript',
        'duration': '01h 34min',
        'author': 'Taras Stepanenko'
    },
    {
        'date': '2018-02-01',
        'name': 'Components',
        'description': 'Components, Lifecycle, template DSL and data-binding, Custom components',
        'duration': '01h 34min',
        'author': 'Taras Stepanenko'
    },
    {
        'date': '2018-01-15',
        'name': 'Directives + Pipes',
        'description': 'Directives, types of directives, built-in directives, custom directive, pipes, built-in pipes, custom pipes, async pipe',
        'duration': '01h 34min',
        'author': 'Taras Stepanenko'
    },
    {
        'date': '2017-12-17',
        'name': 'Modules & Services',
        'description': 'Services, DI, modules, lazy loading',
        'duration': '01h 34min',
        'author': 'Taras Stepanenko'
    },
    {
        'date': '2017-11-29',
        'name': 'Change detection',
        'description': 'Zone js, flow, Immutable date structure, push strategy',
        'duration': '01h 34min',
        'author': 'Taras Stepanenko'
    },
    {
        'date': '2017-10-03',
        'name': 'Roution',
        'description': 'Routing, Lazy and preloading, CanActivate, CanDeactivate',
        'duration': '01h 34min',
        'author': 'Taras Stepanenko'
    }
];

export default (state = defaultState, action) => {
    switch (action.type) {
        case FETCH_COURSES: 
            return [...state];
        case CREATE_COURSE:
            return [...state, action.payload ];
        case DELETE_COURSE: 
            state.splice(action.payload, 1);
            return [...state];
        case EDIT_COURSE:
            state.splice(action.payload.id, 1, action.payload.courseInfo);
            return [...state];
        case SEARCH_COURSE:
            return [...action.payload];
        default: 
            return state;
    }
};
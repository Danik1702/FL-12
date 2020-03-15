import React from 'react';
import { Router, Route } from 'react-router-dom';
import Header from './header/Header';
import CreateCourse from './CreateCourse';
import CoursesList from './CoursesList';
import EditCourse from './EditCourse';
import history from '../history';
import '../css/App.css';

function App() {
  return (
    <div>
      <Router history={history}>
        <div className="App">
          <Route path="/" exact component={Header} />
          <Route path="/" exact component={CoursesList} />
          <Route path="/addCourse" exact component={CreateCourse} />
          <Route path="/editCourse/:id" exact component={EditCourse} />
        </div>
      </Router>
    </div>
  );
}

export default App;

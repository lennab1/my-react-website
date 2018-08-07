import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import * as routes from '../../Constants/routes';
import HomePage from '../Home/Home';
import AboutPage from '../About/About';
import ProjectsPage from '../Projects/Projects';
import NavBar from '../NavBar/NavBar';

class App extends Component {
  render() {
    return (
        <Router>
          <div className="App">
            <NavBar />
            <Route
              exact path={routes.HOME}
              component={() => <HomePage />}
            />
            <Route
              exact path={routes.ABOUT}
              component={() => <AboutPage />}
            />
            <Route
              exact path={routes.PROJECTS}
              component={() => <ProjectsPage />}
            />
          </div>
        </Router>
    );
  }
}

export default App;

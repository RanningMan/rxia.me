import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

import Resume from './components/MyWork/Resume';
import FrontPage from './components/FrontPage/FrontPage';
import Life from './components/MyLife/Life';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/'>
                    <FrontPage />
                </Route>
                <Route exact path='/mywork'>
                    <Resume />
                </Route>
                <Route exact path='/mylife'>
                    <Life />
                </Route>
            </Switch>
        </Router>
      );
};

export default App;
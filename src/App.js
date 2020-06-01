import React from 'react';

import Resume from './components/MyWork/Resume';
import classes from './App.module.css';

const App = () => {
    return (
        <div className={classes.App}>
            <Resume />
        </div>
      );
};

export default App;
import React from 'react';

import classes from './AboutMe.module.css';

const aboutMe = (props) => (
    <div className={classes.AboutMe}>
        <h3>About Me</h3>
        <p>{props.content}</p>
    </div>
);

export default aboutMe;
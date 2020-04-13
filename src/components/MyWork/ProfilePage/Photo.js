import React from 'react';

import classes from './Photo.module.css'

const photo = (props) => (
    <img className={classes.Photo} src={props.src} alt='Ran Xia'></img>
);

export default photo;
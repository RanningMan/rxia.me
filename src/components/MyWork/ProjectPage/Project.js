import React from 'react';

import Card from 'react-bootstrap/Card';

import classes from './Project.module.css';

const project = (props) => (
    <Card className={classes.Project} onClick={props.clicked}>
        <img className={classes.ProjectImg} variant='top' src={props.src} alt={props.name} />
        <Card.ImgOverlay className={classes.Overlay}>
            <h4>{props.name}</h4>
            <hr className={classes.Line} />
            <p className={classes.Description}>{props.description}</p>
            <div className={classes.Tags}>
                {
                    props.tags.map((tag, idx) => <div key={tag + idx} className={classes.Tag} variant="info">{tag}</div>)
                }
            </div>
        </Card.ImgOverlay>
    </Card>
);

export default project;
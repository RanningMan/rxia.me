import React from 'react';
import { NavLink } from 'react-router-dom';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import classes from './Background.module.css';
import LifeBackground from '../../../asset/cartoon-frontpage.jpg';
import ResumeBackground from '../../../asset/Flash-left.png';

const Background = () => {

    let leftWrapperClass = `${classes.Wrapper} ${classes.LeftWrapper}`;
    let rightWrapperClass = `${classes.Wrapper} ${classes.rightWrapper}`;

    return (
        <Row className={classes.BackgroundWrapper}>
            <Col className={leftWrapperClass}>
                <NavLink to='mywork'>
                    <img src={ResumeBackground} alt='' className={classes.Image} />
                    <div className={classes.NavLink}></div>
                </NavLink>
            </Col>
            <Col className={rightWrapperClass}>
                <NavLink to='mylife'>
                    <img src={LifeBackground} alt='' className={classes.Image} />
                    <div className={classes.NavLink}></div>
                </NavLink>
            </Col>
        </Row>
    )
};

export default Background;
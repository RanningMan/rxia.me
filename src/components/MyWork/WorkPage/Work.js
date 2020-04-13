import React, { useState } from 'react';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Accordion  from 'react-bootstrap/Accordion';

import classes from './Work.module.css';

import arrow from '../../../asset/arrow_up_light.png';

const WorkItem = (props) => {

    const [toggled, setToggle] = useState(false);

    const toggleHandler = () => {
        setToggle(!toggled);
    }
    
    return (
        <div className={classes.FirstLevelBullet}>
            <Accordion.Toggle as='div' eventKey={props.eventKey} className={classes.Toggle} onClick={toggleHandler}>
                <h4><img src={arrow} alt=">" className={toggled ? classes.BulletPointerToggled : classes.BulletPointerUntoggled}/>{props.bullet.content}</h4>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={props.eventKey}>
                <ul>{props.bullet.secondLevel.map((content, idx) => <li key={idx}>{content}</li>)}</ul>
            </Accordion.Collapse>
        </div>
    );
}

const Work = (props) => {

    return (
        <Row className={classes.Work}>
            <Col className={classes.Left} xs={5} sm={5} md={5} lg={5} xl={5}>
                <h4>{props.timeline}</h4>
                <div><strong>{props.company}</strong></div>
                <div><i>{props.jobTitle}</i></div>
            </Col>
            <Col className={classes.Middle} xs={2} sm={2} md={2} lg={2} xl={2}>
                <img className={classes.Icon} src={props.icon} alt="O" />
                <div className={classes.Line}></div>
            </Col>
            <Col xs={5} sm={5} md={5} lg={5} xl={5}>
                <Accordion>
                {
                    props.firstLevelBullets.map((bullet, idx) => <WorkItem key={idx} bullet={bullet} eventKey={idx} />)
                }
                </Accordion>
            </Col>
        </Row>
    );
};

export default Work;
import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import Name from './Name/Name';
import Background from './Background/Background';
import classes from './FrontPage.module.css';

const FrontPage = () => {

    const [isMouseInLeft, setIsMouseInLeft] = useState(null);

    const onMouseMove = (e) => {
        if(isMouseInLeft) {
            if(e.screenX < window.innerWidth * 0.54) {
                setIsMouseInLeft(true);
            }
            else {
                setIsMouseInLeft(false);
            }
        }
        else {
            if(e.screenX < window.innerWidth * 0.45) {
                setIsMouseInLeft(true);
            }
            else {
                setIsMouseInLeft(false);
            }
        }
    }
    
    return (
        <Container fluid onMouseMove={onMouseMove}>
            <Row >
                <Col />
                <Col className={classes.NameWrapper}><Name isLeft={isMouseInLeft} /></Col>
                <Col />
            </Row>
            <Background isLeft={isMouseInLeft} />
        </Container>
    );
}

export default FrontPage;
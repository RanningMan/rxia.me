import React from 'react';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import NameTag from './NameTag';
import classes from './FirstPage.module.css';
import Background from '../../../asset/Flash-left.png';


const firstPage = () => (
    <>
        <img src={Background} alt='' className={classes.Image} />
        <Row className={classes.FirstPage}>
            <Col></Col>
            <Col>
                <NameTag></NameTag>
            </Col>
            <Col></Col>
        </Row>
    </>
);

export default firstPage;
import React from 'react';

import Row from 'react-bootstrap/Row';

import classes from './FootPage.module.css';

const foot = () => (
    <Row className={classes.FootPage}>
        <p className={classes.FootTag}>@2020 by Ran Xia</p>
    </Row>
);

export default foot;
import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import classes from './OtherPage.module.css';

const otherPage = (props) => {

    let style = null;
    let fontColor = null;
    let lineColor = null;
    if(props.backgroundStyle === 'resume-light') {
        style = classes.ResumeLight;
        fontColor = classes.ResumeFontColor;
        lineColor = classes.ResumeLineLight;
    }
    else if(props.backgroundStyle === 'resume-dark') {
        style = classes.ResumeDark;
        fontColor = classes.ResumeFontColor;
        lineColor = classes.ResumeLineDark;
    }

    return (
        <Row md={10} xl={10} className={style}>
            <Col></Col>
            <Col className={classes.OtherPage} md={8} xl={6}>
                <h1 className={`${fontColor} ${classes.OtherPageTitle}`}>{props.title}</h1>
                <p className={classes.Qoute}>{props.qoute}</p>
                <hr className={`${lineColor} ${classes.Line}`} />
                <React.Fragment>
                    {props.children}
                </React.Fragment>
            </Col>
            <Col></Col>
        </Row>
    );
}

export default otherPage;
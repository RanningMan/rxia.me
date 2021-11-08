import React, { useContext } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import classes from './OtherPage.module.css';
import ThemeContext from '../components/MyWork/Theme/ThemeContext';
import ThemeType from '../components/MyWork/Theme/ThemeType';
import { cloudyWeather } from '../components/MyWork/Theme/ThemeHelper';

const OtherPage = (props) => {

    const themeContext = useContext(ThemeContext);
    const currentTheme = themeContext.themeStyle;
    const weather = themeContext.weather;
    const weatherTheme = localStorage.getItem('preferredTheme') === ThemeType.WEATHER;

    const themeStyles = {
        ResumeLight: {
            backgroundColor: currentTheme.secondDominant,
            color: weatherTheme && cloudyWeather(weather) ? 'white' : currentTheme.lastDominant
        },
        ResumeDark: {
            backgroundColor: currentTheme.thirdDominant,
            color: currentTheme.secondDominant
        },
        ResumeFontColor: {
            color: currentTheme.dominant
        },
        ResumeLineLight: {
            borderColor: currentTheme.lastDominant
        },
        ResumeLineDark: {
            borderColor: currentTheme.secondDominant
        }
    }

    let style = null;
    let fontColor = null;
    let lineColor = null;
    if(props.backgroundStyle === 'resume-light') {
        style = themeStyles.ResumeLight;
        fontColor = themeStyles.ResumeFontColor;
        lineColor = themeStyles.ResumeLineLight;
    }
    else if(props.backgroundStyle === 'resume-dark') {
        style = themeStyles.ResumeDark;
        fontColor = themeStyles.ResumeFontColor;
        lineColor = themeStyles.ResumeLineDark;
    }

    return (
        <Row md={10} xl={10} style={style}>
            <Col></Col>
            <Col className={classes.OtherPage} md={8} xl={6}>
                <h1 className={classes.OtherPageTitle} style={fontColor}>{props.title}</h1>
                <p className={classes.Qoute}>{props.qoute}</p>
                <hr className={classes.Line} style={lineColor} />
                <React.Fragment>
                    {props.children}
                </React.Fragment>
            </Col>
            <Col></Col>
        </Row>
    );
}

export default OtherPage;
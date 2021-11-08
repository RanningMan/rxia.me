import React, { useContext } from 'react';

import Card from 'react-bootstrap/Card';
import ThemeContext from '../Theme/ThemeContext';
import WeatherEnum from '../Theme/WeatherEnum';
import ThemeType from '../Theme/ThemeType';

import classes from './Project.module.css';

const Project = (props) => {

    const themeContext = useContext(ThemeContext);
    const currentTheme = themeContext.themeStyle;
    const weather = themeContext.weather;
    const weatherTheme = localStorage.getItem('preferredTheme') === ThemeType.WEATHER;

    const themeStyle = {
        ProjectImg: {
            borderColor: currentTheme.secondDominant
        },
        Overlay: {
            color: weatherTheme && weather === WeatherEnum.Sunny ? currentTheme.lastDominant : currentTheme.secondDominant,
            backgroundColor: currentTheme.dominant,
            opacity: '0.9'
        },
        Line: {
            borderColor: currentTheme.secondDominant
        },
        Body: {
            color: currentTheme.secondDominant,
            backgroundColor: currentTheme.dominant,
            opacity: '0.9'
        }
    }

    return (
        (window.innerWidth > 767 && navigator.userAgent.match(/iPad/i) === null) ?
        <Card className={classes.Project} onClick={props.clicked}>
            <img className={classes.ProjectImg} variant='top' src={props.src} alt={props.name} style={themeStyle.ProjectImg} />
            <Card.ImgOverlay className={classes.Overlay} style={themeStyle.Overlay}>
                <h4>{props.name}</h4>
                <hr className={classes.Line} style={themeStyle.Line}/>
                <p className={classes.Description}>{props.description}</p>
                <div className={classes.Tags}>
                    {
                        props.tags.map((tag, idx) => <div key={tag + idx} className={classes.Tag} variant="info">{tag}</div>)
                    }
                </div>
            </Card.ImgOverlay>
        </Card> :
        <Card className={classes.Project} onClick={props.clicked}>
            <img className={classes.ProjectImg} variant='top' src={props.src} alt={props.name} style={themeStyle.ProjectImg}/>
            <Card.Body className={classes.Body} style={themeStyle.Body}>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text as='div'>
                    <p className={classes.Description}>{props.description}</p>
                    <div className={classes.Tags}>
                        {
                            props.tags.map((tag, idx) => <div key={tag + idx} className={classes.Tag} variant="info">{tag}</div>)
                        }
                    </div>
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default Project;
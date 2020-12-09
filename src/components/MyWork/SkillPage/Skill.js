import React, { useContext } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

import ThemeContext from '../Theme/ThemeContext';
import classes from './Skill.module.css';
import Star from './Star';

const Skill = (props) => {

    const currentTheme = useContext(ThemeContext).themeStyle;

    const themeStyles = {
        Borderless: {
            backgroundColor: currentTheme.thirdDominant
        },
        Skill: {
            backgroundColor: currentTheme.thirdDominant
        }
    };

    let starList = new Array(props.starLevel).fill(true);
    while(starList.length < 5) {
        starList.push(false);
    }

    return (
        <ListGroup.Item key={props.name} className={classes.Borderless} style={themeStyles.Borderless}>
            <div className={classes.Skill} style={themeStyles.Skill}>
                <div className={classes.Name}>{props.name}</div>
                <div className={classes.StarList}>
                {
                    starList.map((star, index) => star ? 
                    <Star className={classes.Star} color={currentTheme.dominant} key={`0${index}`} /> : 
                    <Star className={`${classes.Star} ${classes.Starfalse}`} color={currentTheme.dominant} key={`1${index}`}/>)
                }
                </div>
            </div>
        </ListGroup.Item>
    )
};

export default Skill;
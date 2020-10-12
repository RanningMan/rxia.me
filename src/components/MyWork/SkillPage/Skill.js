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

    const StarTrue = <Star className={classes.Star} color={currentTheme.dominant} />;
    const StarFalse = <Star className={`${classes.Star} ${classes.Starfalse}`} color={currentTheme.dominant} />;

    return (
        <ListGroup.Item key={props.name} className={classes.Borderless} style={themeStyles.Borderless}>
            <div className={classes.Skill} style={themeStyles.Skill}>
                <div className={classes.Name}>{props.name}</div>
                <div className={classes.StarList}>
                {
                    starList.map((star) => star ? StarTrue : StarFalse)
                }
                </div>
            </div>
        </ListGroup.Item>
    )
};

export default Skill;
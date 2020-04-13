import React from 'react';

import StarImg from '../../../asset/transparentStar.png';
import classes from './Skill.module.css';

const skill = (props) => {

    let starList = new Array(props.starLevel).fill(true);
    while(starList.length < 5) {
        starList.push(false);
    }

    return (
        <div className={classes.Skill}>
            <div className={classes.Name}>{props.name}</div>
            <div className={classes.StarList}>
            {
                starList.map((star, index) => star ? <img key={index} src={StarImg} alt='*' /> : <img key={index} src={StarImg} alt='^' className={classes.Starfalse} />)
            }
            </div>
        </div>
    )
};

export default skill;
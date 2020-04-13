import React from 'react';

import classes from './NameTag.module.css';
import separater from '../../../asset/life-separate.png';
import NameBlock from '../../../hoc/NameBlock';

const NameTag = (props) => (
    <NameBlock color={classes.NameColor} isFrontPage={props.isFrontPage}>
        <div className={classes.Tag}>
            <span>Reader</span>
            <img className={classes.Separater} src={separater} alt=' * '/>
            <span>Traveler</span>
            <img className={classes.Separater} src={separater} alt=' * '/>
            <span>Thinker</span>
        </div>
    </NameBlock>
);

export default NameTag;
import React from 'react';

import classes from './NameBlock.module.css';

const NameBlock = (props) => {
    return (
        <div className={classes.NameTag}>
            <div className={classes.Name} style={props.color}>Ran XIA</div>
            <hr className={classes.Line} style={props.color} />
            {props.children}
        </div>
    );
}

export default NameBlock;
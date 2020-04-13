import React from 'react';

import classes from './NameBlock.module.css';

const NameBlock = (props) => {

    let linkStyle = props.isFrontPage ? `${props.color} ${classes.FrontName}` : `${props.color} ${classes.Name}`;
    
    const clickHandler = () => {
        if(!props.isFrontPage)
            window.location.href = '/';
    }

    return (
        <div className={classes.NameTag}>
            <div className={linkStyle} onClick={clickHandler}>Ran XIA</div>
            <hr className={`${props.color} ${classes.Line}`} />
            {props.children}
        </div>
    );
}

export default NameBlock;
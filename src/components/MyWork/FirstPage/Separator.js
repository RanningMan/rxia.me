import React from 'react';

const styles = {
    Separater: {
        height: '1rem',
        width: '1rem',
        margin: 'auto 0.05rem',
        marginTop: '0.4rem'
    }
}

const Separator = (props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1000 1000" style={styles.Separater}>
            <path fill={props.color} d="M496.2,10L255.5,499.5h185.9L212.5,990l568.2-667.6H552.2L787.5,10H496.2z"/>
        </svg>
    )
};

export default Separator;
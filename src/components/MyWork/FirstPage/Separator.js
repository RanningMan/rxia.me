import React from 'react';

const styles = {
    Separater: {
        height: '1rem',
        width: '1rem',
        margin: 'auto 0.05rem'
    }
}

const Separator = (props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 512" style={styles.Separater}>
            <path fill={props.color} d="M400.388,175.787c-1.707-3.413-4.267-5.12-7.68-5.12H292.015L391.855,12.8c1.707-2.56,1.707-5.973,0-8.533
                S387.588,0,384.175,0H247.642c-3.413,0-5.973,1.707-7.68,4.267l-128,256c-1.707,2.56-1.707,5.973,0,8.533
                c1.707,2.56,5.12,4.267,7.68,4.267h87.893l-95.573,227.84c-1.707,3.413,0,7.68,3.413,10.24c0.853,0.853,2.56,0.853,4.267,0.853
                c2.56,0,5.12-0.853,6.827-2.56l273.067-324.267C401.242,182.613,402.095,179.2z"/>
        </svg>
    )
};

export default Separator;
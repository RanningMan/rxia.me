import React from 'react';

import NameBlock from '../../../hoc/NameBlock';
import LeftTags from '../../MyWork/FirstPage/NameTag';
import RightTags from '../../MyLife/FirstPage/NameTag';

const Name = (props) => {

    let tags = <NameBlock isFrontPage />
    
    if (props.isLeft) {
        tags = <LeftTags isFrontPage />;
    }
    else {
        tags = <RightTags isFrontPage />;
    }

    return (
        <>
            {tags}
        </>
    );
};

export default Name;
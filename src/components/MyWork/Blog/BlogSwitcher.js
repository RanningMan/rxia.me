import React, { useState } from 'react';

import classes from './BlogSwitcher.module.css';

import Blog from '../../../asset/blogger.png';
import B from '../../../asset/bloggerB.png';

const BlogSwitcher = () => {
    const [hover, setHover] = useState(false);

    return <a className={classes.Blog} 
              href='https://rxia.blog/'
              onMouseOver={() => setHover(true)} 
              onMouseLeave={() => setHover(false)}>
                  <img src={hover ? Blog : B} alt="check out my blogs!" title="check out my blogs!"/>
            </a>;
}

export default BlogSwitcher;
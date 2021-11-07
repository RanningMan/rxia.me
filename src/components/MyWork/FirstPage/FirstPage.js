import React, { useContext, useState } from 'react';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import NameTag from './NameTag';
import ThemeSwitcher from '../Theme/ThemeSwitcher';
import ThemeContext from '../Theme/ThemeContext';
import classes from './FirstPage.module.css';
import Background from '../../../asset/Flash-left.svg';
import MobileBackground from '../../../asset/Mobile-Background.png';
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

const FirstPage = ({isLargeScreen}) => {

    const themeStyle = useContext(ThemeContext).themeStyle;
    const styles = {
        height: '100%',
        width: '100%',
        backgroundColor: themeStyle.dominant
    }

    const isBlogReady = false;

    return (
        <>
            <img src={isLargeScreen ? Background : MobileBackground} alt='' className={classes.Image}
                 style={styles}/>
            <Row className={classes.FirstPage}>
                {isLargeScreen && <ThemeSwitcher />}
                {isBlogReady && isLargeScreen && <BlogSwitcher />}
                <Col></Col>
                <Col>
                    <NameTag></NameTag>
                </Col>
                <Col></Col>
            </Row>
        </>
    );
};

export default FirstPage;
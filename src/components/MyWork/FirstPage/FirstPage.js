import React, { useContext } from 'react';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import NameTag from './NameTag';
import ThemeSwitcher from '../Theme/ThemeSwitcher';
import ThemeContext from '../Theme/ThemeContext';
import classes from './FirstPage.module.css';
import Background from '../../../asset/Flash-left.svg';
import MobileBackground from '../../../asset/Mobile-Background.png';
import Rain from '../Theme/RainAnimation';
import { isRainning } from '../Theme/ThemeHelper';
import BlogSwitcher from '../Blog/BlogSwitcher';

const FirstPage = ({isLargeScreen}) => {

    const themeContext = useContext(ThemeContext);
    const themeStyle = themeContext.themeStyle;
    const raining = isRainning(themeContext.weather);
    const styles = {
        height: '100%',
        width: '100%',
        backgroundColor: themeStyle.dominant
    }

    return (
        <>
            <img src={isLargeScreen ? Background : MobileBackground} alt='' className={classes.Image}
                 style={styles}/>
            <Row className={classes.FirstPage}>
                {isLargeScreen && <ThemeSwitcher />}
                {isLargeScreen && <BlogSwitcher />}
                {raining && < Rain />}
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
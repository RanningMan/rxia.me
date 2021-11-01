import React, { useContext } from 'react';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import NameTag from './NameTag';
import ThemeSwitcher from '../Theme/ThemeSwitcher';
import ThemeContext from '../Theme/ThemeContext';
import classes from './FirstPage.module.css';
import Background from '../../../asset/Flash-left.svg';
import MobileBackground from '../../../asset/Mobile-Background.png';


const FirstPage = ({isLargeScreen}) => {

    const themeStyle = useContext(ThemeContext).themeStyle;
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
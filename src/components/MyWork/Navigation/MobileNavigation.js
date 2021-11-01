import React, { useState } from 'react';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';

import classes from './MobileNavigation.module.css';
import MobileIcon from '../../../asset/flash-icon-mobile.png';

const HamburgerButton = ({onClick}) => {
    return <div className={classes.Hamburger} onClick={onClick}>
            <hr className={classes.HamburgerBar1} />
            <hr className={classes.HamburgerBar0} />
            <hr className={classes.HamburgerBar2} />
        </div>;
}

const InitialHamburgerButton = ({onClick}) => {
    return <div className={classes.Hamburger} onClick={onClick}>
            <hr className={classes.HamburgerBar} />
            <hr className={classes.HamburgerBar} />
            <hr className={classes.HamburgerBar} />
        </div>;
}

const CrossButton = ({onClick}) => {
    return <div className={classes.Cross} onClick={onClick}>
            <hr className={classes.CrossBar1} />
            <hr className={classes.CrossBar0} />
            <hr className={classes.CrossBar2} />
        </div>;
}

const Menu = ({onClick}) => {
    return <Nav className={`flex-column ${classes.Menu}`}>
        <Nav.Link className={classes.MenuItem} onClick={() => onClick('FirstPage')}>Home</Nav.Link>
        <Nav.Link className={classes.MenuItem} onClick={() => onClick('Profile')}>Profile</Nav.Link>
        <Nav.Link className={classes.MenuItem} onClick={() => onClick('Skill')}>Skills</Nav.Link>
        <Nav.Link className={classes.MenuItem} onClick={() => onClick('Project')}>Projects</Nav.Link>
        <Nav.Link className={classes.MenuItem} onClick={() => onClick('Work')}>Work</Nav.Link>
    </Nav>
}

const MobileNavigation = ({refProp}) => {
    const [menuState, setMenuState] = useState(false);
    const [initialButton, setInitialButton] = useState(true);
    const Icon = <img src={MobileIcon} alt='flash icon' />
    const flipMenuState = () => {
        const curMenuState = menuState;
        setMenuState(!curMenuState);
        if(curMenuState) {
            document.body.style.overflow = 'visible';
        } else {
            document.body.style.overflow = 'hidden';
        }
    }
    const onHamburgerAndCrossButtonClick = () => {
        flipMenuState();
        setInitialButton(false);
    }
    const onLinkClick = (link) => {
        refProp[link].current.scrollIntoView({behavior: 'smooth'});
        flipMenuState();
    }

    return <div className={classes.Navigation}>
        <Row className={classes.TopBar}>
            <Col className={`${menuState && classes.OpacTopBar}`}>{Icon}</Col>
            <Col className={`${classes.Name} ${menuState && classes.OpacTopBar}`} xs={6}>Ran Xia</Col>
            <Col className={classes.Button}>{menuState ? <CrossButton onClick={onHamburgerAndCrossButtonClick}/> : (initialButton ? <InitialHamburgerButton onClick={onHamburgerAndCrossButtonClick} /> : <HamburgerButton onClick={onHamburgerAndCrossButtonClick} />)}</Col>
        </Row>
        {menuState && <Row>
            <Col xs={7} className={`${classes.MenuContainer} ${classes.OpacMenuContainer}`}></Col>
            <Col className={classes.MenuContainer}><Menu onClick={onLinkClick}/></Col>
        </Row>}
    </div>
}

export default MobileNavigation;
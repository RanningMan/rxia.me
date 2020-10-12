import React, { useState, useEffect, useContext } from 'react';

import classes from './Navigation.module.css';
import Arrow from './Arrow';
import ThemeContext from '../Theme/ThemeContext';

const SideNavLink = (props) => {

    const currentTheme = useContext(ThemeContext).themeStyle;
    
    const themeStyle = {
        Inactive: {
            color: currentTheme.secondDominant,
            backgroundColor: currentTheme.lastDominant
        },
        Active: {
            color: currentTheme.secondDominant,
            backgroundColor: currentTheme.dominant
        },
        InactiveHover: {
            color: currentTheme.secondDominant,
            backgroundColor: currentTheme.dominant
        },
        FirstPage: {
            color: currentTheme.secondDominant,
            backgroundColor: currentTheme.dominant
        },
    }

    const hover = (e) => {
        const ele = props.isFirstPage ? e.target.parentElement : e.target;
        if(!props.isActive) {
            ele.style.color = themeStyle.InactiveHover.color;
            ele.style.backgroundColor = themeStyle.InactiveHover.backgroundColor;
        }
    }

    const unHover = (e) => {
        const ele = props.isFirstPage ? e.target.parentElement : e.target;
        if(!props.isActive) {
            ele.style.color = themeStyle.Inactive.color;
            ele.style.backgroundColor = themeStyle.Inactive.backgroundColor;
        }
    }
    
    return (
        props.isFirstPage ?
        <li className={props.isActive ? classes.Active : classes.Inactive} 
            onClick={props.onClick} 
            style={props.isActive ? themeStyle.FirstPage : themeStyle.Inactive}
            onMouseEnter={hover}
            onMouseLeave={unHover}>
            {props.children}
        </li> :
        <li className={props.isActive ? classes.Active : classes.Inactive} 
            onClick={props.onClick} 
            style={props.isActive ? themeStyle.Active : themeStyle.Inactive}
            onMouseOver={hover}
            onMouseOut={unHover}>
            {props.children}
        </li>
    );
}

const Nav = (props) => {

    const [ activeLink, setActiveLink ] = useState('FirstPage');
    const [ targetLink, setTargetLink ] = useState('');
    const [ showNav, setShowNav ] = useState(false);

    /**
     * TODO: Logic in clickHandler and getCurrentPage can be smarter
     */ 

    const clickHandler = (link) => {
        props.refProp[link].current.scrollIntoView({behavior: 'smooth'});
        setTargetLink(link);
        if(!showNav && link === 'FirstPage') {
            props.refProp['Profile'].current.scrollIntoView({behavior: 'smooth'});
            setTargetLink('Profile');
        }
    }

    const currentTheme = useContext(ThemeContext).themeStyle;
    
    const themeStyle = {
        ArrowFirstPage: currentTheme.lastDominant,
        ArrowOtherPage: currentTheme.secondDominant
    }

    
    useEffect(() => {

        const getCurrentPage = () => {
            let curYOffSet = window.pageYOffset;
            if(curYOffSet <= props.refProp['Profile'].current.offsetTop - window.innerHeight * 0.1) {
                return 'FirstPage';
            }
            else if(curYOffSet <= props.refProp['Skill'].current.offsetTop  - window.innerHeight * 0.1) {
                return 'Profile';
            }
            else if(curYOffSet <= props.refProp['Project'].current.offsetTop - window.innerHeight * 0.1) {
                return 'Skill';
            }
            else if(curYOffSet <= props.refProp['Work'].current.offsetTop - window.innerHeight * 0.4) {
                return 'Project';
            }
            else {
                return 'Work';
            }
        }
    
        const scrollHandler = () => {
            if(window.pageYOffset >= window.innerHeight * 0.8) { // 0.8 is from css code, .Navigation top: 20%
                setShowNav(true);
            }
            else {
                setShowNav(false);
            }
    
            let currentPage = getCurrentPage();
            setActiveLink(currentPage);
        }
        window.addEventListener('scroll', scrollHandler);

        return () => {
            window.removeEventListener('scroll', scrollHandler);
        }

    }, [props.refProp]);

    // eslint-disable-next-line
    useEffect(() => {
        setTargetLink('');
    });

    return (
        <ul className={showNav ? classes.Navigation : classes.Navigation0}>
            <SideNavLink isActive={activeLink === 'FirstPage' || targetLink === 'FirstPage'} isFirstPage={true} onClick={() => clickHandler('FirstPage')}> 
                <Arrow className={classes.Arrow} color={showNav ? themeStyle.ArrowOtherPage : themeStyle.ArrowFirstPage}/>
            </SideNavLink>
            <SideNavLink isActive={activeLink === 'Profile' || activeLink === 'Profile'} onClick={() => clickHandler('Profile')}>Profile</SideNavLink>
            <SideNavLink isActive={activeLink === 'Skill' || activeLink === 'Skill'} onClick={() => clickHandler('Skill')}>Skills</SideNavLink>
            <SideNavLink isActive={activeLink === 'Project' || activeLink === 'Project'} onClick={() => clickHandler('Project')}>Projects</SideNavLink>
            <SideNavLink isActive={activeLink === 'Work' || activeLink === 'Work'} onClick={() => clickHandler('Work')}>Work</SideNavLink>
        </ul>
    );
}

export default Nav;
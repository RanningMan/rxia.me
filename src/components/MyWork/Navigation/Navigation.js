import React, { useState, useEffect } from 'react';

import classes from './Navigation.module.css';
import ArrowDark from '../../../asset/arrow_up.png';
import ArrowLight from '../../../asset/arrow_up_light.png';

const SideNavLink = (props) => {
    
    return (
        <li className={props.isActive ? classes.Active : classes.Inactive} onClick={props.onClick}>
            {props.children}
        </li>
    );
}

const Nav = (props) => {

    const [ activeLink, setActiveLink ] = useState('FirstPage');
    const [ showNav, setShowNav ] = useState(false);

    /**
     * TODO: Logic in clickHandler and getCurrentPage can be smarter
     */ 

    const clickHandler = (link) => {
        props.refProp[link].current.scrollIntoView({behavior: 'smooth'});
        setActiveLink(link);
        if(!showNav && link === 'FirstPage') {
            props.refProp['Profile'].current.scrollIntoView({behavior: 'smooth'});
            setActiveLink('Profile');
        }
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
            if(currentPage !== activeLink) {
                setActiveLink(currentPage);
            }
        }

        window.addEventListener('scroll', scrollHandler);

        return () => {
            window.removeEventListener('scroll', scrollHandler);
        }

    });

    return (
        <ul className={showNav ? classes.Navigation : classes.Navigation0}>
            <SideNavLink isActive={activeLink === 'FirstPage'} onClick={() => clickHandler('FirstPage')}> <img className={classes.Arrow} src={showNav ? ArrowLight : ArrowDark} alt="Front Page"/></SideNavLink>
            <SideNavLink isActive={activeLink === 'Profile'} onClick={() => clickHandler('Profile')}>Profile</SideNavLink>
            <SideNavLink isActive={activeLink === 'Skill'} onClick={() => clickHandler('Skill')}>Skills</SideNavLink>
            <SideNavLink isActive={activeLink === 'Project'} onClick={() => clickHandler('Project')}>Projects</SideNavLink>
            <SideNavLink isActive={activeLink === 'Work'} onClick={() => clickHandler('Work')}>Work</SideNavLink>
        </ul>
    );
}

export default Nav;
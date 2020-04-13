import React, { useState, useEffect } from 'react';

import classes from './Navigation.module.css';
import Arrow from '../../../asset/arrow_up.png';

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
            props.refProp['Travel'].current.scrollIntoView({behavior: 'smooth'});
            setActiveLink('Travel');
        }
    }

    
    useEffect(() => {
        
        const getCurrentPage = () => {
            let curYOffSet = window.pageYOffset;
            if(curYOffSet <= props.refProp['Travel'].current.offsetTop - window.innerHeight * 0.1) {
                return 'FirstPage';
            }
            else if(curYOffSet <= props.refProp['Read'].current.offsetTop  - window.innerHeight * 0.1) {
                return 'Travel';
            }
            else {
                return 'Read';
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

    let nav = (
        <ul className={classes.Navigation}>
            <SideNavLink isActive={activeLink === 'FirstPage'} onClick={() => clickHandler('FirstPage')}> <img className={classes.Arrow} src={Arrow} alt="Front Page"/></SideNavLink>
            <SideNavLink isActive={activeLink === 'Travel'} onClick={() => clickHandler('Travel')}>Travel</SideNavLink>
            <SideNavLink isActive={activeLink === 'Read'} onClick={() => clickHandler('Read')}>Read</SideNavLink>
        </ul>
    );

    if(!showNav) {
        nav = (
            <ul className={classes.Navigation0}>
                <SideNavLink isActive={activeLink === 'FirstPage'} onClick={() => clickHandler('FirstPage')}> <img className={classes.Arrow} src={Arrow} alt="Front Page"/></SideNavLink>
                <SideNavLink isActive={activeLink === 'Travel'} onClick={() => clickHandler('Travel')}>Travel</SideNavLink>
                <SideNavLink isActive={activeLink === 'Read'} onClick={() => clickHandler('Read')}>Read</SideNavLink>
            </ul>
        );
    }

    return (
        <>
            {nav}
        </>
    );
}

export default Nav;
import React, { useContext, useEffect, useState } from 'react';

import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

import classes from './ThemeSwitcher.module.css';
import ThemeType from './ThemeType';
import ThemeContext from './ThemeContext';
import ThemeStyles from './ThemeStyles';
import {getTodaysWeather, getWeatherTheme } from './ThemeHelper';

const ThemeSwitcher = () => {

    const themeContext = useContext(ThemeContext);

    const [weather, setWeatherThemeStyle] = useState(ThemeStyles.sunny);

    useEffect(() => {
        const setWeatherAsync = async () => {
            const todaysweather = await getTodaysWeather();
            const todaysweatherthemestyle = getWeatherTheme(todaysweather);
            setWeatherThemeStyle(todaysweatherthemestyle);
            themeContext.setWeather(todaysweather);
        }
        setWeatherAsync();
    }, [themeContext]);


    const setTheme = (themeType) => {
        localStorage.setItem('preferredTheme', themeType);
        if(themeType === ThemeType.DEFAULT) {
            themeContext.setTheme(ThemeStyles.default);
        } else if(themeType === ThemeType.WEATHER) {
            themeContext.setTheme(weather);
        }
    };

    return (
        <>
            <DropdownButton size="sm" variant="secondary" title="Theme" drop='right' className={classes.ThemeSwitcher}>
                <Dropdown.Item eventKey="1" onClick={() => setTheme(ThemeType.DEFAULT)}>Default</Dropdown.Item>
                <Dropdown.Item eventKey="2" onClick={() => setTheme(ThemeType.WEATHER)}>Seattle Weather</Dropdown.Item>
            </DropdownButton>
        </>
    );
};

export default ThemeSwitcher;
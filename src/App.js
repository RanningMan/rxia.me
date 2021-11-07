import React, { useEffect, useState } from 'react';

import Resume from './components/MyWork/Resume';
import classes from './App.module.css';
import ThemeContext from './components/MyWork/Theme/ThemeContext';
import ThemeStyles from './components/MyWork/Theme/ThemeStyles';
import ThemeType from './components/MyWork/Theme/ThemeType';
import { getTodaysWeather, getWeatherTheme } from './components/MyWork/Theme/ThemeHelper';
import WeatherEnum from './components/MyWork/Theme/WeatherEnum';


const App = () => {
    
    const [theme, setTheme] = useState(ThemeStyles.default);
    const [weather, setWeather] = useState(WeatherEnum.Sunny);

    const [isFetchingPreference, setIsFetchingPreference] = useState(true);
    
    const setThemeType = (themeType) => {
        setTheme(themeType);
    }
    
    useEffect(() => {
        const setThemeAsync = async () => {
            const preferredTheme = localStorage.getItem('preferredTheme');
            if(preferredTheme === ThemeType.WEATHER) {
                const todaysweather = await getTodaysWeather();
                const todaysweatherthemestyle = getWeatherTheme(todaysweather);
                setTheme(todaysweatherthemestyle);
                setWeather(todaysweather);
            }
            setIsFetchingPreference(false);
        }
        setThemeAsync();
    }, []);

    return (
        isFetchingPreference ? null :
        <ThemeContext.Provider value={{themeStyle: theme, setTheme: setThemeType, weather: weather, setWeather: setWeather}}>
            <div className={classes.App}>
                <Resume />
            </div>
        </ThemeContext.Provider>
      );
};

export default App;
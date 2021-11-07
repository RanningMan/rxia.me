import React from 'react';

import ThemeStyles from './ThemeStyles';
import WeatherEnum from './WeatherEnum';

const ThemeContext = React.createContext({
    themeStyle: ThemeStyles.default,
    setTheme: () => {},
    weather: WeatherEnum.Sunny,
    setWeather: () => {}
});

export default ThemeContext;
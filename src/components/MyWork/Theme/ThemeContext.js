import React from 'react';

import ThemeStyles from './ThemeStyles';

const ThemeContext = React.createContext({
    themeStyle: ThemeStyles.default,
    setTheme: () => {}
});

export default ThemeContext;
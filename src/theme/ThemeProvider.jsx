import React, { createContext, useContext, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

import { ThemeProvider } from '@mui/material';

import { filterTheme } from './filterTheme';

const ThemeContext = createContext({});
export const useThemeContext = () => useContext(ThemeContext)

const ThemeProviderWrapper = ({ children }) => {

	const localTheme = localStorage.getItem('appTheme')
	let curThemeName = localTheme || 'LightTheme';

	const modeObject = {
		DarkTheme: 'LightTheme',
		LightTheme: 'DarkTheme'
	}

	if (!localTheme) {
		localStorage.setItem('appTheme', 'LightTheme');
		curThemeName = 'LightTheme'
	}
	if (!modeObject[curThemeName]) {
		curThemeName = 'LightTheme'
		localStorage.setItem('appTheme', curThemeName);
	}

	const [themeName, setThemeName] = useState(curThemeName);
	const theme = filterTheme(themeName)

	const handleThemeName = () => {
		const themeName = modeObject[curThemeName]
		localStorage.setItem('appTheme', themeName);
		setThemeName(themeName);
	};

	const values = useMemo(() => ({
		handleThemeName
	}), [themeName])

	return (
		<ThemeContext.Provider value={values}>
			<ThemeProvider theme={theme}>{children}</ThemeProvider>
		</ThemeContext.Provider>
	);
};

ThemeProviderWrapper.propTypes = {
	children: PropTypes.node
}

export default ThemeProviderWrapper;

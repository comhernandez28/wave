import { useEffect, useState } from 'react';
import { setToLS, getFromLS } from '../utils/storeThemes';
import _ from 'lodash';

export const useTheme = () => {
	const themeFile = getFromLS('all-themes');
	const [theme, setTheme] = useState(themeFile.light);
	const [themeLoaded, setThemeLoaded] = useState(false);

	const setMode = (mode) => {
		setToLS('theme', mode);
		setTheme(mode);
	};

	// const getFonts = () => {
	// 	const allFonts = _.values(_.mapValues(themes.data, 'font'));
	// 	return allFonts;
	// };

	useEffect(() => {
		const localTheme = getFromLS('theme');
		localTheme ? setTheme(localTheme) : setTheme(themeFile.light);
		setThemeLoaded(true);
	}, []);

	return { theme, themeLoaded, setMode };
};

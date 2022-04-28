import { useEffect, useState } from 'react';
import { setToLS, getFromLS } from '../utils/storeThemes';

export const useTheme = () => {
	const themeFile = getFromLS('all-themes');
	const [theme, setTheme] = useState({});
	const [themeLoaded, setThemeLoaded] = useState(false);

	const setMode = (mode) => {
		setToLS('theme', mode);
		setTheme(mode);
	};

	useEffect(() => {
		const localTheme = getFromLS('theme');
		localTheme ? setTheme(localTheme) : setTheme(themeFile.light);
		setThemeLoaded(true);
	}, [themeFile]);

	return { theme, themeLoaded, setMode };
};

import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Profile from '../views/profile/Profile.js';
import Header from './header/Header';
import Main from './main/Main';

import Dashboard from '../views/dashboard/Dashboard';
import Settings from '../views/settings/Settings.js';
import Login from '../views/login/Login';

import Loading from './shared/Loading';

import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../theme/GlobalStyles';
import { useTheme } from '../hooks/useTheme';

import { useGetCurrentUserQuery } from '../apis/user.js';

export const App = () => {
	const { data, error, isLoading } = useGetCurrentUserQuery();
	const { theme, themeLoaded } = useTheme();
	const [selectedTheme, setSelectedTheme] = useState(theme);

	useEffect(() => {
		setSelectedTheme(theme);
	}, [themeLoaded]);

	console.log(error);

	return (
		<>
			{isLoading ? (
				<Loading></Loading>
			) : error ? (
				<Login></Login>
			) : (
				<>
					{themeLoaded && (
						<ThemeProvider theme={selectedTheme}>
							<GlobalStyles />
							<Header />
							<Main>
								<Routes>
									<Route path='/' element={<Dashboard />}></Route>
									<Route path='/profile' element={<Profile />}></Route>
									<Route path='/settings' element={<Settings />}></Route>
								</Routes>
							</Main>{' '}
						</ThemeProvider>
					)}
				</>
			)}
		</>
	);
};

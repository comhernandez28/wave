import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
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

import { store } from '../store/index.js';
import { useGetCurrentUserQuery } from '../apis/user.js';
import { useSelector } from 'react-redux';

export const App = () => {
	const { data, error, isLoading } = useGetCurrentUserQuery();
	const { theme, themeLoaded } = useTheme();
	const [selectedTheme, setSelectedTheme] = useState(theme);
	const dispatch = useDispatch();

	useEffect(() => {
		setSelectedTheme(theme);
		//TODO: if theres a user setUser
		//maybe do this
		if (data) {
			dispatch({ type: 'user/updateUser', payload: data });
			//store.dispatch({ type: 'user/updateUser', payload: data });
		}

		//setUser(data);
	});

	return (
		<>
			{isLoading ? (
				<Loading></Loading>
			) : error ? (
				<>
					<Login></Login>
				</>
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
							</Main>
						</ThemeProvider>
					)}
				</>
			)}
		</>
	);
};

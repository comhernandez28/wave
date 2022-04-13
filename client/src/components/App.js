import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Profile from '../views/profile/Profile.js';
import Header from './header/Header';
import Main from './main/Main';
import Dashboard from '../views/dashboard/Dashboard';
import Login from '../views/login/Login';

import { useGetCurrentUserQuery } from '../apis/user.js';

export const App = () => {
	const { data, error, isLoading } = useGetCurrentUserQuery();
	//const query = useGetCurrentUserQuery();
	console.log(data);
	return (
		<>
			{error ? (
				<Login></Login>
			) : (
				<>
					<Header />
					<Main>
						<Routes>
							<Route path='/' element={<Dashboard />}></Route>
							<Route path='/profile' element={<Profile></Profile>}></Route>
						</Routes>
					</Main>
				</>
			)}
		</>
	);
};

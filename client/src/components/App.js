import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Profile from './profile/Profile';
import Header from './header/Header';
import Main from './main/Main';
import Dashboard from './dashboard/Dashboard';
import Login from '../views/login/Login';

export const App = () => {
	return (
		<>
			{/* check if user logged in */}
			{false ? (
				<Login></Login>
			) : (
				<>
					<Header />{' '}
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

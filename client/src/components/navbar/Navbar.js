import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../shared/Loading';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHouse } from '@fortawesome/free-solid-svg-icons';

import { useGetCurrentUserQuery } from '../../apis/user';

const Nav = styled.nav`
	width: 15%;
	margin: 20px 20px;
	padding: 10px;
	display: flex;
	flex-flow: column nowrap;
	background-color: white;
	box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.3);
	transition: 0.3s;
	border-radius: 2%;

	ul {
		list-style: none;
		padding: 0;
		margin-top: 0%;
	}

	li {
		margin-bottom: 20px;
		margin-left: 0;
	}
`;

const ProfilePic = styled.img`
	width: 80px;
	align-self: center;
	border-radius: 50%;
`;

function Navbar() {
	const [user, setUser] = useState({});
	const { data, error, isLoading } = useGetCurrentUserQuery();

	useEffect(() => {
		setUser(data);
	}, [data, user]);

	return (
		<>
			{isLoading ? (
				<Loading />
			) : (
				<Nav className='card'>
					<ProfilePic src={user.profilePicture} alt='user' />
					<span>{user ? user.displayName : 'User Name'}</span>
					<h5>NAVIGATION</h5>
					<ul>
						<li>
							<FontAwesomeIcon icon={faHouse} /> <Link to={'/'}>Dashboard</Link>
						</li>
						<li>
							<FontAwesomeIcon style={{ paddingRight: '4px' }} icon={faUser} />{' '}
							<Link to={'/profile'}>Profile</Link>
						</li>
						<li>Charts</li>
						<li>Artists</li>
						<li>Playlists</li>
					</ul>
				</Nav>
			)}
		</>
	);
}

export default Navbar;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import userImg from './user.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHouse } from '@fortawesome/free-solid-svg-icons';

import { useGetCurrentUserQuery } from '../../apis/user';

const Nav = styled.nav`
	width: 10%;
	margin: 20px 20px;
	padding: 10px;
	display: flex;
	flex-flow: column nowrap;
	background-color: white;

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
	width: 100px;
	align-self: center;
`;

function Navbar() {
	const [user, setUser] = useState(null);

	const { data, error, isLoading } = useGetCurrentUserQuery();
	

	useEffect(() => {
		setUser(data);
	});

	return (
		<Nav className='card'>
			<ProfilePic src={user.profilePicture} alt='user' />
			<span>{user ? user.displayName : 'User Name'}</span>
			<h5>NAVIGATION</h5>
			<ul>
				<li>
					<FontAwesomeIcon style={{ paddingRight: '4px' }} icon={faUser} />{' '}
					<Link to={'/profile'}>Profile</Link>
				</li>
				<li>
					<FontAwesomeIcon icon={faHouse} /> <Link to={'/'}>Dashboard</Link>
				</li>
				<li>Charts</li>
				<li>Artists</li>
				<li>Playlists</li>
			</ul>
		</Nav>
	);
}

export default Navbar;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../shared/Loading';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHouse, faGear } from '@fortawesome/free-solid-svg-icons';

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

	.nav-title {
		padding: 0px 15px;
	}

	ul {
		list-style: none;
		padding: 0px 15px;
		margin-top: 0%;
	}

	li {
		margin-bottom: 20px;
		margin-left: 0;
	}
`;

const ProfilePic = styled.img`
	width: 75px;
	height: 75px;
	align-self: center;
	border-radius: 50%;
	padding-bottom: 5px;
`;

const ProfileContainer = styled.div`
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
	padding-top: 10px;

	.name {
		font-weight: bolder;
		font-size: smaller;
	}
`;

function Navbar() {
	const [user, setUser] = useState({});
	const { data, error, isLoading } = useGetCurrentUserQuery();

	useEffect(() => {
		setUser(data);
	});

	console.log(error);

	return (
		<>
			{isLoading ? (
				<Loading />
			) : (
				<Nav className='card'>
					<ProfileContainer>
						<ProfilePic
							src={user.profilePicture}
							alt='user'
							onError={({ currentTarget }) => {
								currentTarget.onerror = null; // prevents looping
								currentTarget.src = 'user-default.png';
							}}
						/>
						<span className='name'>
							{user ? user.displayName : 'User Name'}
						</span>
					</ProfileContainer>

					<h5 className='nav-title'>NAVIGATION</h5>
					<ul>
						<li>
							<FontAwesomeIcon icon={faHouse} /> <Link to={'/'}>Dashboard</Link>
						</li>
						<li>
							<FontAwesomeIcon style={{ paddingRight: '4px' }} icon={faUser} />{' '}
							<Link to={'/profile'}>Profile</Link>
						</li>
						<li>
							<FontAwesomeIcon style={{ paddingRight: '0px' }} icon={faGear} />{' '}
							<Link to={'/settings'}>Settings</Link>
						</li>
						<li>Charts - coming soon</li>
						<li>Artists - coming soon</li>
						<li>Playlists - coming soon</li>
					</ul>
				</Nav>
			)}
		</>
	);
}

export default Navbar;

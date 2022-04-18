import React from 'react';
import styled from 'styled-components';
import Button from '../shared/Button.js';

const handleLogout = () => {
	window.location.href = '/api/users/logout';
};

const Container = styled.div`
	width: 100%;
	background-color: #202020;
	padding: 10px 10px;
	//background: linear-gradient(90deg, #005e7c 0%, #083e80 100%);
	background-image: url('header-wave.svg');
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	background-color: #388aed;
	top: calc(50% - 400px / 2);
`;

const Title = styled.header`
	color: white;
	font-size: 24px;
`;

function Header() {
	return (
		<Container>
			<Title>Wave</Title>
			<Button onClick={handleLogout}>Logout</Button>
		</Container>
	);
}

export default Header;

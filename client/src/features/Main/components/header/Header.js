import React from 'react';
import styled from 'styled-components';
import Button from '../../../shared/Button';

const handleLogout = (e) => {
	window.location.href = '/api/users/logout';
};

const Container = styled.div`
	display: flex;
	flex-flow: row nowrap;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	box-sizing: border-box;
	padding: 10px 15px;
	background-image: url('header-wave.svg');
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	background-color: ${({ theme }) => theme.colors.header};
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

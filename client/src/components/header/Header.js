import React from 'react';
import styled from 'styled-components';

const handleLogout = () => {
	window.location.href = '/api/users/logout';
};

const Container = styled.div`
	width: 100%;
	background-color: #202020;
	padding: 10px 10px;
`;

const Title = styled.header`
	color: white;
	font-size: 24px;
`;

function Header() {
	return (
		<Container>
			<Title>Wave</Title>
			<button onClick={handleLogout}>Logout</button>
		</Container>
	);
}

export default Header;

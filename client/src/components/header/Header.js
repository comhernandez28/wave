import React from 'react';
import styled from 'styled-components';

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
		</Container>
	);
}

export default Header;

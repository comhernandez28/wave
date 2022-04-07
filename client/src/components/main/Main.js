import React from 'react';
import Navbar from '../navbar/Navbar';
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	flex: auto;
	background-color: #f9f9f9;
`;

const Views = styled.div`
	width: 80%;
	border: 2px solid black;
	margin: 20px 20px;
`;

function Main(props) {
	return (
		<Container>
			<Navbar></Navbar>
			<Views>{props.children}</Views>
		</Container>
	);
}

export default Main;

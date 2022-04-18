import React from 'react';
import styled from 'styled-components';
import BtnText from './BtnText';

const Container = styled.button.attrs((props) => ({
	color: props.color || 'black',
	bg: props.bgColor || 'black',
}))`
	width: 100px;
	height: 40px;
	border: 1px solid ${(props) => props.theme.primaryColor};
	box-sizing: border-box;
	border-radius: 4px;
	background-color: rgba(0, 0, 0, 0);
	font-weight: bold;
	display: flex;
	flex-flow: row nowrap;
	justify-content: space-around;
	align-items: center;
	cursor: pointer;
`;

const Button = (props) => {
	return (
		<Container>
			<BtnText color={props.color}>{props.children}</BtnText>
		</Container>
	);
};

export default Button;

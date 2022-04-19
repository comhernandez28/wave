import React from 'react';
import styled from 'styled-components';
import BtnText from './BtnText';

const ButtonDefault = styled.button`
	width: 100px;
	height: 40px;
	border: 1px solid ${({ theme }) => theme.colors.button.border};
	background-color: ${({ theme }) => theme.colors.button.background};
	color: ${({ theme }) => theme.colors.button.text};
	box-sizing: border-box;
	border-radius: 4px;
	font-weight: bold;
	display: flex;
	flex-flow: row nowrap;
	justify-content: space-around;
	align-items: center;
	cursor: pointer;
`;

const Button = (props) => {
	return (
		<ButtonDefault onClick={props.onClick}>
			<BtnText>{props.children}</BtnText>
		</ButtonDefault>
	);
};

export default Button;

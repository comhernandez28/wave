import React from 'react';
import styled from 'styled-components';

const Container = styled.span`
	display: inline-block;
	position: relative;
	padding-bottom: 2px;
	color: ${({ theme }) => theme.colors.button.text};

	:after {
		content: '';
		position: absolute;
		width: 100%;
		transform: scaleX(0);
		height: 2px;
		bottom: 0;
		left: 0;
		background-color: ${({ theme }) => theme.colors.button.text};
		transform-origin: bottom right;
		transition: transform 0.25s ease-out;
	}

	:hover:after {
		transform: scaleX(1);
		transform-origin: bottom left;
	}
`;
const BtnText = (props) => {
	console.log(props);
	return <Container>{props.children}</Container>;
};

export default BtnText;

import React from 'react';
import styled from 'styled-components';

const Container = styled.span.attrs((props) => ({
	color: props.color || 'black',
}))`
	display: inline-block;
	position: relative;
	padding-bottom: 2px;
	color: ${(props) => props.color};

	:after {
		content: '';
		position: absolute;
		width: 100%;
		transform: scaleX(0);
		height: 2px;
		bottom: 0;
		left: 0;
		background-color: ${(props) => props.color};
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
	return <Container color={props.color}>{props.children}</Container>;
};

export default BtnText;

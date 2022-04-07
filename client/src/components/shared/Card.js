import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.3);
	transition: 0.3s;
	border-radius: 2%;
`;

function Card({ children }) {
	return <Container>{children}</Container>;
}

export default Card;

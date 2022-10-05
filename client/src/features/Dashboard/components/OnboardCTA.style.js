import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { theme } from '../../../theme/theme';

export const Container = styled.div`
	display: flex;
	flex-flow: column nowrap;
	border: 2px solid black;
	align-items: center;
	justify-content: center;
	height: 200px;
	background-color: ${theme.colors.lightGrey};
`;

//modularize into its own component
export const LinkTo = styled(Link)`
	text-decoration: none;
`;

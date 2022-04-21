import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	flex-flow: column nowrap;
`;

const Header = styled.h3`
	font-size: medium;
`;

const Table = styled.table`
	border: red;
`;

const StatsCard = () => {
	return (
		<Container>
			<Header>StatsCard</Header>
			<Table>
				<tbody>
					<tr>
						<td>Followers: 0</td>
					</tr>
					<tr>
						<td>Monthly Listeners: 0</td>
					</tr>
					<tr>
						<td>Popularity: 0/100</td>
					</tr>
				</tbody>
			</Table>
		</Container>
	);
};

export default StatsCard;

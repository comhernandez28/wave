import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { useGetSpotifyTestQuery } from '../../apis/spotify';

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
	const { data, error, isLoading } = useGetSpotifyTestQuery();
	const [test, setTest] = useState('');

	// useEffect(() => {
	// 	setTest(data);
	// });

	console.log('test', data);
	console.log('error', error);

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

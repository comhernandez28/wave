import React from 'react';
import styled from 'styled-components';

import Card from '../../components/shared/Card';
import Button from '../../components/shared/Button';

const OAuthContainer = styled.div`
	display: flex;
	flex-flow: row nowrap;
	justify-content: space-around;
	border: 1px solid red;
`;

const AuthCard = styled(Card)`
	box-sizing: border-box;
	padding: 10px;
	width: 200px;
	background-color: red;
`;

const Settings = () => {
	return (
		<>
			<h2>Settings</h2>
			<div>
				<h3>App Connections</h3>
				<OAuthContainer>
					<AuthCard>
						<h5>Spotify</h5>
						<Button>Connect</Button>
					</AuthCard>
					<AuthCard>
						<h5>SoundCloud</h5>
						<Button>Connect</Button>
					</AuthCard>
				</OAuthContainer>
			</div>
		</>
	);
};

export default Settings;

import React from 'react';
import styled from 'styled-components';
import LoginScene from '../../components/shared/LoginScene';

const Container = styled.div`
	height: 100vh;
	display: flex;
	flex-flow: row nowrap;
	justify-content: center;
	align-items: center;
`;

const LeftContainer = styled.div`
	width: 50%;
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
`;

const RightContainer = styled.div`
	width: 50%;
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
`;

const GoogleButton = styled.button`
	width: 200px;
	height: 50px;
	border: 2px solid black;
	border-radius: 10px;
	background-color: white;
	font-weight: bold;
	display: flex;
	flex-flow: row nowrap;
	justify-content: space-around;
	align-items: center;
	cursor: pointer;
`;

const GoogleLogo = styled.img`
	width: 30px;
`;

const FormatLoginScene = styled(LoginScene)`
	height: 100vh;
`;

const LoginSceneContainer = styled.div``;

const handleLogin = () => {
	window.location.href = '/api/users/auth/google';
};

const Login = () => {
	return (
		<Container>
			<LeftContainer>
				<h1>Welcome back</h1>
				<p>Please select your login provider</p>
				<div>
					<GoogleButton onClick={handleLogin}>
						<GoogleLogo src='/google-logo.png' alt='google' />
						<span>Sign in with Google</span>
					</GoogleButton>
				</div>
			</LeftContainer>
			<RightContainer>
				Right
				<LoginSceneContainer>
					<FormatLoginScene></FormatLoginScene>
				</LoginSceneContainer>
			</RightContainer>
		</Container>
	);
};

export default Login;

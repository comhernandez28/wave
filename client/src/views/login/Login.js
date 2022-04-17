import React from 'react';
import styled from 'styled-components';
import BtnText from '../../components/shared/BtnText';

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
	text-align: left;
`;

const RightContainer = styled.div`
	height: 100%;
	width: 50%;
	display: flex;
	flex-flow: column-reverse nowrap;
	align-items: center;
	//TODO: Replace this lol
	background-image: url('/login-right.jpeg');
	background-repeat: no-repeat;
	background-size: cover;
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

const LoginTip = styled.div`
	width: 90%;
	height: 200px;
	border-radius: 5px;
	background: rgba(255, 255, 255, 0.3);
	backdrop-filter: blur(4px);
	color: white;
	margin-bottom: 20px;

	.tip-content {
		padding: 20px;
	}

	.tip-text {
		padding-left: 20px;
	}
`;

const GoogleLogo = styled.img`
	width: 30px;
`;

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
						<BtnText color='black'>Sign in with Google</BtnText>
					</GoogleButton>
				</div>
				<p>
					Don't have a Wave account? <a>Sign up here!</a>
				</p>
			</LeftContainer>
			<RightContainer>
				<LoginTip>
					<div className='tip-content'>
						<h2>Tip of the Day:</h2>
						<p className='tip-text'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
							interdum iaculis ante. In ut mi scelerisque nunc interdum luctus
							ac euismod enim. Sed cursus ultrices justo id congue. Ut cursus.
						</p>
					</div>
				</LoginTip>
			</RightContainer>
		</Container>
	);
};

export default Login;

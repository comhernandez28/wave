import React from 'react';
import * as S from './Login.style';

const handleLogin = () => {
	window.location.href = '/api/users/auth/google';
};

const Login = () => {
	return (
		<S.Container>
			<S.LeftContainer>
				<h1>Welcome back</h1>
				<p>Please select your login provider</p>
				<div>
					<S.GoogleButton onClick={handleLogin}>
						<S.GoogleLogo src='/google-logo.png' alt='google' />
						<span>Sign in with Google</span>
					</S.GoogleButton>
				</div>
				<p>
					Don't have a Wave account? <a href='/'>Sign up here!</a>
				</p>
			</S.LeftContainer>
			<S.RightContainer>
				<S.LoginTip>
					<div className='tip-content'>
						<h2>Tip of the Day:</h2>
						<p className='tip-text'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
							interdum iaculis ante. In ut mi scelerisque nunc interdum luctus
							ac euismod enim. Sed cursus ultrices justo id congue. Ut cursus.
						</p>
					</div>
				</S.LoginTip>
			</S.RightContainer>
		</S.Container>
	);
};

export default Login;

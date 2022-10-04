import styled from 'styled-components';

export const Container = styled.div`
	height: 100vh;
	display: flex;
	flex-flow: row nowrap;
	justify-content: center;
	align-items: center;
`;

export const LeftContainer = styled.div`
	width: 50%;
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
	text-align: left;
`;

export const RightContainer = styled.div`
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

export const GoogleButton = styled.button`
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

export const LoginTip = styled.div`
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

export const GoogleLogo = styled.img`
	width: 30px;
`;

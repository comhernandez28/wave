import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import * as S from './Main.style';

function Main(props) {
	return (
		<S.Container>
			<Navbar></Navbar>
			<S.Views>{props.children}</S.Views>
		</S.Container>
	);
}

export default Main;

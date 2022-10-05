import React from 'react';
import * as S from './OnboardCTA.style';
import { Link } from 'react-router-dom';

import Button from '../../shared/Button';

export const OnboardCTA = () => {
	const onClick = () => {};
	return (
		<S.Container>
			<h3>Connect an account to start tracking your journey</h3>
			<br />
			<S.LinkTo to={'/settings'}>
				<Button color={'white'}>Settings</Button>
			</S.LinkTo>
		</S.Container>
	);
};

import React from 'react';
import * as S from './OnboardCTA.style';

import Button from '../../components/shared/Button';

export const OnboardCTA = () => {
	return (
		<div>
			<S.Container>
				<h3>Connect an account to start tracking your journey</h3>
				<br />
				<Button>Settings</Button>
			</S.Container>
		</div>
	);
};

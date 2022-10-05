import { useEffect, React } from 'react';
import { OnboardCTA } from '../components/OnboardCTA';
import * as S from './Dashboard.style';

function Dashboard() {
	return (
		<S.Container>
			<S.Header>Dashboard</S.Header>
			<S.CTAContainer>
				<OnboardCTA></OnboardCTA>
			</S.CTAContainer>
		</S.Container>
	);
}

export default Dashboard;

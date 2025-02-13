import { HeaderContainer } from './styles';

import logoImg from '../../assets/logo.svg';

export function Header() {
	return (
		<HeaderContainer>
			<div>
				<nav>
					<img src={logoImg} alt="Logo" />
					<div />
				</nav>
			</div>
		</HeaderContainer>
	);
}

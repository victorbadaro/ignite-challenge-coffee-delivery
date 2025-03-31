import { Button } from '../button';

import { HeaderContainer } from './styles';

import logoImg from '../../assets/logo.svg';

export function Header() {
	return (
		<HeaderContainer>
			<div>
				<nav>
					<img src={logoImg} alt="Logo" />
					<Button>LABEL</Button>
				</nav>
			</div>
		</HeaderContainer>
	);
}

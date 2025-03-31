import type { ButtonHTMLAttributes } from 'react';

import { ButtonContainer } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: 'primary' | 'secondary';
}

export function Button({ variant = 'primary', children, ...rest }: ButtonProps) {
	return (
		<ButtonContainer variant={variant} {...rest}>
			{children}
		</ButtonContainer>
	);
}

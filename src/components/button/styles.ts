import styled from 'styled-components';

interface ButtonContainerProps {
	variant: 'primary' | 'secondary';
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ variant }) => (variant === 'primary' ? '12px 45px' : '6.5px 8px')};
  border: none;
  border-radius: 6px;
  font-weight: ${({ variant }) => (variant === 'primary' ? 'bold' : 'normal')};
  font-size: ${({ variant }) => (variant === 'primary' ? '14px' : '12px')};
  line-height: 1.6;
  background-color: ${({ theme, variant }) => (variant === 'primary' ? theme.colors.yellow : theme.colors['base-button'])};
  color: ${({ theme, variant }) => (variant === 'primary' ? theme.colors['base-white'] : theme.colors['base-text'])};

  transition: background-color 200ms;

  &:hover {
    background-color: ${({ theme, variant }) => (variant === 'primary' ? theme.colors['yellow-dark'] : theme.colors['base-hover'])};
  }
`;

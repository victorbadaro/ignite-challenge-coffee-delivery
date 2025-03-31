import styled from 'styled-components';

export const ButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 45px;
  border: none;
  border-radius: 6px;
  font-weight: bold;
  font-size: 14px;
  line-height: 1.6;
  background-color: ${({ theme }) => theme.colors.yellow};
  color: ${({ theme }) => theme.colors['base-white']};

  transition: background-color 200ms;

  &:hover {
    background-color: ${({ theme }) => theme.colors['yellow-dark']};
  }
`;

import styled from 'styled-components';

export const HeaderContainer = styled.header`
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    max-width: 70rem;
    height: 6.5rem;

    nav {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: space-between;

      img {
        width: 85px;
        height: 40px;
      }
    }
  }
`;

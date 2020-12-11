import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-top: 1px solid #bdc3c7;

  img {
    width: 100px;
  }

  .redes {
    margin: 10px 0;
  }

  .sociais:not(:first-child) {
    margin-left: 10px;
  }

  p {
    font-size: 12px;
    color: ${props => props.theme.colors.carbonDark}
  }

  p:not(:first-child) {
    margin-top: 5px;
  }
`;
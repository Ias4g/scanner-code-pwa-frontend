import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 18px;
  max-width: 480px;
  margin: 25px auto;
  align-items: center;
  justify-content: center;

  .title {
    font-weight: bold;
  }

  p {
    font-size: 16px;
    text-align: justify;
    margin-top: 5px;
    color: #333;
  }
`;
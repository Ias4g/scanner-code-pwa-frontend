import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const Score = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  margin-top: 20px;
  margin-right: 10px;

  .label {
    color: ${props => props.scoreColor};
    font-size: 22px;
    text-align: center;
  }
`;

export const Value = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: ${props => props.scoreColor};
  border-radius: 50%;

  height: 43px;
  width: 43px;

  margin-right: 5px;

  .value {
    color: #fff;
  }
`;
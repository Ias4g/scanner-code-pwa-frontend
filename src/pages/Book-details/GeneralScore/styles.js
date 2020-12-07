import styled from 'styled-components';

export const Container = styled.div`
  .score {
    display: flex;
    flex-direction: column;
    justify-content: center;

    background-color: ${props => props.scoreColor};
    border-radius: 50%;
    height: 220px;
    width: 220px;
    font-size: 18px;
    color: #fff;
    text-align: center;
    margin: auto;
    margin-top: 30px;

    .summary-score-value {
      font-size: 98px;
    }
  }

  .score-comment {
    font-size: 18px;
    font-style: italic;
    color: #000;
    font-weight: bold;
    text-align: center;
    margin: 8px 0;
  }
`;
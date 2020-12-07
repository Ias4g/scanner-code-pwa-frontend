import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;

  .go-back {
    position: fixed;
    top: 15px;
    left: 15px;
  }

  .name-author {
    text-align: center;

    .name {
      font-size: 26px;
      margin-top: 10px 0;

      @media (min-width: 320px) and (max-width: 480px) {
        font-size: 20px;
      }
    }

    .author {
      font-size: 16px;
      font-style: italic;
      color: #7f8c8d;
      margin-bottom: 5px;
    }
  }

  .book-ratings {
    display: flex;
    justify-content: center;
    margin: auto;
  }

  .price {
    font-size: 16px;
    font-style: italic;
    color: #7f8c8d;
    text-align: center;

    .discount {
      color: #FF0000;
      text-decoration: line-through;
    }
  }
`;

export const Cover = styled.img`
  height: 220px;
  margin: auto;

  @media (min-width: 320px) and (max-width: 480px) {
    height: 150px;
  }
`;
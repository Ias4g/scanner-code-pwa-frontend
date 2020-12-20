import styled from 'styled-components'

export const Container = styled.div`
  padding: 20px;
  position: fixed;
  right: 150px;
  bottom: 20px;
  left: 150px;

  background-color: #fff;
  border-radius: 12px;

  a {
    display: block;
    text-decoration: none;
    color: #000;
    padding: 15px;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    display: flex;
    align-items: center;
    top: 100px;
    right: 30px;
    left: 30px;
    bottom: 80px;

    a {
      padding: 0px;
    }
  }
`;

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;

    @media (min-width: 320px) and (max-width: 480px) {
      background-color: #ff0400;
      height: 100%;
      flex-direction: column;
      align-items: center;
      padding: 2px;
    }
`;

export const Cover = styled.img`
    height: 128px;
    width: 96px;
    margin-right: 15px;
    border-radius: 5px;
    border: 1px solid #7f8c8d;

    @media (min-width: 320px) and (max-width: 480px) {
      height: 128px;
      width: 96px;
      margin-top: 20px;
      margin-right: 0px;
      margin-bottom: 20px;
    }
`;

export const Info = styled.div`
  flex: 1;
  height: 90px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  .name-author {
    .name {
      color: #7f8c8d;
      font-size: 18px;
      margin-bottom: 2px;
      margin-top: 0;
    }

    .author {
      opacity: 0.8;
      color: #7f8c8d;
      font-size: 12px;
      font-style: italic;
      margin-bottom: 10px;
      padding: 0px;
    }
  }

  .discount {
      /* color: #7f8c8d; */
      color: #FF0000;
      text-decoration: line-through;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    .name-author {
      .name {
        color: #7f8c8d;
        font-size: 16px;
        margin-bottom: 5px;
        margin-top: 0;
      }

      .author {
        opacity: 0.7;
        color: #7f8c8d;
        font-size: 14px;
        font-style: italic;
        margin-bottom: 15px;
        padding: 0px;
        text-align: center;
      }
    }

    .book-ratings {
        color: #7f8c8d;
        font-size: 12px;
        text-align: center;
        margin-bottom: 5px;
    }

    .price {
        color: #7f8c8d;
        font-size: 12px;
        text-align: center;
    }
  }
`;

export const ActionButton = styled.div`
  margin-left: 10px;
  padding: 0px;

  .button {
    display: block;
    background-color: #2ecc71;
    border-radius: 50%;
    padding: 20px;
    line-height: 0;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    display: fixed;
    bottom: 0;
    margin-left: 0;
    padding: 2px;

    .button {
      display: block;
      background-color: #2ecc71;
      border-radius: 4px;
      padding: 2px;
      line-height: 0;
    }
  }
`;

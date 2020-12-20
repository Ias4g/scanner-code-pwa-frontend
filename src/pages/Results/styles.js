import styled from 'styled-components'

export const Container = styled.div`
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

  @media (max-width: 720px) {
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

  @media (max-width: 720px) {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: transparent;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    border-radius: 12px;
  }
`;

export const Cover = styled.img`
  height: 128px;
  width: 96px;
  margin-right: 15px;
  border-radius: 5px;
  border: 1px solid #7f8c8d;

  @media (max-width: 720px) {
    height: 128px;
    width: 96px;
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
    color: #FF0000;
    text-decoration: line-through;
  }

  @media (max-width: 720px) {
    justify-content: flex-start;

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

  @media (max-width: 720px) {
    display: flex;
    bottom: 20px;
    position: absolute;
    align-items: center;
    justify-content: center;

    .button {
      background-color: #2ecc71;
      border-radius: 50px;
      padding: 8px 100px;
      line-height: 0;
    }
  }
`;

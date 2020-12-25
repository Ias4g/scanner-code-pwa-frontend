import styled from 'styled-components';

export const Video = styled.div`
  video {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    min-width: 100%;
    min-height: 100%
  }

  canvas{
    display: none;
  }
`;

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  min-width: 100%;
  min-height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ScanMarker = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .digitcod {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #3DBA5C;
    color: #fff;
    width: 40px;
    height: 40px;
    border: 0;
    border-radius: 50%;
    position: absolute;
    top: 10px;
    right: 10px;
    outline: none;
    transition: background-color 400ms
  }

  .digitcod:hover {
    background: #fff;
    color: #3DBA5C;
    outline: none;
  }

  .label {
    text-align: center;
    margin-top: 10px;
    margin-left: 30px;
    margin-right: 30px;
    color: #fff;
    font-size: 12px;
    font-style: italic;
  }

  .logo {
    margin-bottom: 25px;
    position: absolute;
    bottom: 0;
  }

  .version {
    position: absolute;
    bottom: 0;
    color: #fff;
    font-size: 10px;
    font-style: italic;
    margin-bottom: 10px;
  }
`
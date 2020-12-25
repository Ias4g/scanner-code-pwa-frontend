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
    background-color: transparent;
    width: 52px;
    height: 52px;
    border: 1px solid #fff;
    border-radius: 50%;
    position: absolute;
    top: 10px;
    right: 10px;
  }

  .digitcod:hover {
    background-color: #3DBA5C;
    border: 0;
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
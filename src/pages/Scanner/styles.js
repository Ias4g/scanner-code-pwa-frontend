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

  .logo {
    /* margin-bottom: 5px; */
    opacity: 0.25;
  }

  .version {
    opacity: 0.5;
    color: #fff;
    font-size: 10px;
    font-style: italic;
    margin-bottom: 10px;
  }
`;

export const ScanMarker = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0.4;

  .label {
    text-align: center;
    margin-left: 30px;
    margin-right: 30px;
    color: #fff;
    font-size: 12px;
    font-style: italic;
  }
`
import styled from 'styled-components';

export const Backdrop = styled.div<{show: boolean}>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, .9);
  z-index: 3;
  display: ${props => props.show ? 'grid' : 'none'};
  place-items: center;
`;

export const ImageWrapper = styled.img`
  width: 80%;
  max-width: 500px;
`;
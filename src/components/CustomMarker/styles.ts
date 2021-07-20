import styled, { css } from 'styled-components';

import { CustomMarkerProps } from '.';

export const Wrapper = styled.div<CustomMarkerProps>`
  ${({ avatar }) => css`
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    background-color: #f5f5f5; //#6699CC

    background-image: url(${avatar});
    background-position: center;
    background-size: cover;

    color: black;
  `}
`;

import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  z-index: 9999;
  top: var(--medium);
  right: var(--medium);
  color: var(--white);
  cursor: pointer;

  @media (max-width: 76.8rem) {
    top: var(--small);
    right: var(--small);
  }

  svg {
    transition: color 0.3s ease-in-out;
  }

  &:hover {
    svg {
      color: var(--highlight);
    }
  }
`;

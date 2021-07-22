import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: var(--large) var(--medium);
`;

export const Container = styled.section`
  max-width: var(--container);
  margin: auto;
`;

export const Heading = styled.h1`
  font-size: var(--large);
  margin-top: var(--large);

  @media (max-width: 76.8rem) {
    font-size: 2.8rem;
  }
`;

export const Quotation = styled.q`
  display: block;
  font-size: var(--medium);
  margin-bottom: var(--large);

  @media (max-width: 76.8rem) {
    font-size: 2rem;
  }
`;

export const Body = styled.div`
  margin-bottom: var(--large);

  p {
    margin-bottom: var(--medium);
  }

  ul {
    list-style: none;
  }

  li {
    background-color: #081017;
    padding: 2rem 1.5rem 1rem;
    margin-bottom: 5rem;
  }

  h2 {
    font-size: var(--medium);
    margin-bottom: var(--medium);

    @media (max-width: 76.8rem) {
      font-size: 2.2rem;
    }
  }

  h3 {
    font-size: 2rem;
    color: var(--highlight);
    margin-bottom: var(--small);

    @media (max-width: 76.8rem) {
      font-size: 1.8rem;
    }
  }
`;

export const Gallery = styled.div`
  display: grid;
  grid-gap: var(--medium);

  img {
    background: #f6f7f8;
    background-image: linear-gradient(
      to right,
      #f6f7f8 0%,
      #edeef1 20%,
      #f6f7f8 40%,
      #f6f7f8 100%
    );

    background-size: 80rem 14rem;
    animation: placeholderShimmer 1s linear infinite forwards;

    @keyframes placeholderShimmer {
      0% {
        background-position: -40rem 0;
      }
      100% {
        background-position: 40rem 0;
      }
    }
  }
`;

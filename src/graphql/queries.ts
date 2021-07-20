import { gql } from 'graphql-request';

export const GET_PAGES = gql`
  query getPage($first: Int) {
    pages(first: $first) {
      id
      heading
      slug
      body {
        html
      }
    }
  }
`;

export const GET_PAGE_BY_SLUG = gql`
  query getPageBySlug($slug: String!) {
    page(where: { slug: $slug }) {
      id
      slug
      heading
      body {
        html
      }
    }
  }
`;

export const GET_PLACES = gql`
  query getPlaces {
    places {
      id
      slug
      name
      line
      location {
        latitude
        longitude
      }
      avatar {
        url
      }
      description {
        html
      }
      gallery {
        url
        height
        width
      }
    }
  }
`;

export const GET_PLACE_BY_SLUG = gql`
  query getPlacesBySlug($slug: String!) {
    place(where: { slug: $slug }) {
      id
      slug
      name
      location {
        latitude
        longitude
      }
      description {
        html
        text
      }
      gallery {
        url
        height
        width
      }
    }
  }
`;

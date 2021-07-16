import client from 'graphql/client';
import { useRouter } from 'next/dist/client/router';
import { GetStaticProps } from 'next';

import PlaceTemplate, { PlaceTemplateProps } from 'templates/Places';

import { GET_PLACES, GET_PLACE_BY_SLUG } from 'graphql/queries';

import {
  GetPlacesBySlugQuery,
  GetPlacesQuery
} from 'graphql/generated/graphql';

export default function Page({ place }: PlaceTemplateProps) {
  const router = useRouter();

  if (router.isFallback) return null;

  return <PlaceTemplate place={place} />;
}

export async function getStaticPaths() {
  const { places } = await client.request<GetPlacesQuery>(GET_PLACES, {
    first: 3
  });

  const paths = places.map(({ slug }) => ({
    params: { slug }
  }));

  return { paths, fallback: true };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { place } = await client.request<GetPlacesBySlugQuery>(
    GET_PLACE_BY_SLUG,
    {
      slug: `${params?.slug}`
    }
  );

  if (!place) return { notFound: true };

  return {
    revalidate: 60,
    props: {
      place
    }
  };
};

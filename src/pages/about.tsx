import { useRouter } from 'next/dist/client/router';

import client from 'graphql/client';
import { GET_PAGES } from 'graphql/queries';

import PageTemplate from 'templates/Pages';

export default function AboutPage() {
  const router = useRouter();

  if (router.isFallback) return null;

  return <PageTemplate />;
}

export async function getStaticPaths() {
  const { pages } = await client.request(GET_PAGES);

  const paths = pages.map(({ slug }) => ({
    params: { slug }
  }));

  return { paths, fallback: true };
}

export const getStaticProps = async () => {
  return {
    props: {}
  };
};

/*
 getStaticPaths => serve para gerar as urls em build time
 getStaticProps => serve para buscar os dados da pagina em build time - para sites estaticos
 getServerSideProps => serve para buscar os dados da pagina em runtime - lado do servidor
*/

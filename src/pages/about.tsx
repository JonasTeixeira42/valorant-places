import { GET_PAGES } from 'graphql/queries';

import client from 'graphql/client';

import PageTemplate from 'templates/Pages';

export default function AboutPage() {
  return <PageTemplate />;
}

export const getStaticProps = async () => {
  const { pages } = await client.request(GET_PAGES);

  return {
    props: {}
  };
};

/*
 getStaticPaths => serve para gerar as urls em build time
 getStaticProps => serve para buscar os dados da pagina em build time - para sites estaticos
 getServerSideProps => serve para buscar os dados da pagina em runtime - lado do servidor
*/

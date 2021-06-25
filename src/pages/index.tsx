import Head from 'next/head';

export default function Home({ title = 'React Avançado' }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>{title}</h1>
    </>
  );
}

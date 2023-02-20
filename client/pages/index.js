import Head from 'next/head';

import MainPage from '@/components/MainPage';

export default function Home({ items }) {
  return (
    <>
      <Head>
        <title>Tedski | Management</title>
        <meta name='description' content='=' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.svg' />
      </Head>

      <MainPage initialItems={items} />
    </>
  );
}

Home.getInitialProps = async (ctx) => {
  const res = await fetch('http://localhost:4002/api/items', {
    method: 'GET'
  });

  const { items } = await res.json();

  return { items };
};

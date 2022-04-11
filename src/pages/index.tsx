import type { NextPage } from 'next';
import Head from 'next/head';
import Thing from '../components/MerricksStyledComponent';

const Home: NextPage = () => (
  <div>
    <Head>
      <title>Activities App</title>
      <meta name="description" content="Find activities near you" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <Thing />
    </main>
  </div>
);

export default Home;

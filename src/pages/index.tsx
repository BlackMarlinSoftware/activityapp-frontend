import type { NextPage } from 'next';
import Head from 'next/head';
import { brixtonData } from '../brixtonData';
import ActivityList from '../components/ActivityList';

const Home: NextPage = () => (
  <div>
    <Head>
      <title>Activities App</title>
      <meta name="description" content="Find activities near you" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <ActivityList data={brixtonData} />
    </main>
  </div>
);

export default Home;

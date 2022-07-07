import type { NextPage } from 'next';
import Head from 'next/head';
import { brixtonData } from '../brixtonData';
import ActivityCard from '../components/ActivityCard';

const Home: NextPage = () => (
  <div>
    <Head>
      <title>Activities App</title>
      <meta name="description" content="Find activities near you" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      {brixtonData.activities?.map((activity) => (
        <ActivityCard activity={activity} key={activity.id} />
      ))}
    </main>
  </div>
);

export default Home;

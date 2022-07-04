import type { NextPage } from 'next';
import Head from 'next/head';
import { brixtonData } from '../brixtonData';
import ActivityCard from '../components/activityCard';

const Home: NextPage = () => (
  <div>
    <Head>
      <title>Activities App</title>
      <meta name="description" content="Find activities near you" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <h1>Activities</h1>
      {brixtonData.activities?.map((activity) => (
        <ActivityCard activity={activity} key={activity.id} />
      ))}
    </main>
  </div>
);

export default Home;

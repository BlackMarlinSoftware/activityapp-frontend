import type { NextPage } from 'next';
import Head from 'next/head';
import Thing from '../components/MerricksDemoThing';
import { brixtonData } from '../brixtonData';

const Home: NextPage = () => (
  <div>
    <Head>
      <title>Activities App</title>
      <meta name="description" content="Find activities near you" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <Thing />
      {brixtonData.activities?.map((activity) => (
        <div key={activity.id}>
          <h1>{activity.name}</h1>
          <p>Categories: {activity.categories?.map(({ name }) => name)}</p>
          <p>Location: {activity.location?.name}</p>
          <p>Run by: {activity.host?.name}</p>
          <p>Book now: {activity.referral_url}</p>
        </div>
      ))}
    </main>
  </div>
);

export default Home;

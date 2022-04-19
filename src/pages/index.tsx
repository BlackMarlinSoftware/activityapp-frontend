import type { NextPage } from 'next';
import Head from 'next/head';
import Thing from '../components/MerricksDemoThing';
import { data } from '../data';

const Home: NextPage = () => (
  <div>
    <Head>
      <title>Activities App</title>
      <meta name="description" content="Find activities near you" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <Thing />
      {data.activities.map((activity) => (
        <div key={activity.id}>
          <h1>{activity.name}</h1>
          <p>Category: {activity.category.name}</p>
          <p>Location: {activity.location.name}</p>
          <p>Run by: {activity.host.name}</p>
          <p>Book now: {activity.referral_url}</p>
        </div>
      ))}
    </main>
  </div>
);

export default Home;

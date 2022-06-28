import type { NextPage } from 'next';
import Head from 'next/head';
import { brixtonData } from '../brixtonData';
import { CategoryName } from '../types';

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
        <div key={activity.id}>
          <h2>{activity.name}</h2>
          <p>Categories: {activity.categories?.map(({ name }) => (name ? CategoryName[name] : '')).join(', ')}</p>
          <p>Description: {activity.description}</p>
          <p>Location: {activity.location?.name}</p>
          <p>Run by: {activity.host?.name}</p>
          <p>
            <a href={activity.referral_url || ''} target="_blank" rel="noreferrer">
              Book now
            </a>
          </p>
        </div>
      ))}
    </main>
  </div>
);

export default Home;

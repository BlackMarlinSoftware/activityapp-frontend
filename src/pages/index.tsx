import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { ViewState } from 'react-map-gl';

export const locationViewStates: Record<string, Partial<ViewState>> = {
  Brixton: {
    latitude: 51.4542506,
    longitude: -0.1166653,
    zoom: 13,
  },
  Reigate: {
    latitude: 51.2362084,
    longitude: -0.2066982,
    zoom: 14,
  },
};

const Home: NextPage = () => (
  <div>
    <Head>
      <title>Activities App</title>
      <meta name="description" content="Find activities near you" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <h1>Locations</h1>
      {Object.entries(locationViewStates).map(([location, { latitude, longitude, zoom }]) => (
        <div key={location}>
          <Link href={`/activities?latitude=${latitude}&longitude=${longitude}&zoom=${zoom}`}>
            <a>{location}</a>
          </Link>
        </div>
      ))}
    </main>
  </div>
);

export default Home;

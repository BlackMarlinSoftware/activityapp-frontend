import type { NextPage } from 'next';
import Head from 'next/head';
import { LOCATIONS } from '../types';
import Link from 'next/link';

const Home: NextPage = () => (
  <div>
    <Head>
      <title>Activities App</title>
      <meta name="description" content="Find activities near you" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <h1>Locations</h1>
      {Object.values(LOCATIONS).map((location) => (
        <div key={location}>
          <Link href={`/location/${location}`}>
            <a>{location}</a>
          </Link>
        </div>
      ))}
    </main>
  </div>
);

export default Home;

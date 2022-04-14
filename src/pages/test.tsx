import type { NextPage } from 'next';
import Head from 'next/head';
import Thing from '../components/MerricksDemoThing';

const Test: NextPage = () => (
  <div>
    <Head>
      <title>Activities App</title>
      <meta name="description" content="Find activities near you" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <span>test page</span>
    </main>
  </div>
);

export default Test;

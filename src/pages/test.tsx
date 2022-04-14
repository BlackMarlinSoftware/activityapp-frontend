import type { NextPage } from 'next';
import Head from 'next/head';
import Thing from '../components/MerricksDemoThing';
import Image from 'next/image';

const Test: NextPage = () => (
  <div>
    <Head>
      <title>Activities App</title>
      <meta name="description" content="Find activities near you" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <span>test page</span>
      <Image src="/nodem.png" alt="me" width="500" height="500" />
    </main>
  </div>
);

export default Test;

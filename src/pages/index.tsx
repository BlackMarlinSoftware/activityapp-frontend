import { ApolloError } from '@apollo/client';
import type { NextPage } from 'next';
import Head from 'next/head';
import ActivityList from '../components/ActivityList';
import client from '../apollo-client';
import { Activity } from '../types';
import { ACTIVITIES } from '../queries/activities.query';

interface Props {
  activities: Activity[];
  error?: ApolloError;
}

const Home: NextPage<Props> = ({ activities, error }) => (
  <div>
    <Head>
      <title>Activities App</title>
      <meta name="description" content="Find activities near you" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      {error && <p>{error.message}</p>}
      <ActivityList activities={activities} />
    </main>
  </div>
);

export default Home;

export async function getServerSideProps() {
  const { data, error } = await client.query({
    query: ACTIVITIES,
  });

  return {
    props: {
      activities: data.activities,
      error,
    },
  };
}

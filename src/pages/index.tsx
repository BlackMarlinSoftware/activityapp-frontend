import type { NextPage } from 'next';
import Head from 'next/head';
import ActivityList from '../components/ActivityList';
import client from '../apollo-client';
import { ActivitiesQuery } from '../generated/graphql';
import { ACTIVITIES } from '../queries/activities.query';

interface Props {
  activities: ActivitiesQuery['activities'];
}

const Home: NextPage<Props> = ({ activities }) => (
  <div>
    <Head>
      <title>Activities App</title>
      <meta name="description" content="Find activities near you" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <ActivityList activities={activities} />
    </main>
  </div>
);

export default Home;

export async function getServerSideProps(): Promise<{ props: Props }> {
  const { data } = await client.query<ActivitiesQuery>({
    query: ACTIVITIES,
    fetchPolicy: 'no-cache',
  });

  return {
    props: {
      activities: data.activities,
    },
  };
}

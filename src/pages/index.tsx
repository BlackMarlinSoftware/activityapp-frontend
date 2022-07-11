import type { NextPage } from 'next';
import Head from 'next/head';
import { brixtonData } from '../brixtonData';
import ActivityCard from '../components/activityCard';
import styled from 'styled-components';

// Throwaway container, just didn't want to break the test layout
// as I have removed a nonsense global width.
export const ActivityContainer = styled.div`
  background-color: white;
  width: 700px;
  max-height: 100%;
`;

const Home: NextPage = () => (
  <div>
    <Head>
      <title>Activities App</title>
      <meta name="description" content="Find activities near you" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <ActivityContainer>
        <h1>Activities</h1>
        {brixtonData.activities?.map((activity) => (
          <ActivityCard activity={activity} key={activity.id} />
        ))}
      </ActivityContainer>
    </main>
  </div>
);

export default Home;

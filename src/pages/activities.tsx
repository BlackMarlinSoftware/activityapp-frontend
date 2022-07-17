import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Header from '../components/Header';
import client from '../apollo-client';
import { ACTIVITIES } from '../queries/activities.query';
import MapContainer from '../components/MapContainer';
import styled from 'styled-components';
import { spacing } from '../styles/theme';
import { ActivitiesQuery } from '../generated/graphql';
import { ViewState } from 'react-map-gl';
import ActivityList from '../components/ActivityList';
import { Activities } from '../types';

const PageContainer = styled.div`
  height: 100vh;
  display: grid;
  grid-auto-flow: row;
  grid-template-rows: ${spacing[9]} calc(100vh - ${spacing[9]});
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: ${spacing[15]} 1fr;
`;

interface Props {
  activities: Activities;
}

const ActivitiesPage: NextPage<Props> = ({ activities }) => {
  const router = useRouter();
  const { latitude, longitude, zoom } = router.query;

  if (typeof latitude === 'string' && typeof longitude === 'string' && typeof zoom === 'string') {
    const initialViewState: Partial<ViewState> = {
      latitude: Number(latitude),
      longitude: Number(longitude),
      zoom: Number(zoom),
    };

    return (
      <PageContainer>
        <Header />
        <Container>
          <ActivityList activities={activities} />
          <MapContainer activities={activities} initialViewState={initialViewState} />
        </Container>
      </PageContainer>
    );
  }

  return (
    <>
      <Header />
      <h2>Invalid search. Try again.</h2>
    </>
  );
};

export default ActivitiesPage;

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

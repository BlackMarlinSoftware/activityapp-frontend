import { GetServerSideProps, NextPage } from 'next';
import Header from '../components/Header';
import client from '../apollo-client';
import { LOCATIONS_ACTIVITIES_IN_RADIUS } from '../queries/locationActivities.query';
import MapContainer from '../components/MapContainer';
import styled from 'styled-components';
import { spacing } from '../styles/theme';
import { LocationsActivitiesInRadiusQuery, LocationsActivitiesInRadiusQueryVariables } from '../generated/graphql';
import ActivityList from '../components/ActivityList';
import { Activities } from '../types';
import { currentMapState, MapCoords } from '../reactiveVars/map';

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
  initialActivities?: Activities;
  initialMapCoords?: MapCoords;
}

const ActivitiesPage: NextPage<Props> = ({ initialActivities, initialMapCoords }) => {
  if (initialActivities && initialMapCoords) {
    return (
      <PageContainer>
        <Header />
        <Container>
          <ActivityList activities={initialActivities} />
          <MapContainer activities={initialActivities} initialViewState={initialMapCoords} />
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

export const getServerSideProps: GetServerSideProps = async (context): Promise<{ props: Props }> => {
  const { latitude, longitude, zoom } = context.query;

  if (typeof latitude === 'string' && typeof longitude === 'string' && typeof zoom === 'string') {
    const initialMapCoords: MapCoords = {
      latitude: Number(latitude),
      longitude: Number(longitude),
      zoom: Number(zoom),
    };

    currentMapState(initialMapCoords);

    const { data } = await client.query<LocationsActivitiesInRadiusQuery, LocationsActivitiesInRadiusQueryVariables>({
      query: LOCATIONS_ACTIVITIES_IN_RADIUS,
      fetchPolicy: 'no-cache',
      variables: initialMapCoords,
    });

    return {
      props: {
        initialActivities: data.locations_in_radius,
        initialMapCoords: initialMapCoords,
      },
    };
  }

  return { props: {} };
};

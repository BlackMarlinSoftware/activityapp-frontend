import { GetServerSideProps, NextPage } from 'next';
import Header from '../components/Header';
import client from '../apollo-client';
import { LOCATIONS_IN_RADIUS } from '../queries/locations.query';
import MapContainer from '../components/MapContainer';
import styled from 'styled-components';
import { spacing } from '../styles/theme';
import { ActivityDataFragment, LocationsInRadiusQuery, LocationsInRadiusQueryVariables } from '../generated/graphql';
import ActivityList from '../components/ActivityList';
import { MapCoords } from '../reactiveVars/map';
import { Activity, Location } from '../types';

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
  loading: boolean;
  initialLocations?: Location[];
  initialActivities?: Activity[];
  initialMapCoords?: MapCoords;
}

const ActivitiesPage: NextPage<Props> = ({ loading, initialLocations, initialActivities, initialMapCoords }) => {
  if (initialLocations && initialActivities && initialMapCoords) {
    return (
      <PageContainer>
        <Header />
        <Container>
          <ActivityList activities={initialActivities} />
          <MapContainer locations={initialLocations} initialViewState={initialMapCoords} />
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

    const {
      data: { locations_in_radius },
      loading,
    } = await client.query<LocationsInRadiusQuery, LocationsInRadiusQueryVariables>({
      query: LOCATIONS_IN_RADIUS,
      fetchPolicy: 'no-cache',
      variables: { latitude: initialMapCoords.latitude, longitude: initialMapCoords.longitude, radius: 2000 },
    });

    const activities: ActivityDataFragment[] = [];
    locations_in_radius.forEach((location) => {
      activities.push(...location.activities);
    });

    return {
      props: {
        loading,
        initialLocations: locations_in_radius,
        initialActivities: activities,
        initialMapCoords: initialMapCoords,
      },
    };
  }

  return { props: { loading: false } };
};

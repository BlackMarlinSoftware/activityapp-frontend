import { GetServerSideProps, NextPage } from 'next';
import Header from '../components/Header';
import client from '../apollo-client';
import { LOCATIONS_IN_VIEWPORT } from '../queries/locations.query';
import MapContainer from '../components/MapContainer';
import styled from 'styled-components';
import { spacing } from '../styles/theme';
import {
  ActivityDataFragment,
  LocationsInViewportQuery,
  LocationsInViewportQueryVariables,
} from '../generated/graphql';
import ActivityList from '../components/ActivityList';
import { MapCoords, MapViewportState } from '../reactiveVars/map';
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
  mapCoords: MapCoords;
  locations: Location[];
  activities: Activity[];
}

const ActivitiesPage: NextPage<Props> = ({ mapCoords, locations, activities }) => (
  <PageContainer>
    <Header />
    <Container>
      <ActivityList activities={activities} />
      <MapContainer locations={locations} initialViewState={mapCoords} />
    </Container>
  </PageContainer>
);

export default ActivitiesPage;

const queryParamsToNumberOrZero = (params: Record<string, string | string[] | undefined>): Record<string, number> => {
  const convertedParams: Record<string, number> = {};

  Object.keys(params).map((key) => {
    const currentValue = params[key];
    let newValue = 0;
    if (typeof currentValue === 'string') {
      const numericParam = Number(currentValue);
      if (!isNaN(numericParam)) newValue = numericParam;
    }
    convertedParams[key] = newValue;
  });

  return convertedParams;
};

export const getServerSideProps: GetServerSideProps = async (context): Promise<{ props: Props }> => {
  const mapCoords = queryParamsToNumberOrZero({
    latitude: context.query.latitude,
    longitude: context.query.longitude,
    zoom: context.query.zoom,
  }) as unknown as MapCoords;

  const mapViewportState = queryParamsToNumberOrZero({
    viewportLatitudeMin: context.query.viewportLatitudeMin,
    viewportLatitudeMax: context.query.viewportLatitudeMax,
    viewportLongitudeMin: context.query.viewportLongitudeMin,
    viewportLongitudeMax: context.query.viewportLongitudeMax,
  }) as unknown as MapViewportState;

  const {
    data: { locations },
  } = await client.query<LocationsInViewportQuery, LocationsInViewportQueryVariables>({
    query: LOCATIONS_IN_VIEWPORT,
    fetchPolicy: 'no-cache',
    variables: mapViewportState,
  });

  const activities: ActivityDataFragment[] = [];
  locations.forEach((location) => {
    activities.push(...location.activities);
  });

  return {
    props: {
      mapCoords,
      locations,
      activities,
    },
  };
};

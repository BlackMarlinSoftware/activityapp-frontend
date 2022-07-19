import { GetServerSideProps } from 'next';
import { Props } from '../pages/activities';
import { MapCoords, MapViewportState } from '../reactiveVars/map';
import { queryParamsToNumberOrZero } from './query.utils';
import client from '../apollo-client';
import {
  ActivityDataFragment,
  LocationsInViewportQuery,
  LocationsInViewportQueryVariables,
} from '../generated/graphql';
import { LOCATIONS_IN_VIEWPORT } from '../queries/locations.query';

export const getActivitiesPageServerProps: GetServerSideProps = async (context): Promise<{ props: Props }> => {
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

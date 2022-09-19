import { GetServerSideProps } from 'next';
import { Props } from '../../pages/activities';
import { MapCoords, MapViewportState } from '../../reactiveVars/map';
import { queryParamsToNumberOrZero } from '../query.utils';
import { addApolloState, initializeApollo } from '../../apollo-client';
import {
  ActivityListingFragment,
  LocationsInViewportQuery,
  LocationsInViewportQueryVariables,
} from '../../generated/graphql';
import { LOCATIONS_IN_VIEWPORT } from '../../queries/locations.query';

const paginationSize = 2;

export const getActivitiesPageServerProps: GetServerSideProps = async (context): Promise<{ props: Props }> => {
  const apolloClient = initializeApollo();

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

  const { page } = queryParamsToNumberOrZero({ page: context.query.page });
  const offset = page < 1 ? 0 : (page - 1) * paginationSize;

  try {
    const {
      data: { locations, activities_aggregate },
    } = await apolloClient.query<LocationsInViewportQuery, LocationsInViewportQueryVariables>({
      query: LOCATIONS_IN_VIEWPORT,
      fetchPolicy: 'no-cache',
      variables: { ...mapViewportState, offset, limit: paginationSize },
    });

    const activities: ActivityListingFragment[] = [];
    locations.forEach((location) => {
      activities.push(...location.activities);
    });

    const totalActivities = activities_aggregate.aggregate?.count;

    const props: Props = {
      mapCoords,
      locations,
      activities,
      mapViewportState,
      totalActivities,
      page,
    };

    return addApolloState(apolloClient, {
      props,
    });
  } catch (err) {
    console.error(err);

    const props: Props = {
      mapCoords,
      locations: [],
      activities: [],
      mapViewportState,
      error: 'Could not fetch activities',
      page: 1,
    };

    return addApolloState(apolloClient, {
      props,
    });
  }
};

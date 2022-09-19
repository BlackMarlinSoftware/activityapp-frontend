import { gql } from '@apollo/client';
import {
  FRAGMENT_CATEGORY,
  FRAGMENT_HOST,
  FRAGMENT_LOCATION,
  FRAGMENT_MEDIA,
  FRAGMENT_ACTIVITY,
} from './fragments.query';

export const FRAGMENT_ACTIVITY_LISTING = gql`
  ${FRAGMENT_LOCATION}
  ${FRAGMENT_HOST}
  ${FRAGMENT_CATEGORY}
  ${FRAGMENT_MEDIA}
  ${FRAGMENT_ACTIVITY}

  fragment ActivityListing on activities {
    ...ActivityData
    location {
      ...LocationData
    }
    host {
      ...HostData
    }
    activities_x_categories {
      category {
        ...CategoryData
      }
    }
    activities_x_media {
      media {
        ...MediaData
      }
    }
  }
`;

export const LOCATIONS_IN_VIEWPORT = gql`
  ${FRAGMENT_LOCATION}
  ${FRAGMENT_ACTIVITY_LISTING}

  query LocationsInViewport(
    $viewportLatitudeMin: numeric!
    $viewportLatitudeMax: numeric!
    $viewportLongitudeMin: numeric!
    $viewportLongitudeMax: numeric!
    $offset: Int!
    $limit: Int!
  ) {
    locations(
      offset: $offset
      limit: $limit
      where: {
        lat: { _gte: $viewportLatitudeMin, _lte: $viewportLatitudeMax }
        long: { _gte: $viewportLongitudeMin, _lte: $viewportLongitudeMax }
      }
    ) {
      ...LocationData
      activities {
        ...ActivityListing
      }
    }
    activities_aggregate(
      where: {
        location: {
          lat: { _gte: $viewportLatitudeMin, _lte: $viewportLatitudeMax }
          long: { _gte: $viewportLongitudeMin, _lte: $viewportLongitudeMax }
        }
      }
    ) {
      aggregate {
        count
      }
    }
  }
`;

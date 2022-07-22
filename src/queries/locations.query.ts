import { gql } from '@apollo/client';

export const FRAGMENT_HOST = gql`
  fragment HostData on hosts {
    id
    name
    logo_url
  }
`;

export const FRAGMENT_CATEGORY = gql`
  fragment CategoryData on categories {
    id
    name
    level
  }
`;

export const FRAGMENT_MEDIA = gql`
  fragment MediaData on media {
    id
    path
    caption
  }
`;

export const FRAGMENT_LOCATION = gql`
  fragment LocationData on locations {
    id
    address
    postcode
    lat
    long
    name
    outdoors
    directions
  }
`;

export const FRAGMENT_ACTIVITY = gql`
  ${FRAGMENT_LOCATION}
  ${FRAGMENT_HOST}
  ${FRAGMENT_CATEGORY}
  ${FRAGMENT_MEDIA}

  fragment ActivityData on activities {
    id
    name
    description
    referral_url
    referral_phone
    referral_email
    booking_required
    group_size_min
    group_size_max
    physical_intensity_min
    physical_intensity_max
    age_min
    age_max
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
  ${FRAGMENT_ACTIVITY}

  query LocationsInViewport(
    $viewportLatitudeMin: numeric!
    $viewportLatitudeMax: numeric!
    $viewportLongitudeMin: numeric!
    $viewportLongitudeMax: numeric!
  ) {
    locations(
      where: {
        lat: { _gte: $viewportLatitudeMin, _lte: $viewportLatitudeMax }
        long: { _gte: $viewportLongitudeMin, _lte: $viewportLongitudeMax }
      }
    ) {
      ...LocationData
      activities {
        ...ActivityData
      }
    }
  }
`;

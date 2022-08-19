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
    intensity_level
    experience_level
    age_min
    age_max
  }
`;

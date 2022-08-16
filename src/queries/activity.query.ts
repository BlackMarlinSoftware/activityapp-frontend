import { gql } from '@apollo/client';
import {
  FRAGMENT_ACTIVITY,
  FRAGMENT_CATEGORY,
  FRAGMENT_HOST,
  FRAGMENT_LOCATION,
  FRAGMENT_MEDIA,
} from './fragments.query';

export const ACTIVITY_DETAILS = gql`
  ${FRAGMENT_ACTIVITY}
  ${FRAGMENT_CATEGORY}
  ${FRAGMENT_HOST}
  ${FRAGMENT_LOCATION}
  ${FRAGMENT_MEDIA}

  query ActivityDetails($activityId: uuid!) {
    activities_by_pk(id: $activityId) {
      ...ActivityData
      location {
        ...LocationData
      }
      host {
        ...HostData
        activities_aggregate {
          aggregate {
            count
          }
        }
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
  }
`;

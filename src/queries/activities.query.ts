import { gql } from '@apollo/client';

export const ACTIVITIES = gql`
  query Activities {
    activities {
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
      host {
        id
        name
        logo_url
      }
      activities_x_categories {
        category {
          id
          name
          level
        }
      }
      location {
        id
        name
        address
        postcode
        lat
        long
        outdoors
        directions
      }
      activities_x_media {
        media {
          id
          path
          caption
        }
      }
    }
  }
`;

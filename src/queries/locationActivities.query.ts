import { gql } from '@apollo/client';

export const LOCATIONS_ACTIVITIES_IN_RADIUS = gql`
  query LocationsActivitiesInRadius($latitude: numeric, $longitude: numeric, $radius: Int) {
    locations_in_radius(args: { location_lat: $latitude, location_long: $longitude, radius: $radius }) {
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
        activities_x_media {
          media {
            id
            path
            caption
          }
        }
      }
      address
      postcode
      lat
      long
      name
      outdoors
      directions
    }
  }
`;

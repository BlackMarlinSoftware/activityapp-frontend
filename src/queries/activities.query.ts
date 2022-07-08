import { gql } from '@apollo/client';

export const ACTIVITIES = gql`
  query Activities {
    activities {
      name
    }
  }
`;

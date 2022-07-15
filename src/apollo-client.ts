import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://jmg-activities.hasura.app/v1/graphql',
  cache: new InMemoryCache(),
  headers: {
    'x-hasura-admin-secret': process.env.NEXT_PUBLIC_DELETE_ME_TEMP_HASURA_ADMIN_KEY || '',
  },
});

export default client;

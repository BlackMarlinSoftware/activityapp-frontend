import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://jmg-activities.hasura.app/v1/graphql',
  cache: new InMemoryCache(),
  headers: {
    'x-hasura-admin-secret': 'R8Cm3uc63qEH7Vi65UBZYDbCJc58S0XRib2jLzIvmI4ctp8MgHT9riFZiJVQZEhO',
  },
});

export default client;

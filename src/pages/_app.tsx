import { ApolloProvider } from '@apollo/client';
import { AppContext, AppInitialProps } from 'next/app';
import { useApollo } from '../apollo-client';
import GlobalStyles from '../styles/GlobalStyles';

function App({ Component, pageProps }: AppContext & AppInitialProps) {
  const apolloClient = useApollo(pageProps);

  return (
    <ApolloProvider client={apolloClient}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default App;


import SpaceXLaunchList from "./SpaceXLaunchList";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

// Initialize Apollo Client

const client = new ApolloClient({
  uri: 'https://api.spacex.land/graphql/',
  cache:new InMemoryCache(),
  },
);
const App = () => (
  <ApolloProvider client={client}>
    <SpaceXLaunchList />
  </ApolloProvider>
);
export default App;


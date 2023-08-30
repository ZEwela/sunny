import { ApolloClient, InMemoryCache } from "@apollo/client";

const {
  EXPO_PUBLIC_REACT_APP_STEPZEN_API_KEY,
  EXPO_PUBLIC_REACT_APP_STEPZEN_ENDPOINT,
} = process.env;

export const apolloClient = new ApolloClient({
  headers: {
    Authorization: `Apikey ${EXPO_PUBLIC_REACT_APP_STEPZEN_API_KEY}`,
  },
  uri: EXPO_PUBLIC_REACT_APP_STEPZEN_ENDPOINT,
  cache: new InMemoryCache(),
});

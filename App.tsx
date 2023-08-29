import { TailwindProvider } from "tailwind-rn";
import utilities from "./tailwind.json";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./navigator/RootNavigator";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  gql,
} from "@apollo/client";

const { EXPO_PUBLIC_REACT_APP_STEPZEN_API_KEY } = process.env;

const client = new ApolloClient({
  headers: {
    Authorization: `Apikey ${EXPO_PUBLIC_REACT_APP_STEPZEN_API_KEY}`,
  },
  uri: "https://prigorodnoye.stepzen.net/api/crusty-chicken/__graphql",
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    // @ts-ignore
    <TailwindProvider utilities={utilities}>
      <ApolloProvider client={client}>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </ApolloProvider>
    </TailwindProvider>
  );
}

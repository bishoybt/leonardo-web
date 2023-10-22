import { HttpLink, from } from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import {
  NextSSRInMemoryCache,
  NextSSRApolloClient,
} from "@apollo/experimental-nextjs-app-support/ssr";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";

export const { getClient } = registerApolloClient(() => {
  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
      graphQLErrors.forEach(({ message, locations, path }) =>
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
        )
      );
    if (networkError) console.log(`[Network error]: ${networkError}`);
  });
  
  const httpLink = new HttpLink({ uri: 'https://countries.trevorblades.com' })

  return new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache(),
    link: from([errorLink, httpLink]),
  });
});
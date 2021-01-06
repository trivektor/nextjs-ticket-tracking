import {ApolloProvider} from "@apollo/client"
import {Provider} from 'next-auth/client'
import {ApolloClient, InMemoryCache, HttpLink} from '@apollo/client'
import "../styles/tailwind.css";
import "../styles/app.css";

function MyApp({ Component, pageProps }) {
  const client = new ApolloClient({
    link: new HttpLink({
      uri: "/api/graphql",
    }),
    cache: new InMemoryCache()
  })

  return (
    <ApolloProvider client={client}>
      <Provider session={pageProps.session}>
        <Component {...pageProps} />
      </Provider>
    </ApolloProvider>
  );
}

export default MyApp

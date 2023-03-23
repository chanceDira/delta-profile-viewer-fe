import {ApolloClient,InMemoryCache} from "@apollo/client";

export const getApolloClient = () => {
    return new ApolloClient({
        uri: 'https://capstone-project-backend-rho.vercel.app/api/graphql',
        cache: new InMemoryCache()
      });
};


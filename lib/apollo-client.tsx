import {ApolloClient,InMemoryCache} from "@apollo/client";

export const getApolloClient = () => {
    return new ApolloClient({
        uri: 'http://ec2-54-160-113-255.compute-1.amazonaws.com:3000/api/graphql',
        cache: new InMemoryCache()
      });
};


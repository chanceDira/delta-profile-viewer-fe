import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import { getApolloClient } from "../lib/apollo-client";

export default function App({ Component, pageProps }: AppProps) {
  const client = getApolloClient();
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />;
    </ApolloProvider>
  );
}

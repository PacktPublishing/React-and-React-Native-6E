import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  cache: new InMemoryCache(),
  headers: {
    Authorization: `Bearer YOUR_PAT`, // Put your GitHub personal access token here
  },
});

createRoot(document.getElementById("root")!).render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://e6aa-54-37-203-255.ngrok-free.app/shop-api", // Change this to your Vendure Shop API endpoint
  cache: new InMemoryCache(),
});

export default client;

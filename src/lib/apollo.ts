import { ApolloClient, InMemoryCache, makeVar } from "@apollo/client";

const TOKEN = "token";
export const isLoggedInVar = makeVar(Boolean(localStorage.getItem(TOKEN)));
export const logUserIn = (token: string) => {
  localStorage.setItem(TOKEN, token);
  isLoggedInVar(true);
};
export const logUserOut = () => {
  isLoggedInVar(false);
  localStorage.removeItem(TOKEN);
};
export const darkModeVar = makeVar(false);

export const client = new ApolloClient({
  uri: "http://localhost:4334/graphql",
  cache: new InMemoryCache(),
});

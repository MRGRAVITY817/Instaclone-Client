import Home from "./screens/Home";
import Login from "./screens/Login";
import { ApolloProvider, useReactiveVar } from "@apollo/client";
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { client, darkModeVar, isLoggedInVar } from "./lib/apollo";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme, GlobalStyles } from "./style";
import SignUp from "./screens/SignUp";
import routes from "./screens/routes";
import { HelmetProvider } from "react-helmet-async";
import { Layout } from "./components/auth/Layout";
import Profile from "./screens/Profile";

const App = () => {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  const darkMode = useReactiveVar(darkModeVar);
  return (
    <ApolloProvider client={client}>
      <HelmetProvider>
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
          <GlobalStyles />
          <Router>
            <Switch>
              <Route path={routes.home} exact>
                <Layout>{isLoggedIn ? <Home /> : <Login />}</Layout>
              </Route>
              {!isLoggedIn ? (
                <Route path={routes.signUp} exact>
                  <SignUp />
                </Route>
              ) : null}
              <Route path={`/users/:username`}>
                <Layout>
                  <Profile />
                </Layout>
              </Route>
              <Route>
                <Redirect to={routes.home} />
              </Route>
            </Switch>
          </Router>
        </ThemeProvider>
      </HelmetProvider>
    </ApolloProvider>
  );
};

export default App;

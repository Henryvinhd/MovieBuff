import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { Container } from "reactstrap";

import PrivateRoute from "./components/PrivateRoute";
import Loading from "./components/Loading";
import NavBar from "./components/NavBar";
import Home from "./views/Home";
import Profile from "./views/Profile";
import UserSettings from './views/UserSettings';
import SearchPage from "./views/SearchPage";
import AboutUs from "./views/AboutUs";
import { useAuth0 } from "./react-auth0-spa";
import history from "./utils/history";
import Hero from "./components/Hero";
import Grid from 'semantic-ui-css';

// styles
import "./App.css";

// fontawesome
import initFontAwesome from "./utils/initFontAwesome";
initFontAwesome();

const App = () => {
  const { loading } = useAuth0();

  if (loading) {
    return <Loading />;
  }

  return (
    <Router history={history}>
     <div id="app" >
        <NavBar />
        <Hero />
        <Container>
          <Switch>
            <Route path="/" exact component={Home} />
            <PrivateRoute path="/profile" component={Profile} />
            <PrivateRoute path="/searchpage" component={SearchPage} />
            <PrivateRoute path="/aboutus" component={AboutUs} />
            <PrivateRoute path="/usersettings" component={UserSettings} />
          </Switch>
        </Container>
      </div> 
    </Router>
  );
};

export default App;

import React, { useState } from "react";
import { Container } from "@material-ui/core";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import NavBar from "./components/nav_bar/NavBar";
import Home from "./components/Home/Home";
import Available from "./components/students/Available";
// import Auth from "./components/Auth/Auth";

const App = () => {
  const [nav, setNav] = useState(0);
  return (
    <BrowserRouter>
      <Container maxWidth="lg">
        <NavBar setNav={setNav} />
        <Switch>
          <Route
            path="/"
            exact
            // component={Home}Home
            render={(props) => <Home {...props} nav={nav} />}
            // component={<Home nav={nav} />          }
          />
          {/* <Route path="/available" exact component={Available} /> */}
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default App;

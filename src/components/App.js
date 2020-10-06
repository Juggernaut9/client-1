import React from "react";
import { Switch, Route } from "react-router-dom";

import { TokenProvider } from "../contexts/token.context";
import { ImagesProvider } from "../contexts/images.context";
import Landing from "./Landing";
import Header from "./Header";
import Login from "./Login";
import useStyles from "../styles/AppStyles";

function App() {
  const classes = useStyles();
  return (
    <TokenProvider>
      <ImagesProvider>
        <div className={classes.root}>
          <Switch>
            <Route
              path="/"
              exact
              render={() => (
                <>
                  <Header />
                  <Landing />
                </>
              )}
            />
            <Route path="/login" exact render={() => <Login />} />
            <Route render={() => <h1>404</h1>} />
          </Switch>
        </div>
      </ImagesProvider>
    </TokenProvider>
  );
}

export default App;

import React from "react";
import { Route, Switch } from "react-router-dom";
import Palette from "./Palette";
import seedColors from "./seedColors";
import colorsHelper from "./colorsHelper";

function App() {
  return (
    <Switch>
      <Route exact path="/" />
      <Route
        exact
        path="/palette/:id"
        render={() => <h1>Welcome to the route</h1>}
      />
    </Switch>
    // <div>
    //   <Palette palette={colorsHelper(seedColors[4])} />
    // </div>
  );
}

export default App;

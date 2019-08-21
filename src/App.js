import React from "react";
import { Route, Switch } from "react-router-dom";
import Palette from "./Palette";
import PaletteList from "./PaletteList";
import seedColors from "./seedColors";
import colorsHelper from "./colorsHelper";

const findPalette = id => {
  return seedColors.find(palette => palette.id === id);
};
function App() {
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={() => <PaletteList palettes={seedColors} />}
      />
      <Route
        exact
        path="/palette/:id"
        render={routeProps => (
          <Palette
            palette={colorsHelper(findPalette(routeProps.match.params.id))}
          />
        )}
      />
    </Switch>
    // <div>
    //   <Palette palette={colorsHelper(seedColors[4])} />
    // </div>
  );
}

export default App;

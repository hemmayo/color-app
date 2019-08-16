import React from "react";
import Palette from "./Palette";
import seedColors from "./seedColors";
import colorsHelper from "./colorsHelper";

function App() {
  return (
    <div>
      <Palette palette={colorsHelper(seedColors[4])} />
    </div>
  );
}

export default App;

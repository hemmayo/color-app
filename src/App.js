import React from "react";
import Palette from "./Palette";
import seedColors from "./seedColors";
import colorsHelper from "./colorsHelper";

console.log(colorsHelper(seedColors[4]));

function App() {
  return (
    <div>
      <Palette {...seedColors[4]} />
    </div>
  );
}

export default App;

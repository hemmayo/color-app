import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class PaletteList extends Component {
  render() {
    const { palettes } = this.props;
    return (
      <div>
        <h1>React colors</h1>
        {palettes.map((palette, idx) => (
          <p key={idx}>
            <Link to={`/palette/${palette.id}`}>{palette.paletteName}</Link>
          </p>
        ))}
      </div>
    );
  }
}

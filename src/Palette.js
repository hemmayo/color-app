import React, { Component } from "react";
import ColorBox from "./ColorBox";
import "./Palette.css";

export default class Palette extends Component {
  render() {
    const colorBoxes = this.props.colors.map((color, i) => (
      <ColorBox key={i} {...color} />
    ));
    return (
      <div className="Palette">
        {/* Navbar goes here  */}
        {/* <h1>{this.props.paletteName}</h1> */}
        <div className="Palette-colors">{colorBoxes} </div>
        {/* Footer goes here */}
      </div>
    );
  }
}

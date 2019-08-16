import React, { Component } from "react";
import ColorBox from "./ColorBox";
import "rc-slider/assets/index.css";
import "./Palette.css";
import Navbar from "./Navbar";

export default class Palette extends Component {
  state = {
    level: 400
  };

  changeLevel = level => {
    this.setState({ level });
  };

  render() {
    const { level } = this.state;
    const { palette } = this.props;
    const colorBoxes = palette.colors[level].map((color, i) => (
      <ColorBox key={i} {...color} />
    ));
    return (
      <div className="Palette">
        {/* Navbar goes here  */}
        <Navbar changeLevel={this.changeLevel} level={level} />
        {/* <h1>{this.props.paletteName}</h1> */}
        <div className="Palette-colors">{colorBoxes} </div>
        {/* Footer goes here */}
      </div>
    );
  }
}

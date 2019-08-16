import React, { Component } from "react";
import Slider from "rc-slider";
import ColorBox from "./ColorBox";
import "./Palette.css";
import "rc-slider/assets/index.css";

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
        <Slider
          defaultValue={this.state.level}
          min={100}
          max={900}
          step={100}
          onAfterChange={this.changeLevel}
        />
        {/* <h1>{this.props.paletteName}</h1> */}
        <div className="Palette-colors">{colorBoxes} </div>
        {/* Footer goes here */}
      </div>
    );
  }
}

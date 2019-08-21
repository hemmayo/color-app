import React, { Component } from "react";
import ColorBox from "./ColorBox";
import "rc-slider/assets/index.css";
import "./Palette.css";
import Navbar from "./Navbar";

export default class Palette extends Component {
  state = {
    level: 400,
    format: "hex",
    snackbarIsOpen: false
  };

  changeLevel = level => {
    this.setState({ level });
  };

  changeFormat = e => {
    this.setState({ format: e.target.value, snackbarIsOpen: true });
  };

  closeSnackbar = () => {
    this.setState({ snackbarIsOpen: false });
  };

  render() {
    const { level, format, snackbarIsOpen } = this.state;
    const { palette } = this.props;
    const colorBoxes = palette.colors[level].map((color, i) => (
      <ColorBox key={i} format={format} {...color} />
    ));
    return (
      <div className="Palette">
        {/* Navbar goes here  */}
        <Navbar
          snackbarIsOpen={snackbarIsOpen}
          closeSnackbar={this.closeSnackbar}
          changeFormat={this.changeFormat}
          format={format}
          changeLevel={this.changeLevel}
          level={level}
        />
        {/* <h1>{this.props.paletteName}</h1> */}
        <div className="Palette-colors">{colorBoxes} </div>
        <footer className="Palette-footer">
          {palette.paletteName}
          <span className="footer-emoji">{palette.emoji}</span>
        </footer>
      </div>
    );
  }
}

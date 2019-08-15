import React, { Component } from "react";

export default class Palette extends Component {
  render() {
    return (
      <div>
        {/* Navbar goes here  */}
        <div className="Palette-colors" />
        <h1>{this.props.paletteName}</h1>
        {/* Footer goes here */}
      </div>
    );
  }
}

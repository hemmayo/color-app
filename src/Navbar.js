import React, { Component } from "react";
import Slider from "rc-slider";
import "./Navbar.css";

export default class Navbar extends Component {
  render() {
    const { changeLevel, level } = this.props;
    return (
      <nav className="Navbar">
        <div className="logo">colorapp</div>
        <div className="level-container">
          <span>Level: {level}</span>
          <Slider
            className="slider"
            defaultValue={level}
            min={100}
            max={900}
            step={100}
            onChange={changeLevel}
          />
        </div>
      </nav>
    );
  }
}

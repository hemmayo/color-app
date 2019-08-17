import React, { Component } from "react";
import Slider from "rc-slider";
import Select from "@material-ui/core/Select";
import "./Navbar.css";
import { MenuItem } from "@material-ui/core";

export default class Navbar extends Component {
  render() {
    const { changeFormat, changeLevel, level, format } = this.props;
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
        <div className="select-container">
          <Select value={format} onChange={changeFormat}>
            <MenuItem value="hex">HEX - #ffffff</MenuItem>
            <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
            <MenuItem value="rgba">RGBA - rgba(255,255,255, 1)</MenuItem>
          </Select>
        </div>
      </nav>
    );
  }
}

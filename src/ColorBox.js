import React, { Component } from "react";
import "./ColorBox.css";

export default class ColorBox extends Component {
  render() {
    const { color, name } = this.props;
    return (
      <div className="ColorBox" style={{ backgroundColor: color }}>
        <button className="copy-button">Copy</button>
        <div className="box-content">
          <span>{name}</span>
          <span className="see-more">MORE</span>
        </div>
      </div>
    );
  }
}

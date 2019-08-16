import React, { Component } from "react";
import CopyContainer from "react-copy-to-clipboard";
import "./ColorBox.css";

export default class ColorBox extends Component {
  state = {
    copied: false
  };
  handleColorCopy = () => {
    this.setState({ copied: true }, () =>
      setTimeout(() => this.setState({ copied: false }), 1500)
    );
  };
  render() {
    const { hex: color, name } = this.props;
    const { copied } = this.state;
    return (
      <CopyContainer text={color} onCopy={this.handleColorCopy}>
        <div className={`ColorBox ${copied && "show"}`} style={{ color }}>
          <button className="copy-button">Copy</button>
          <div className={`copy-overlay-text ${copied && "show"}`}>
            <h1>Copied</h1>
            <span>{color}</span>
          </div>
          <div className="box-content">
            <span>{name}</span>
            <span className="see-more">MORE</span>
          </div>
        </div>
      </CopyContainer>
    );
  }
}

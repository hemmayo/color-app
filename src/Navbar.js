import React, { Component } from "react";
import Slider from "rc-slider";
import "./Navbar.css";
import { Select, MenuItem, IconButton, Snackbar } from "@material-ui/core";
import { Close as CloseIcon } from "@material-ui/icons";

export default class Navbar extends Component {
  render() {
    const {
      changeFormat,
      changeLevel,
      snackbarIsOpen,
      closeSnackbar,
      level,
      format
    } = this.props;
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
          <Snackbar
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            open={snackbarIsOpen}
            onClose={closeSnackbar}
            autoHideDuration={1500}
            message={
              <span id="message-id">
                Format changed to {format.toUpperCase()}!
              </span>
            }
            contentProps={{
              "aria-describedby": "message-id"
            }}
            action={
              <IconButton
                onClick={closeSnackbar}
                color="inherit"
                key="close"
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
            }
          />
        </div>
      </nav>
    );
  }
}

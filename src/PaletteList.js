import React, { Component } from "react";
import { Link } from "react-router-dom";
import MiniPalette from "./MiniPalette";
import { withStyles } from "@material-ui/styles";

const styles = {
  root: {
    backgroundColor: "blue",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start"
  },
  container: {
    width: "50%",
    margin: "auto",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap"
  },
  nav: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between"
  },
  palettes: {
    boxSizing: "border-box",
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridGap: "5%",
    width: "100%"
  }
};

class PaletteList extends Component {
  render() {
    const { palettes, classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1>React colors</h1>
          </nav>
          <div className={classes.palettes}>
            {palettes.map((palette, idx) => (
              <MiniPalette key={idx} {...palette} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(PaletteList);

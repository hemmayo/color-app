import React from "react";
import { withStyles } from "@material-ui/styles";

const styles = {
  root: {
    backgroundColor: "white",
    position: "relative",
    overflow: "hidden",
    borderRadius: "5px",
    padding: "0.5rem",
    cursor: "pointer"
  },
  colors: {
    backgroundColor: "grey",
    height: "10vh"
  },
  title: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "1rem",
    paddingTop: "0.5rem"
  },
  emoji: {}
};
function MiniPalette(props) {
  const { classes, paletteName: name, emoji } = props;
  return (
    <div className={classes.root}>
      <div className={classes.colors} />
      <div className={classes.title}>
        {name} <span className={classes.emoji}>{emoji}</span>
      </div>
    </div>
  );
}

export default withStyles(styles)(MiniPalette);

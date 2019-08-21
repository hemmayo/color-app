import React from "react";
import { withStyles } from "@material-ui/styles";

const styles = {
  root: {
    backgroundColor: "white",
    position: "relative",
    overflow: "hidden",
    borderRadius: "5px",
    padding: "0.5rem",
    cursor: "pointer",
    width: "100%"
  },
  colors: {
    backgroundColor: "#dae1e4",
    height: "150px",
    width: "100%",
    borderRadius: "5px",
    overflow: "hidden"
  },
  title: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "1rem",
    paddingTop: "0.5rem"
  },
  emoji: {},
  miniColor: {
    height: "25%",
    width: "20%",
    display: "inline-block",
    margin: "0 auto",
    position: "relative",
    marginBottom: "-3.5px"
  }
};

function MiniPalette(props) {
  const { classes, paletteName: name, emoji, colors, id, goToPalette } = props;
  const miniColorboxes = colors.map(color => (
    <div
      className={classes.miniColor}
      style={{ backgroundColor: color.color }}
      key={color.name}
    />
  ));

  const handleClick = () => {
    goToPalette(id);
  };

  return (
    <div className={classes.root} onClick={handleClick}>
      <div className={classes.colors}>{miniColorboxes}</div>
      <div className={classes.title}>
        {name} <span className={classes.emoji}>{emoji}</span>
      </div>
    </div>
  );
}

export default withStyles(styles)(MiniPalette);

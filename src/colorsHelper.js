import chroma from "chroma-js";

const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

function getRange(hexColor) {
  const end = "#fff";
  return [
    chroma(hexColor)
      .darken(1.4)
      .hex(),
    hexColor,
    end
  ];
}

function getScale(hexColors, numberOfColors) {
  return chroma
    .scale(getRange(hexColors))
    .mode("lab")
    .colors(numberOfColors);
}

export default starterPalette => {
  let newPalette = {
    ...starterPalette,
    colors: {}
  };

  levels.map(level => (newPalette.colors[level] = []));

  starterPalette.colors.map((color, i) => {
    let scale = getScale(color.color, 10).reverse();

    for (let i in scale) {
      newPalette.colors[levels[i]].push({
        name: `${color.name} ${levels[i]}`,
        id: color.name.toLowerCase().replace(/ /g, "-"),
        hex: scale[i],
        rgb: chroma(scale[i]).css(),
        rgba: chroma(scale[i])
          .css()
          .replace(")", ",1.0)")
      });
    }
    return undefined;
  });

  return newPalette;
};

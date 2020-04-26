// dictionary
var table = {
  1: "a",
  2: "b",
  3: "c",
  4: "d",
  5: "e",
  6: "f",
  7: "g",
  8: "h",
  9: "i",
  10: "j",
  11: "k",
  12: "l",
  13: "m",
  14: "n",
  15: "o",
  16: "p",
  17: "q",
  18: "r",
  19: "s",
  20: "t",
  21: "u",
  22: "v",
  23: "w",
  24: "x",
  25: "y",
  26: "z",

  27: "A",
  28: "B",
  29: "C",
  30: "D",
  31: "E",
  32: "F",
  33: "G",
  34: "H",
  35: "I",
  36: "J",
  37: "K",
  38: "L",
  39: "M",
  40: "N",
  41: "O",
  42: "P",
  43: "Q",
  44: "R",
  45: "S",
  46: "T",
  47: "U",
  48: "V",
  49: "W",
  50: "X",
  51: "Y",
  52: "Z",
  53: " "
};
// variables
let img;
let input;
let values = [];
let answer = "";

// inialization
function setup() {
  createCanvas(1000, 1100);
  pixelDensity(1);
  loadPixels();
  input = createFileInput(handleFile);
  input.position(0, height);
  if (img) {
    image(img, 0, 0);
  }
}

// file handling
function handleFile(file) {
  if (file.type === "image") {
    img = createImg(file.data);
    img.hide();
    input.hide();
  }
}
// main program
function draw() {
  // check if the file type is image
  if (img) {
    image(img, 0, 0, img.width, img.height);
  }

  // loop through every pixel in top row
  for (let x = 0; x < width; x++) {
    let c = color(get(x, 0));
    let val = c.levels[0];
    if (val != 54 && val != 0) {
      values.push(val);
    }
  }
  // stores them in array
  for (let i = 0; i < values.length; i++) {
    answer += table[values[i]];
    if (i >= values.length - 1) {
      noLoop();
    }
  }
  fill(255, 0, 0);

  textSize(20);

  text(answer, 0, 1000 + 50, 400, 50);
}

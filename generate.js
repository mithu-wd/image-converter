// dictionary
var lookup = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 10,
  k: 11,
  l: 12,
  m: 13,
  n: 14,
  o: 15,
  p: 16,
  q: 17,
  r: 18,
  s: 19,
  t: 20,
  u: 21,
  v: 22,
  w: 23,
  x: 24,
  y: 25,
  z: 26,

  A: 27,
  B: 28,
  C: 29,
  D: 30,
  E: 31,
  F: 32,
  G: 33,
  H: 34,
  I: 35,
  J: 36,
  K: 37,
  L: 38,
  M: 39,
  N: 40,
  O: 41,
  P: 42,
  Q: 43,
  R: 44,
  S: 45,
  T: 46,
  U: 47,
  V: 48,
  W: 49,
  X: 50,
  Y: 51,
  Z: 52,
  " ": 53,

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
  26: "z"
};
// ask for input
word = prompt("Enter Your Message");
// stores it in array
x = [];
// finds in the dictionary
for (let i = 0; i < word.length; i++) {
  x.push(lookup[word[i]]);
}
//  main program
function setup() {
  createCanvas(1000, 1000);

  pixelDensity(1);

  background(54);

  loadPixels();

  // goes thorugh  the first row
  for (let xx = 0; xx < width; xx += 1) {
    for (let yy = 0; yy < width; yy += 1) {
      noStroke();

      if (xx < x.length) {
        // set the pixel accoring to the matched values
        fill(x[xx]);

        rect(xx * 10, yy * 10, 1, 1);
      } else {
        // seperates them from the unmatched values

        fill(0);

        rect(xx * 10, yy * 10, 1, 1);
      }
    }
  }
}

import { black } from "ansis";

type Color = `#${string}`;
type WhiteSpace = "  ";
type Element = Color | WhiteSpace;
type Repeat = [Element, number];
type Line = (Repeat | Element)[];

const W = "  ";
const L = "#015874"; // blue
const G = "#0b9f68"; // green
const B = "#847756"; // brown
const Y = "#dcd44e"; // yellow
const K = "#000000"; // black
const E = "#34e368"; // eyes
const O = "#e1752a"; // orange
const T = "#837522"; // tail
const A = "#d6d6d8"; // gray

function toBlock(e: Color | WhiteSpace): string {
  if (e === "  ") {
    return "  ";
  }
  return black.hex(e)("██");
}

const left = "            ";

function draw(line: Line): string {
  return (
    left +
    line
      .flatMap((e) => (typeof e === "string" ? [e] : Array(e[1]).fill(e[0])))
      .map(toBlock)
      .join("")
  );
}

const lines: Line[] = [
  [[L, 16]],
  [L, [G, 14], L],
  [W, L, [G, 13], [L, 4]],
  [[W, 2], L, [G, 15], L],
  [[W, 3], L, [G, 14], [L, 6]],
  [[W, 2], B, [Y, 17], [G, 3], L],
  [W, [K, 7], [Y, 2], [K, 8], [Y, 2], [G, 3], L],
  [W, K, E, [K, 7], E, [K, 6], [Y, 3], [L, 4]],
  [[W, 2], [K, 6], Y, Y, [K, 6], [Y, 4], L],
  [[W, 2], [K, 6], Y, Y, [K, 6], [Y, 4], [L, 4]],
  [[W, 2], B, [Y, 13], O, Y, O, Y, [G, 3], L],
  [[W, 2], B, Y, Y, [K, 7], [Y, 5], O, Y, Y, [G, 3], L],
  [[W, 2], B, Y, Y, K, [O, 5], K, [Y, 4], O, Y, O, Y, L, [T, 3], [L, 3], [T, 3]],
  [[W, 2], B, Y, Y, [K, 7], [Y, 8], L, T, Y, Y, [G, 3], [Y, 3], T],
  [[W, 2], B, [Y, 17], L, T, Y, Y, [G, 3], [Y, 3], T],
  [[W, 2], [B, 13], [Y, 5], L, T, Y, Y, [L, 3], Y, G, G, L],
  [[W, 8], B, [A, 9], Y, Y, L, L, G, G, L, Y, Y, L, G, G, L],
  [[W, 8], B, [A, 5], [B, 4], Y, Y, L, L, G, G, L, T, Y, L, G, G, L],
  [[B, 4], [W, 4], B, [A, 5], B, Y, Y, B, Y, Y, L, T, [Y, 5], B, Y, Y, B],
  [B, Y, Y, B, [W, 4], B, [A, 5], B, Y, Y, B, Y, Y, [T, 7], L, Y, Y, L],
  [B, Y, Y, B, [W, 4], B, [A, 5], [B, 4], [Y, 9], [G, 3], L],
  [[B, 4], [W, 4], B, [A, 9], [Y, 9], [G, 3], L],
  [[W, 8], [B, 4], A, Y, [B, 4], A, Y, [B, 7], [L, 3]],
  [[W, 11], B, A, Y, B, W, W, B, A, Y, B],
  [[W, 11], B, A, Y, B, W, W, B, A, Y, B],
  [[W, 11], [B, 4], W, W, [B, 4]],
];

const data = { data: lines.map(draw).join("\n") };
console.log(data.data);
// console.log(JSON.stringify(data))

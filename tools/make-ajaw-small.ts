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



const f = (color: string, text: string) => black.hex(color)(text); // BorDer
const b = (color: string, text: string) => black.bgHex(color)(text); // BackGroud

const lines = [
  b(L, ` ${f(G, "▄".repeat(15))} `),
  ` ${f(L, "▀")}${b(G, `${f(L, "▄")}             ${f(L, "▀▀▀█")}`)}`,
  `  ${f(B, "▄")}${b(L, f(Y, "▄"))}${b(Y, f(G, "▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀") + f(L, "▀▀"))}${b(G, f(L, "▀▀▀"))}${b(L, " ")}`,
  `  ${b(K, ` ${f(E, "▄")}     ${f(Y, "▀▀")}${f(E, "▄")}      ${f(Y, "▄")}`)}${b(Y, "  ")}${b(L, `${f(G, "▀▀▀")} `)}`,
  `   ${b(K, `      ${f(Y, "██")}      `)}${b(Y, "    ")}${f(L, "█▄▄▄")}`,
  `   ${b(B, " ")}${b(Y, `  ${f(K, "▄▄▄▄▄▄▄")}    ${f(O, "▀")}${f(O, "▄")}${f(O, "▀")} `)}${b(G, "   ")}${b(L, " ")}`,
  '   ' + b(B, " ") + b(Y, "  ") + b(K, " " + f(O, "▀▀▀▀▀") + " ") + b(Y, "    " + f(O, "▀") + " " + f(O, "▀") + " ") + b(L, " ") + b(B, " " + f(Y, "▄▄")) + b(L, f(G, "▄▄▄")) + b(B, f(Y, "▄▄▄")) + f(B, "▄"),
  '   ' + b(B, " " + f(Y, "▀▀▀▀▀▀▀▀▀▀▀▀")) + b(Y, "     ") + b(L, " ") + b(B, " ") + b(Y, "  ") + b(G, f(L, "▄▄▄")) + b(Y, " " + f(G, "▄▄")) + b(B, f(L, "▄")),
  "         " + b(B, " ") + b(A, "     " + f(B, "▄▄▄▄")) + b(Y, "  ") + b(L, "  ") + b(G, "  ") + b(L, " ") + b(Y, f(B, "▄") + " ") + b(L, " ") + b(G, '  ') + b(L, " "),
  " " + b(B, " " + f(Y, "▄▄") + " ") + "    " + b(B, " ") + b(A, "     ") + b(B, " ") + b(Y, "  ") + b(B, " ") + b(Y, "  ") + b(B, f(L, '▀') + " " + f(Y, "▀▀▀▀▀") + f(L, "▄")) + b(Y, "  ") + b(B, f(L, "▄")),
  " " + b(B, " " + f(Y, "▀▀") + " ") + "    " + b(B, " ") + b(A, "     " + f(B, "▀▀▀▀")) + b(Y, "         ") + b(B, "   ") + b(L, " "),
  "         " + f(B, "▀▀▀█") + b(A, " ") + b(Y, " ") + f(B, "█▀▀█")  + b(A, " ") + b(Y, " ") + f(B, "█▀▀▀▀▀▀") + f(L, "▀▀▀"),
  "            " + b(B, " " + f(A, "▀") + f(Y, "▀") + " ") + "  " + b(B, " " + f(A, "▀") + f(Y, "▀") + " ")
]

const draw = (line: string) => left + line;

console.log(JSON.stringify({ data: lines.map(draw).join("\n") }));

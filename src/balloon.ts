import { black } from "ansis";
import stringWidth from "string-width";

const B = "#847756"; // brown
const Y = "#dcd44e"; // yellow

const bd = (text: string) => black.hex(B)(text); // BorDer
const bg = (text: string) => black.bgHex(Y)(text); // BackGroud

export default function balloon(text: string) {
  const lines = text.replace(/\r\n/g, "\n").split("\n");
  const cw: number[] = []; // length
  let mw = 0; // max width
  for (const line of lines) {
    mw = Math.max(mw, stringWidth(line));
    cw.push(line.length);
  }
  const pw = cw.map((w, i) => w + mw - stringWidth(lines[i]));

  const bl = bd("█"); // border square
  const borderTop = `  ${bd("▄".repeat(mw + 4))}  `;
  const borderBotttom = `  ${bd("▀▀")}${bd("█")}${bd("▀".repeat(mw + 1))}  `;
  const paddingTopBottom = ` ${bl}${bg(" ".repeat(mw + 4))}${bl}`;
  const arrow = bd("▀▄");

  const b = [
    borderTop,
    paddingTopBottom,
    ...lines.map((line, i) => ` ${bl}${black.bgHex(Y)(`  ${line.padEnd(pw[i])}  `)}${bl}`),
    paddingTopBottom,
    borderBotttom,
  ]
    .map((it) => `   ${it}`)
    .join("\n");

  return `${b}\n        ${arrow}\n          ${arrow}\n`;
}

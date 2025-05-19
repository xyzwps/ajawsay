import stringWidth from "string-width";
import { black } from "ansis";

const B = "#847756"; // brown
const Y = "#dcd44e"; // yellow

const bd = (text: string) => black.bgHex(B)(text); // BorDer
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

  const bs = bd("  "); // border square
  const borderTopBottom = `  ${bd(" ".repeat(mw + 4))}  `;
  const paddingTopBottom = bs + bg(" ".repeat(mw + 4)) + bs;

  const b = [
    borderTopBottom,
    paddingTopBottom,
    ...lines.map(
      (line, i) => bs + black.bgHex(Y)(`  ${line.padEnd(pw[i])}  `) + bs
    ),
    paddingTopBottom,
    borderTopBottom,
  ].join("\n");

  return `${b}\n    ${bs}\n      ${bs}\n        ${bs}\n`;
}

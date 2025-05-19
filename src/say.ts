import stringWidth from "string-width";
import ajaw from "./ajaw";
import balloon from "./balloon";

export default function say(text: string) {
  const w = stringWidth(text);
  const tail = w === 0 ? "  " : w === 1 ? " " : "";

  return `${balloon(text + tail)}\n${ajaw.data}\n\n`;
}

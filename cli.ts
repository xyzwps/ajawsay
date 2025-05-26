#!/usr/bin/env node

import say from "./src";

const args = process.argv[2];
if (args === undefined || args === "--help" || args === "-h") {
  console.log("Usage: ajawsay [text]");
} else {
  console.log(say(args));
}

"use strict";

import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import {} from "./notes.js";

let argv = yargs(hideBin(process.argv)).argv;
let command = process.argv[2];

console.log("Command:", process.argv);
console.log(argv);

if (command === "add") {
  console.log(`Adding note`);
} else if (command === "list") {
  console.log(`Listing notes`);
} else if (command === "read") {
  console.log(`Reading note`);
} else if (command === "remove") {
  console.log(`Removing note`);
} else {
  console.log(`Invalid command`);
}

"use strict";

import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { getAll, getNote, addNote, removeNote } from "./notes.js";

let argv = yargs(hideBin(process.argv)).argv;
// let command = process.argv[2];
let command = argv._[0];

console.log("Command:", argv);
console.log(argv);

if (command === "add") {
  addNote(argv.title, argv.body);
} else if (command === "list") {
  getAll();
} else if (command === "read") {
  getNote(argv.title);
} else if (command === "remove") {
  removeNote(argv.title);
} else {
  console.log(`Invalid command`);
}

"use strict";

import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { getAll, getNote, addNote, removeNote } from "./notes.js";

let argv = yargs(hideBin(process.argv)).argv;
let command = argv._[0];

console.log("Command:", command, "argv:", argv);

if (command === "add") {
  addNote(argv.title, argv.body);
} else if (command === "get") {
  getNote(argv.title);
} else if (command === "remove") {
  removeNote(argv.title);
} else if (command === "list") {
  getAll();
} else {
  console.log("Unknown command:", command);
}

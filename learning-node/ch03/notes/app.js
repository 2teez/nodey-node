"use strict";

import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { addNote, getAll, removeNote, getNote } from "./notes.js";

const titleOptions = {
  describe: "Title of note",
  demand: true,
  alias: "t",
};

const bodyOptions = {
  describe: "Body of note",
  demand: true,
  alias: "b",
};

const argv = yargs(hideBin(process.argv))
  .command("add", "Add a new Note", {
    title: titleOptions,
    body: bodyOptions,
  })
  .command("list", "List all Notes")
  .command("read", "Read a Note", {
    title: titleOptions,
  })
  .command("remove", "Remove a Note", {
    title: titleOptions,
  })
  .help().argv;
const command = argv._[0];

if (process.argv.length < 3) {
  console.log("Please provide a command.");
  process.exit(1);
}

if (command === "add") {
  addNote(argv.title, argv.body);
} else if (command === "list") {
  getAll();
} else if (command === "remove") {
  removeNote(argv.title);
} else if (command === "read") {
  getNote(argv.title);
}

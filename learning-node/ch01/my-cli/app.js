"use strict";

if (process.argv.length < 3) {
  console.log("Usage: node app.js <command>");
  process.exit(1);
}

let command = process.argv[2];
console.log("Command: " + command);
console.log(process.argv);

switch (command) {
  case "add":
    console.log("Adding a Note");
    break;
  case "list":
    console.log("Listing Notes");
    break;
  case "read":
    console.log("Reading a Note");
    break;
  case "remove":
    console.log("Deleting a Note");
    break;
  default:
    console.log("Unknown command: " + command);
    process.exit(1);
}

"use strict";
import { readFileSync, write, writeFileSync } from "node:fs";

const obj = {
  name: "JavaScript",
};

console.log(`obj: ${obj}, type: ${typeof obj}`);
console.log(JSON.stringify(obj));

const personString = '{"name":"John","age":30,"city":"New York"}';
console.log(`personString: ${personString}, type: ${typeof personString}`);
const person = JSON.parse(personString);
console.log("person:", person, "type:", typeof person);
//
//
let originalNote = {
  title: "Some title",
  body: "Some body...",
};

let originalNoteString = JSON.stringify(originalNote);
writeFileSync("note.json", originalNoteString);

// read back the file
//
const noteString = readFileSync("note.json");
const note = JSON.parse(noteString);
console.log("readNote:", note, "type:", typeof note);
console.log(note.title);

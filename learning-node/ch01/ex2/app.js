"use strict";

import { appendFile } from "node:fs";
import { userInfo } from "node:os";
import { Age, addNote, add } from "./notes.js";

const username = userInfo().username;

appendFile(
  "greetings.txt",
  `Hello, ${username}! You are ${Age} years old.`,
  (err) => {
    if (err) {
      console.error(err);
    }
  },
);

addNote();
const result = add(3, 5);
console.log(`Result: ${result}`);
